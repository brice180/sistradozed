<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Motivo;
use Input;

class MotivoController extends Controller
{
    public function getIndex()  //Listar todas las tipodoces externas
    {
        $motivos = Motivo::all();
        return response()->success(compact('motivos'));
    }
     public function getMotivoShow($id)  // Obtener datos por ID
    {
        $motivo = Motivo::find($id);
        return response()->success($motivo);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postMotivo() // Insertar Motivo
    {
        $motivo = Motivo::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('motivo'));
    }

     /**
     *
     * @return JSON
     */
    public function putMotivoShow()  //Editar Tipodoc
    {
        $motivoForm = Input::get('data');
        $affectedRows = Motivo::where('id', '=', intval($motivoForm['id']))->update($motivoForm);

        return response()->success($motivoForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteMotivo($id)  // Eliminar Motivo
    {
        Motivo::destroy($id);
        return response()->success('success');
    }
}
