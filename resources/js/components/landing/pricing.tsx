import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/landing/motion';
import {
    buttonOutline,
    buttonPrimary,
    Container,
    SectionHeading,
    WhatsappLink,
} from '@/components/landing/primitives';
import { Aftercare } from '@/components/landing/aftercare';
import { formatRupiah } from '@/lib/format';
import { cn } from '@/lib/utils';
import { fillTemplate, PACKAGE_MESSAGE } from '@/lib/whatsapp';
import type { PackageCategory, PackageProduct } from '@/types';

// One kanji per tier: 始 (start), 進 (advance), 極 (the utmost).
const tierKanji: Record<string, string> = {
    starter: '始',
    growth: '進',
    pro: '極',
};

// Categories billed per period instead of once per project.
const priceUnit: Record<string, string> = {
    maintenance: '/bulan',
};

export function Pricing({ categories }: { categories: PackageCategory[] }) {
    const [activeSlug, setActiveSlug] = useState(categories[0]?.slug);
    const active =
        categories.find((category) => category.slug === activeSlug) ??
        categories[0];

    if (!active) {
        return null;
    }

    return (
        <section
            id="paket"
            className="scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="flex flex-col gap-12 sm:gap-16">
                <SectionHeading
                    index={3}
                    label="Paket & harga"
                    ja="料金"
                    title="Harga bersahabat, mulai dari yang paling sederhana."
                    description="Tiga tingkatan: Starter, Growth, dan Pro. Mulai dari yang Anda butuhkan sekarang, naik kelas saat bisnis tumbuh. Semua paket bisa disesuaikan."
                />

                <div className="flex flex-col">
                    {categories.length > 1 && (
                        <div
                            role="tablist"
                            aria-label="Kategori layanan"
                            className="-mx-5 flex gap-7 overflow-x-auto px-5 sm:mx-0 sm:gap-10 sm:px-0"
                        >
                            {categories.map((category) => {
                                const selected = category.slug === active.slug;

                                return (
                                    <button
                                        key={category.slug}
                                        type="button"
                                        role="tab"
                                        aria-selected={selected}
                                        onClick={() =>
                                            setActiveSlug(category.slug)
                                        }
                                        className={cn(
                                            'relative h-12 shrink-0 text-[15px] whitespace-nowrap transition-colors duration-300',
                                            'after:bg-ink after:ease-out-expo after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:transition-transform after:duration-500',
                                            selected
                                                ? 'text-ink after:scale-x-100'
                                                : 'text-ink-subtle hover:text-ink after:scale-x-0',
                                        )}
                                    >
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    <ul
                        key={active.slug}
                        role={categories.length > 1 ? 'tabpanel' : undefined}
                        className="border-ink grid border-t lg:grid-cols-3"
                    >
                        {active.products.map((product, index) => (
                            <PackageColumn
                                key={product.id}
                                product={product}
                                index={index}
                                categoryName={active.name}
                                unit={priceUnit[active.slug]}
                            />
                        ))}
                    </ul>
                </div>

                <p className="text-ink-subtle max-w-[620px] text-[13px] leading-[1.7]">
                    Harga di atas adalah harga awal; harga final ditentukan
                    setelah diskusi brief. Tombol pesan membuka WhatsApp dengan
                    pesan yang sudah terisi otomatis.
                </p>

                <Aftercare />
            </Container>
        </section>
    );
}

function PackageColumn({
    product,
    index,
    categoryName,
    unit,
}: {
    product: PackageProduct;
    index: number;
    categoryName: string;
    unit?: string;
}) {
    const featured = product.is_featured;
    const kanji = tierKanji[product.name.toLowerCase()];
    const message = fillTemplate(product.wa_template ?? PACKAGE_MESSAGE, {
        paket: product.name,
        kategori: categoryName,
    });

    return (
        <li className="border-line relative border-b lg:border-b-0 lg:border-l lg:first:border-l-0 lg:[&:first-child>div]:pl-0">
            {featured && (
                <span
                    aria-hidden="true"
                    className="bg-ai absolute inset-x-0 -top-px h-[3px]"
                />
            )}
            <Reveal
                delay={index * 100}
                className="flex h-full flex-col gap-8 py-10 sm:py-12 lg:px-10 lg:py-14"
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[28px] leading-none font-light tracking-[-0.03em] sm:text-[32px]">
                            {product.name}
                        </h3>
                        {product.tagline && (
                            <p className="text-ink-subtle text-[13px]">
                                {product.tagline}
                            </p>
                        )}
                    </div>
                    {kanji && (
                        <span
                            lang="ja"
                            aria-hidden="true"
                            className={cn(
                                'font-mincho text-[44px] leading-none',
                                featured ? 'text-ai' : 'text-line-strong',
                            )}
                        >
                            {kanji}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2.5">
                    <p className="text-ink-subtle font-mono text-[11px] tracking-[0.12em] uppercase">
                        {featured && (
                            <span className="text-ai">Rekomendasi · </span>
                        )}
                        {product.price === null ? 'Harga' : 'Mulai dari'}
                    </p>
                    <p className="text-[34px] leading-none font-light tracking-[-0.03em] tabular-nums sm:text-[40px]">
                        {product.price === null
                            ? 'Sesuai brief'
                            : formatRupiah(product.price)}
                        {product.price !== null && unit && (
                            <span className="text-ink-subtle ml-1.5 text-base tracking-normal">
                                {unit}
                            </span>
                        )}
                    </p>
                </div>

                {product.features.length > 0 && (
                    <ul className="flex flex-col gap-3 text-[14px] leading-[1.6] sm:text-[15px]">
                        {product.features.map((feature) => (
                            <li key={feature} className="flex gap-3.5">
                                <span
                                    aria-hidden="true"
                                    className="bg-ink-subtle mt-[11px] h-px w-3 shrink-0"
                                />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <WhatsappLink
                    message={message}
                    className={cn(
                        'mt-auto w-full justify-between sm:w-auto sm:self-start',
                        featured ? buttonPrimary : buttonOutline,
                    )}
                >
                    {product.price === null
                        ? 'Diskusikan via WhatsApp'
                        : 'Pesan via WhatsApp'}
                    <ArrowRight className="size-4" />
                </WhatsappLink>
            </Reveal>
        </li>
    );
}
