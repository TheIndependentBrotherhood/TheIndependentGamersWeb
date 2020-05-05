<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('/main/home');
});

Route::get('/mentions-légales', function () {
    return view('/mentions/mentions');
});

Route::get('/jeux', 'JeuxController@list');

Route::get('/membres', 'MembresController@list');

Route::get('/twitch', function () {
    return view('/devlop/devlop');
});

Route::get('/events', function () {
    return view('/devlop/devlop');
});

Route::get('/recrutements', function () {
    return view('/devlop/devlop');
});
