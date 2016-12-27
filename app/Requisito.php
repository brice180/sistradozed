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
        return $this->has_many_and_belongs_to('App\Procedimiento');  // Devuelve solo un objeto
	}
}
