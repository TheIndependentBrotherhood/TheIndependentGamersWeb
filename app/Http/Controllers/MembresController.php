<?php

namespace App\Http\Controllers;

use App\Membres;
use Illuminate\Http\Request;

class MembresController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin = Membres::where('role', 'membre')->get();
        return $admin->toJson(JSON_PRETTY_PRINT);
    }

            /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexstaff()
    {
        $staff = Membres::where('role', 'staff')->get();
        return $staff->toJson(JSON_PRETTY_PRINT);
    }

            /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexmembres()
    {
        $membre = Membres::where('role', 'membre')->get();
        return $membre->toJson(JSON_PRETTY_PRINT);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Membres::create($request->all())) {
            return response()->json([
                'success' => 'L\'ajout de membre c\'est bien passé'
            ], 200);
        };

        return response()->json([
        'error' => 'L\'ajout de membre c\'est mal passé'
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Membres  $membres
     * @return \Illuminate\Http\Response
     */
    public function show(Membres $membre)
    {
        // $membres = Membres::orderByDesc('role');
        // return new ResourcesMembres($membres);
        return $membre->toJson(JSON_PRETTY_PRINT);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Membres  $membres
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Membres $membre)
    {
        if ($membre->update($request->all())) {
            return response()->json([
                'success' => 'La modification du membre c\'est bien passé'
            ], 200);
        };
        return response()->json([
            'error' => 'La modification du membre c\'est mal passé'
        ], 403);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Membres  $membres
     * @return \Illuminate\Http\Response
     */
    public function destroy(Membres $membre)
    {
        if ($membre->delete()) {
            return response()->json([
                'success' => 'Le membre à bien été supprimé'
            ], 200);
        };
        return response()->json([
            'error' => 'La suppression du membre c\'est mal passé'
        ], 403);
    }
}
