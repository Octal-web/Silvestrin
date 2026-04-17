<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model {
    protected $table = 'produtos';
    
    protected $guarded = ['id'];
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function produtosIdiomas()
    {
        return $this->hasMany(ProdutoIdioma::class);
    }

    public function marca()
    {
        return $this->belongsTo(Marca::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function meses()
    {
        return $this->belongsToMany(Mes::class, 'meses_produtos', 'produto_id', 'mes_id');
    }
}