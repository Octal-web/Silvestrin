<?php

namespace App\Services;

use App\Models\Idioma;
use Illuminate\Support\Str;

class Service
{
    /**
     * Set the language based in the id
     * 
     * @param object $record
     * @param object $translationModel
     * @param string $language
     */
    protected function getLanguages($record, $translationModel, $language)
    {
        $idiomas = Idioma::query()
            ->orderByDesc('padrao')
            ->orderBy('codigo')
            ->pluck('id', 'codigo')
            ->toArray();

        $translationProperty = Str::snake($translationModel);

        if (!$language) {
            return reset($idiomas);
        } elseif (!$record->$translationProperty) {
            if (!array_key_exists($language, $idiomas)) {
                return false;
            }

            return $idiomas[$language];
        }

        return $record->$translationProperty[0]->idioma;
    }
}
