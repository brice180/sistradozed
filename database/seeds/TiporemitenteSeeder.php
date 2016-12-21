<?php

use Illuminate\Database\Seeder;

class TiporemitenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tipo_remitente')->insert([
            [
                'id' => 1,
                'descripcion' => 'Natural',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 2,
                'descripcion' => 'Jurídico',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
        ]);
    }
}
