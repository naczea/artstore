<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artuser extends Model
{
    protected $fillable = [
        'usuaId', 'usuaPassword', 'usuaNombre', 'usuaApellido', 'usuaCorreo', 'usuaTelefono1', 'usuaTelefono2', 'usuaStatus'
    ];
}
