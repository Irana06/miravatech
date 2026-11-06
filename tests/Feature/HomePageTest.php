<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\ProductCategory;
use Database\Seeders\ProductSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_lists_only_published_packages_in_order()
    {
        $this->seed(ProductSeeder::class);

        Product::factory()->unpublished()->create([
            'category_id' => ProductCategory::where('slug', 'website')->value('id'),
        ]);

        $this->get(route('home'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('public/home')
                ->has('categories', 4)
                ->where('categories.0.slug', 'website')
                ->where('categories.3.slug', 'perbaikan')
                ->has('categories.0.products', 3)
                ->where('categories.0.products.0.name', 'Ume')
                ->where('categories.0.products.1.is_featured', true)
                ->has('categories.0.products.2.features', 4)
            );
    }

    public function test_prices_are_left_out_of_the_page_while_hidden()
    {
        config(['miravatech.show_prices' => false]);
        $this->seed(ProductSeeder::class);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->where('showPrices', false)
                ->where('categories.0.products.0.name', 'Ume')
                ->where('categories.0.products.0.price', null)
                ->where('categories.0.products.1.price', null)
            );
    }

    public function test_prices_are_shown_when_switched_on()
    {
        config(['miravatech.show_prices' => true]);
        $this->seed(ProductSeeder::class);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->where('showPrices', true)
                ->where('categories.0.products.0.price', '1250000.00')
            );
    }

    public function test_product_seeder_keeps_prices_set_from_the_admin_panel()
    {
        $this->seed(ProductSeeder::class);
        Product::where('slug', 'website-ume')->update(['price' => 2000000]);
        Product::where('slug', 'mobile-matsu')->update(['price' => null]);

        $this->seed(ProductSeeder::class);

        $this->assertSame('2000000.00', Product::firstWhere('slug', 'website-ume')->price);
        $this->assertSame('2500000.00', Product::firstWhere('slug', 'website-take')->price);
        $this->assertNull(Product::firstWhere('slug', 'mobile-matsu')->price);
    }

    public function test_home_page_shares_contact_details()
    {
        config(['miravatech.whatsapp' => '081234567890']);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->where('contact.whatsapp', '081234567890')
            );
    }
}
