<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_orders', function (Blueprint $table) {
          $table->id('Order_ID');
          $table->unsignedBigInteger('Customer_ID');
          $table->date('Date');
          $table->unsignedBigInteger('Product_ID');
          $table->float('Total_Price');
          $table->string('Service');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_orders');
    }
};
