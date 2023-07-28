<?php

use App\Http\Controllers\Ecommerce\IndexController;
use App\Http\Controllers\Ecommerce\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('')->group(function () {
    Route::get('', [IndexController::class, 'index'])->name('ecommerce');
    Route::get('home', [HomeController::class, 'home'])->name('ecommerce');
});
