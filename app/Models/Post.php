<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    protected $table = 'posts';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function postsIdiomas()
    {
        return $this->hasMany(PostIdioma::class);
    }
}