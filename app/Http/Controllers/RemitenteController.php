<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Remitente;
use App\Entidad;
use DB;
Use Input;

class RemitenteController extends Controller
{
    //
    public function getIndex()  //Listar todos los remitentes
    {
        //$remitentes = Remitente::all();        
       	$remitentes = DB::select('call selec_remitentes');
        return response()->success(compact('remitentes')); 
    }

    public function getRemitenteShow($id)  // Obtener datos por ID
    {
        $remitente = Remitente::find($id);
        return response()->success($remitente);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postRemitente() // Insertar remitente
    {
        $remitente = Remitente::create([            
            'tipodoc_id' => Input::get('tipodoc_id'),
            'numdoc' => Input::get('numdoc'),
            'nombres' => Input::get('nombres'),
            'apellidos' => Input::get('apellidos'),
            'entidad_id' => Input::get('entidad_id'),
            'tiporemitente_id' => Input::get('tiporemitente_id'),
            'razonSocial' => Input::get('razonSocial'),
        ]);

        return response()->success(compact('remitente'));
    }

     /**
     *
     * @return JSON
     */
    public function putRemitenteShow()  //Editar remitente
    {
        $remitenteForm = Input::get('data');
        $affectedRows = Remitente::where('id', '=', intval($remitenteForm['id']))->update($remitenteForm);

        return response()->success($remitenteForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteRemitente($id)  // Eliminar remitente
    {
        Remitente::destroy($id);
        return response()->success('success');
    }
}
