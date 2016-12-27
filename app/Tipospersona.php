<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipospersona extends Model
{
    //
    protected $table = 'tipo_remitente';   

    protected $fillable = ['descripcion',
     ];

     public function Remitente()
     {
     	return $this->has_many('Remitente');
     }
}
