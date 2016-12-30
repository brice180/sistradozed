<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Procedimiento;
use Input;
use DB;

class ProcedimientoController extends Controller
{
     public function getIndex()  //Listar todos los remitentes
    {
        //$remitentes = Remitente::all();        
       	$procedimientos = DB::select('call selec_procedimientos');
        return response()->success(compact('procedimientos')); 
    }

    public function getProcedimientoShow($id)  // Obtener datos por ID
    {
        $procedimiento = Procedimiento::find($id);
        return response()->success($procedimiento);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function postProcedimiento() // Insertar procedimiento
    {
        $procedimiento = Procedimiento::create([            
            'descripcion' => Input::get('descripcion'),
            'porcentaje_uit' => Input::get('porcentaje_uit'),
            'monto' => Input::get('monto'),
            'dias_resolver' => Input::get('dias_resolver'),
            'inicia_proc' => Input::get('inicia_proc'),
            'resuelve_proc' => Input::get('resuelve_proc'),
            'reconsidera_proc' => Input::get('reconsidera_proc'),
        ]);

        return response()->success(compact('procedimiento'));
    }

     /**
     *
     * @return JSON
     */
    public function putProcedimientoShow()  //Editar procedimiento
    {
        $procedimientoForm = Input::get('data');
        $affectedRows = Procedimiento::where('id', '=', intval($procedimientoForm['id']))->update($procedimientoForm);

        return response()->success($procedimientoForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteProcedimiento($id)  // Eliminar procedimiento
    {
        Procedimiento::destroy($id);
        return response()->success('success');
    }

    public function getRequisitos($id)
    {
        $procrequisito = Procedimiento::find($id);
        //$procrequisito = Procedimiento::where('id',$id);
        $procrequisito['requisito'] = $procrequisito
                        ->requisitos()
                        ->select(['requisitos.id', 'requisitos.descripcion'])
                        ->get();

        return response()->success($procrequisito);
    }

    public function putRequisitos(Request $request)
    {
        $procedreqForm = array_dot(
            app('request')->only(
                'data.descripcion',
                'data.id'
            )
        );
        $procId = intval($procedreqForm['data.id']);
        $procedimiento = Procedimiento::find($procId);

        $procData = [
            'descripcion' => $procedreqForm['data.descripcion'],
        ];

        $affectedRows = Procedimiento::where('id', '=', $procId)->update($procData);

        foreach (Input::get('data.requisito') as $setRequisito) {
            $procedimiento->requisito()->attach($setRequisito);
        }

        return response()->success('success');
    }
}
