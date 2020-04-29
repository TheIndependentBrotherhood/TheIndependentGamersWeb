<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MembresController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function list(){
        return view('/membres/list');
    }
}
