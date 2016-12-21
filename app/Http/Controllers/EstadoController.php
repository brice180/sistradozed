<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estado;
use Auth;
use Input;
use Validator;

class EstadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getIndex()
    {
        $estados = Estado::all();
        return response()->success(compact('estados'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
    public function getEstadosShow($id)
    {
        $estado = Estado::find($id);
        return response()->success($estado);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postEstados()
    {
        $estado = Estado::create([
            'descripcion' => Input::get('descripcion'),
            'color' => Input::get('color'),
        ]);

        return response()->success(compact('estado'));
    }

     /**
     * Update system permission.
     *
     * @return JSON
     */
    public function putEstadosShow()
    {
        $estadoForm = Input::get('data');
        $affectedRows = Estado::where('id', '=', intval($estadoForm['id']))->update($estadoForm);

        return response()->success($estadoForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteEstado($id)
    {
        Estado::destroy($id);
        return response()->success('success');
    }

}
