<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Oficina;
use Input;

class OficinaController extends Controller
{
     public function getIndex()  //Listar todas las oficinaes externas
    {
        $oficinas = Oficina::all();
        return response()->success(compact('oficinas'));
    }

    public function getOficinaShow($id)  // Obtener datos por ID
    {
        $oficina = Oficina::find($id);
        return response()->success($oficina);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postOficina() // Insertar oficina
    {
        $oficina = Oficina::create([
            'nombre' => Input::get('nombre'),
            'siglas' => Input::get('siglas'),
        ]);

        return response()->success(compact('oficina'));
    }

     /**
     *
     * @return JSON
     */
    public function putOficinaShow()  //Editar oficina
    {
        $oficinaForm = Input::get('data');
        $affectedRows = Oficina::where('id', '=', intval($oficinaForm['id']))->update($oficinaForm);

        return response()->success($oficinaForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteOficina($id)  // Eliminar oficina
    {
        Oficina::destroy($id);
        return response()->success('success');
    }
}
