<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Origen;

class OrigenController extends Controller
{
    //
    public function getIndex()
    {
        $origenes = Origen::all();
        return response()->success(compact('origenes'));
    }
}
