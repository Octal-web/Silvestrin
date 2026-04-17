<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificacao extends Model {
    protected $table = 'certificacoes';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function certificacoesIdiomas()
    {
        return $this->hasMany(CertificacaoIdioma::class);
    }
}