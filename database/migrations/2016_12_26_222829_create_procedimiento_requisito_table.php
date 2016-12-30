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
            $table->unsignedInteger('procedimiento_id')->index();            
            $table->unsignedInteger('requisito_id')->index();            
            $table->timestamps();

            $table->foreign('requisito_id')->references('id')->on('requisitos')->onDelete('cascade');
            $table->foreign('procedimiento_id')->references('id')->on('procedimientos')->onDelete('cascade');
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
