<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Requisito;
use Input;

class RequisitoController extends Controller
{
    public function getIndex()
    {
        $requisitos = Requisito::all();
        return response()->success(compact('requisitos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
    public function getRequisitoShow($id)
    {
        $requisito = Requisito::find($id);
        return response()->success($requisito);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postRequisito()
    {
        $requisito = Requisito::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('requisito'));
    }

     /**
     * Update system permission.
     *
     * @return JSON
     */
    public function putRequisitoShow()
    {
        $estadoForm = Input::get('data');
        $affectedRows = Requisito::where('id', '=', intval($estadoForm['id']))->update($estadoForm);

        return response()->success($estadoForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteRequisito($id)
    {
        Requisito::destroy($id);
        return response()->success('success');
    }
}
