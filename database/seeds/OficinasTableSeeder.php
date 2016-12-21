<?php

use Illuminate\Database\Seeder;

class OficinasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('oficinas')->insert([
            'id' => 1,
            'nombre' => 'Informatica',
            'siglas' => 'TIyT',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
