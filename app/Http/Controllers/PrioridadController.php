<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prioridad;
use Input;

class PrioridadController extends Controller
{
    //
    public function getIndex()  //Listar todas las tipodoces externas
    {
        $prioridades = Prioridad::all();
        return response()->success(compact('prioridades'));
    }
     public function getPrioridadShow($id)  // Obtener datos por ID
    {
        $prioridad = Prioridad::find($id);
        return response()->success($prioridad);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postPrioridad() // Insertar Prioridad
    {
        $prioridad = Prioridad::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('prioridad'));
    }

     /**
     *
     * @return JSON
     */
    public function putPrioridadShow()  //Editar Tipodoc
    {
        $prioridadForm = Input::get('data');
        $affectedRows = Prioridad::where('id', '=', intval($prioridadForm['id']))->update($prioridadForm);

        return response()->success($prioridadForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePrioridad($id)  // Eliminar Prioridad
    {
        Prioridad::destroy($id);
        return response()->success('success');
    }
}
