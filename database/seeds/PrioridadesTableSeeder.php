<?php

use Illuminate\Database\Seeder;

class PrioridadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('prioridad')->insert([
        	[
	            'id' => 1,
	            'descripcion' => 'Urgente',
	            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
	        ], [
	            'id' => 2,
	            'descripcion' => 'Normal',
	            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
	        ], [
	            'id' => 3,
	            'descripcion' => 'No indica',
	            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
	        ],
        ]);
    }
}
