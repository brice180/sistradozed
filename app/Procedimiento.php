<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procedimiento extends Model
{
   protected $fillable = ['descripcion','porcentaje_uit','monto',
    'dias_resolver','inicia_proc','resuelve_proc','reconsidera_proc'
     ];


   public function requisitos()
	{
        return $this->belongsToMany('App\Requisito');  
	}
}

