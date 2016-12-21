<?php

use Illuminate\Database\Seeder;

class EntidadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('entidades')->insert([
            'id' => 1,
            'razonSocial' => 'Aduanas',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
      
    }
}
