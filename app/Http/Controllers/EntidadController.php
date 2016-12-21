<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entidad;
use Input;

class EntidadController extends Controller
{
    //
     public function getIndex()  //Listar todas las entidades externas
    {
        $entidades = Entidad::all();
        return response()->success(compact('entidades'));
    }

    public function getEntidadShow($id)  // Obtener datos por ID
    {
        $entidad = Entidad::find($id);
        return response()->success($entidad);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postEntidad() // Insertar entidad
    {
        $entidad = Entidad::create([
            'razonSocial' => Input::get('razonSocial'),
        ]);

        return response()->success(compact('entidad'));
    }

     /**
     *
     * @return JSON
     */
    public function putEntidadShow()  //Editar Entidad
    {
        $entidadForm = Input::get('data');
        $affectedRows = Entidad::where('id', '=', intval($entidadForm['id']))->update($entidadForm);

        return response()->success($entidadForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteEntidad($id)  // Eliminar entidad
    {
        Entidad::destroy($id);
        return response()->success('success');
    }
}
