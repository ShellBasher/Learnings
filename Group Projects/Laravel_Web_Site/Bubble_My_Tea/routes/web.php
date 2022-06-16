<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\BagController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProductController;

Route::get('', function () {
    return view('home');
});


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

// Route::get('/about', [AboutController::class, 'show'] )->name('about');

// Route::get('/login', [LoginController::class, 'show'])->name('login');

// Route::get('/login', [RegisterController::class, 'show'])->name('register');

// Route::get('/cart', [CartController::class, 'show'])->name('cart');

// Route::get('/menu', [MenuController::class, 'show'])->name('menu');

// Route::get('/home', [HomeController::class, 'show'])->name('home');

// Route::get('/cart', [CartController::class, 'store'])->name('cart');

// Route::get('/', [ProductController::class, 'productList'])->name('products.list');

// Route::get('cart', [CartController::class, 'cartList'])->name('cart.list');

// Route::post('cart', [CartController::class, 'addToCart'])->name('cart.store');

// Route::post('update-cart', [CartController::class, 'updateCart'])->name('cart.update');

// Route::post('remove', [CartController::class, 'removeCart'])->name('cart.remove');

// Route::post('clear', [CartController::class, 'clearAllCart'])->name('cart.clear');

Route::get('/about', [AboutController::class, 'show'] )->name('about');

Route::get('/login', [LoginController::class, 'show'])->name('login');

Route::get('/login', [RegisterController::class, 'show'])->name('register');

Route::get('/cart', [CartController::class, 'show'])->name('cart');

Route::get('/menu', [MenuController::class, 'show'])->name('menu');

Route::get('/home', [HomeController::class, 'show'])->name('home');

Route::get('/bag', [BagController::class, 'show'])->name('bag');


require __DIR__.'/auth.php';
