<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Artuser as PostResource;
use App\Artuser;

class ArtuserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Artuser::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'usuaId' => 'required', 
            'usuaPassword' => 'required', 
            'usuaNombre' => 'required',
            'usuaApellido' => 'required', 
            'usuaCorreo' => 'required', 
            'usuaTelefono1' => 'required', 
            'usuaTelefono2' => 'required', 
            'usuaStatus' => 'required',
        ]);
        $post = new Artuser([
            'usuaId' => $request->usuaId, 
            'usuaPassword' => $request->usuaPassword, 
            'usuaNombre' => $request->usuaNombre,
            'usuaApellido'  => $request->usuaApellido,
            'usuaCorreo' => $request->usuaCorreo, 
            'usuaTelefono1' => $request->usuaTelefono1, 
            'usuaTelefono2' => $request->usuaTelefono2, 
            'usuaStatus' => $request->usuaStatus,
        ]);
        $post->save();
        return response()->json([
            'data' => 'User created!'
        ]);
    }
        /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new PostResource(Artuser::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'usuaId' => 'required', 
            'usuaPassword' => 'required', 
            'usuaNombre' => 'required',
            'usuaApellido' => 'required', 
            'usuaCorreo' => 'required', 
            'usuaTelefono1' => 'required', 
            'usuaTelefono2' => 'required', 
            'usuaStatus' => 'required',
        ]);
        $post = Artuser::findOrFail($id);
        $post->usuaId = $request->usuaId;
        $post->usuaPassword = $request->usuaPassword; 
        $post->usuaNombre = $request->usuaNombre;
        $post->usuaApellido = $request->usuaApellido;
        $post->usuaCorreo = $request->usuaCorreo; 
        $post->usuaTelefono1 = $request->usuaTelefono1; 
        $post->usuaTelefono2 = $request->usuaTelefono2; 
        $post->usuaStatus = $request->usuaStatus;
        $post->save();
        return response()->json([
            'data' => 'Post updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
