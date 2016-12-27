<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcedimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procedimientos', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('descripcion');
            $table->double('porcentaje_uit', 7, 4);
            $table->double('monto', 8, 3);
            $table->integer('dias_resolver');
            $table->unsignedInteger('inicia_proc');
            $table->unsignedInteger('resuelve_proc');
            $table->unsignedInteger('reconsidera_proc');
            $table->timestamps();

            $table->foreign('inicia_proc')->references('id')->on('oficinas');
            $table->foreign('resuelve_proc')->references('id')->on('oficinas');
            $table->foreign('reconsidera_proc')->references('id')->on('oficinas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('procedimientos');
    }
}
