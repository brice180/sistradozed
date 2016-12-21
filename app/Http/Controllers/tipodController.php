<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tipospersona;

class tipodController extends Controller
{
    //
    public function getIndex()
    {
        $tipospersonas = Tipospersona::all();
        return response()->success(compact('tipospersonas'));
    }
}
