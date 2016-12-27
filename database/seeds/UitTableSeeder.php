<?php

use Illuminate\Database\Seeder;

class UitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('uits')->insert([
        	[
        	'id' => 1,
            'monto' => 3850,
            'anio' => 2015,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        	], [
        	'id' => 2,
            'monto' => 3950,
            'anio' => 2016,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]
            
        ]);
    }
 }

