<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtuserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artuser', function (Blueprint $table) {
            $table->increments('usuaId');            
            $table->string('usuaPassword'); /*Nombre de la cuenta del usuario*/
            $table->string('usuaNombre');
            $table->string('usuaApellido');
            $table->string('usuaCorreo');
            $table->string('usuaTelefono1');
            $table->string('usuaTelefono2');
            $table->string('usuaStatus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artuser');
    }
}
