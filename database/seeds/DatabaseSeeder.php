<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(RoleUserTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(PermissionRoleTableSeeder::class);
        $this->call(EstadosTableSeeder::class);
        $this->call(EntidadesTableSeeder::class);
        $this->call(TipodocSeeder::class);
        $this->call(TiporemitenteSeeder::class);
        $this->call(OficinasTableSeeder::class);
        $this->call(CargosTableSeeder::class);
        $this->call(RemitentesTableSeeder::class);

        Model::reguard();
    }
}
