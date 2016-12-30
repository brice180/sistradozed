<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tipodocumento;
use Input;


class TipoDocController extends Controller
{
	public function getIndex()  //Listar todas las tipodoces externas
    {
        $tipodocumentos = Tipodocumento::all();
        return response()->success(compact('tipodocumentos'));
    }
     public function getTipodocumentoShow($id)  // Obtener datos por ID
    {
        $tipodocumento = Tipodocumento::find($id);
        return response()->success($tipodocumento);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postTipodocumento() // Insertar tipodocumento
    {
        $tipodocumento = Tipodocumento::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('tipodocumento'));
    }

     /**
     *
     * @return JSON
     */
    public function putTipodocumentoShow()  //Editar Tipodoc
    {
        $tipodocumentoForm = Input::get('data');
        $affectedRows = Tipodocumento::where('id', '=', intval($tipodocumentoForm['id']))->update($tipodocumentoForm);

        return response()->success($tipodocumentoForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteTipodocumento($id)  // Eliminar tipodocumento
    {
        Tipodocumento::destroy($id);
        return response()->success('success');
    }
}