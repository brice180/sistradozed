<?php

use Illuminate\Database\Seeder;

class RemitentesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('remitentes')->insert([
            'id' => 1,           
            'tipodoc_id'=>'1',
            'numdoc'=>'34323432',
            //'nombres'=>'Remitente1'
            //'apellidos'=>'Apellido1 Apellido2',
            'entidad_id'=>'1',
            'tiporemitente_id'=>'2',
            'razonSocial'=> 'Razon Social',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
