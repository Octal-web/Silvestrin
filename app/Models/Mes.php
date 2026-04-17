<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mes extends Model {
    protected $table = 'marcas';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function marcasIdiomas()
    {
        return $this->hasMany(MarcaIdioma::class);
    }
}