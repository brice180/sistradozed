<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entidad extends Model
{
    //
    protected $table = 'entidades';   

    protected $fillable = ['razonSocial',
     ];

     public function remitentes()
    {
       return $this->hasMany('App\Remitente'); // Devuelve un array de remitente
    }
}
