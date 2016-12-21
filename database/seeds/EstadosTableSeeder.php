<?php

use Illuminate\Database\Seeder;

class EstadosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('estados')->insert([
            'id' => 1,
            'descripcion' => 'Pendiente',
            'color' => 'Naranja',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
