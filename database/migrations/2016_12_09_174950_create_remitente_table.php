<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRemitenteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remitentes', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('tipodoc_id');
            $table->string('numdoc',11)->unique();
            $table->string('nombres',80);
            $table->string('apellidos',100);
            $table->unsignedInteger('entidad_id');
            $table->unsignedInteger('tipo_remitente_id');
            $table->string('razonSocial',100)->nullable();
            $table->timestamps();
            
            $table->foreign('tipodoc_id')->references('id')->on('tipo_doc');
            $table->foreign('entidad_id')->references('id')->on('entidades');
            $table->foreign('tipo_remitente_id')->references('id')->on('tipo_remitente');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('remitentes');
    }
}
