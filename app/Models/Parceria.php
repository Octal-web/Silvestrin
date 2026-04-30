<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parceria extends Model
{
    protected $table = 'parcerias';

    protected $guarded = ['id'];

    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';

    public function parceriasIdiomas()
    {
        return $this->hasMany(ParceriaIdioma::class);
    }
}
