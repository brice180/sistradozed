<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Uit;
use Input;

class UitController extends Controller
{
     public function getIndex()  //Listar todas las oficinaes externas
    {
        $uits = Uit::all();
        return response()->success(compact('uits'));
    }

    public function getUitShow($id)  // Obtener datos por ID
    {
        $uit = Uit::find($id);
        return response()->success($uit);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postUit() // Insertar oficina
    {
        $uit = Uit::create([
            'monto' => Input::get('monto'),
            'anio' => Input::get('anio'),
        ]);

        return response()->success(compact('uit'));
    }

     /**
     *
     * @return JSON
     */
    public function putUitShow()  //Editar oficina
    {
        $uitForm = Input::get('data');
        $affectedRows = Uit::where('id', '=', intval($uitForm['id']))->update($uitForm);

        return response()->success($uitForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteUit($id)  // Eliminar oficina
    {
        Uit::destroy($id);
        return response()->success('success');
    }

    public function getUitactual()
    {
        $anioActual = date ("Y");
        $uitactual = Uit::where('anio',intval($anioActual))->value('monto');
        return response()->success($uitactual);
    }
}
