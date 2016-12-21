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
        return $this->belongsTo('App\Remitente');
        //return $this->hasMany('App\Remitente');
    }
}
