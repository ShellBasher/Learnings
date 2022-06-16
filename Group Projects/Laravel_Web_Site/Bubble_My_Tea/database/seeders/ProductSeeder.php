<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
      Product::create([
        'Product_ID' => '1',
        'image' => 'images/teas/caramel.jpg',
        'Name' => 'caramel',
        'Price' => '5,49',
        'description' => 'Caramel / Lait de soja',
        'Expiration' => '00',
      ]);
    }
}
