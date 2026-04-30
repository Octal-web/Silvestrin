<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parametro extends Model {
    protected $table = 'conteudos_parametros';
    
    protected $guarded = ['id'];
    
    public $timestamps = false;

    public function conteudos()
    {
        return $this->belongsTo(Conteudo::class, 'conteudo_id');
    }
}