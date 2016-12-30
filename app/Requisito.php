<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requisito extends Model
{
    //
    protected $fillable = ['descripcion',
     ];

    public function procedimientos()
	{
        return $this->belongsToMany('App\Procedimiento');  
	}
}
