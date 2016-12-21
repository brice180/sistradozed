<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cargo;
use Input;

class CargoController extends Controller
{
    //
    public function getIndex()
    {
        $cargos = Cargo::all();
        return response()->success(compact('cargos'));
    }

    public function postCargo()
    {
        $cargo = Cargo::create([
            'descripcion' => Input::get('descripcion'),
        ]);

        return response()->success(compact('cargo'));
    }

    public function deleteCargo($id)
    {
        Cargo::destroy($id);
        return response()->success('success');
    }

    public function getCargoShow($id)
    {
        $cargo = Cargo::find($id);
        return response()->success($cargo);
    }

     public function putCargoShow()
    {
        $cargoForm = Input::get('data');
        $affectedRows = Cargo::where('id', '=', intval($cargoForm['id']))->update($cargoForm);

        return response()->success($cargoForm);
    }
}
