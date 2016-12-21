<?php

use Illuminate\Database\Seeder;

class CargosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('cargos')->insert([
            'id' => 1,
            'descripcion' => 'Secretaria',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
