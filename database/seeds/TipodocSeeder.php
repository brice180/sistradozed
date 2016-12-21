<?php

use Illuminate\Database\Seeder;

class TipodocSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_doc')->insert([
            'id' => 1,
            'descripcion' => 'DNI',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
