<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Artuser extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'usuaId' => $this->usuaId, 
            'usuaPassword' => $this->usuaPassword, 
            'usuaNombre' => $this->usuaNombre,
            'usuaApellido' => $this->usuaApellido, 
            'usuaCorreo' => $this->usuaCorreo, 
            'usuaTelefono1' => $this->usuaTelefono1, 
            'usuaTelefono2' => $this->usuaTelefono2, 
            'usuaStatus' => $this->usuaStatus
        ];
    }
}
