<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcedimientoRequisitoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
         Schema::create('procedimiento_requisito', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('procedimiento_id')->unsigned()->index();
            $table->foreign('procedimiento_id')->references('id')->on('procedimientos')->onDelete('cascade');
            $table->integer('requerimiento_id')->unsigned()->index();
            $table->foreign('requerimiento_id')->references('id')->on('requerimientos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('procedimiento_requisito');
    }
}
