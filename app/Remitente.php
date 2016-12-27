<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Remitente extends Model
{
    //
    protected $fillable = ['tipodoc_id','numdoc','nombres',
    'apellidos','entidad_id','tipo_remitente_id','razonSocial'
     ];

   	
    public function entidad()
	{
        return $this->belongs_to('App\Entidad');  // Devuelve solo un objeto
	}

}
