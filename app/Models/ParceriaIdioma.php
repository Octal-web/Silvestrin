<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParceriaIdioma extends Model
{
    protected $table = 'parcerias_idiomas';

    protected $guarded = ['id'];

    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function parceria()
    {
        return $this->belongsTo(Parceria::class);
    }

    public function idiomas()
    {
        return $this->belongsTo(Idioma::class, 'idioma_id');
    }
}
