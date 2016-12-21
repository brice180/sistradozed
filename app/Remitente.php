<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Remitente extends Model
{
    //
    protected $fillable = ['tipodoc_id','numdoc','nombres',
    'apellidos','entidad_id','tiporemitente_id','razonSocial'
     ];

   
	public function entidad2()
	{
    return $this->belongsTo('App\Entidad','idEntidad','id');
	}

	
    public function entidad()
	{
    return $this->hasOne('App\Entidad','id');
	}

}
