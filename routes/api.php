<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {

    Route::post('giris', 'UserController@giris');
    Route::post('kayit-ol', 'AuthController@signup');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('icerikler', function (Request $request) {
            return 'çok önemli içerikler burada geeel';
        });
        Route::delete('cikis', 'UserController@cikis');
    });
});
