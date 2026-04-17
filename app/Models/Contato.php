<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    protected $table = 'contatos';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    protected $fillable = ['*'];

    protected $guarded = ['id'];
}