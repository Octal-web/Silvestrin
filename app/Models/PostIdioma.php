<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostIdioma extends Model {
    protected $table = 'posts_idiomas';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function produto()
    {
        return $this->belongsTo(Produto::class);
    }

    public function idiomas()
    {
        return $this->belongsTo(Idioma::class, 'idioma_id');
    }
}