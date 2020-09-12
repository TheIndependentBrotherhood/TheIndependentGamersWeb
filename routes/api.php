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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ====================== Membres Pages ============================
                                                                 //=
// === Private Route ===                                         //=
                                                                 //=
Route::middleware('auth:api')->group( function() {               //= 
    Route::apiResource('membre/membre', 'MembresController');    //=
    Route::apiResource('membre/admin', 'AdminController');       //=
    Route::apiResource('membre/staff', 'StaffController');       //=
});                                                              //=
                                                                 //=
// === Public Route ===                                          //=
                                                                 //=
Route::get('/membre/membre', 'MembresController@index');         //=
Route::get('/membre/membre/{membre}', 'MembresController@show'); //=
Route::get('/membre/admin', 'MembresController@index');          //=
Route::get('/membre/admin{admin}', 'MembresController@show');    //=
Route::get('/membre/staff', 'MembresController@index');          //=
Route::get('/membre/staff{staff}', 'MembresController@show');    //=
                                                                 //=    
//==================================================================