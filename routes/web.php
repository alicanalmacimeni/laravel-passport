<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/giris', function () {
    return view('welcome');
})->name('login');

Route::get('/kayit-ol', function () {
    return view('welcome');
});

Route::middleware('auth')->get('/icerik', function () {
    return view('welcome');
});

Auth::routes();
