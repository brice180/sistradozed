<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tipodoc;
use Input;

class TipodocumentoController extends Controller
{
    public function getIndex()  //Listar todas las tipodoces externas
    {
        $tipodocs = Tipodoc::all();
        return response()->success(compact('tipodocs'));
    }
     public function getTipodocShow($id)  // Obtener datos por ID
    {
        $tipodoc = Tipodoc::find($id);
        return response()->success($tipodoc);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postTipodoc() // Insertar tipodoc
    {
        $tipodoc = Tipodoc::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('tipodoc'));
    }

     /**
     *
     * @return JSON
     */
    public function putTipodocShow()  //Editar Tipodoc
    {
        $tipodocForm = Input::get('data');
        $affectedRows = Tipodoc::where('id', '=', intval($tipodocForm['id']))->update($tipodocForm);

        return response()->success($tipodocForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteTipodoc($id)  // Eliminar tipodoc
    {
        Tipodoc::destroy($id);
        return response()->success('success');
    }
}
