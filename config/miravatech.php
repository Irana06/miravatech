<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Business Contact
    |--------------------------------------------------------------------------
    |
    | Contact details shown on the public website. The WhatsApp number is used
    | for every "order / consult" button; write it as 08xx or 628xx.
    |
    */

    'whatsapp' => env('MIRAVATECH_WHATSAPP', '6282233365018'),

    'email' => env('MIRAVATECH_EMAIL'),

    'instagram' => env('MIRAVATECH_INSTAGRAM'),

    'business_hours' => env('MIRAVATECH_BUSINESS_HOURS'),

    /*
    |--------------------------------------------------------------------------
    | Package Prices
    |--------------------------------------------------------------------------
    |
    | While false, the packages are listed without their prices and visitors
    | are asked to check the price on WhatsApp. Prices stay in the admin panel.
    |
    */

    'show_prices' => (bool) env('MIRAVATECH_SHOW_PRICES', false),

];
