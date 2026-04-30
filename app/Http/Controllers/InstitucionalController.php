<?php

namespace App\Http\Controllers;

use App\Models\Parceria;
use Inertia\Inertia;

class InstitucionalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tradicaoVideo = rafator('content/files/' . inertia()->getShared('conteudos')[0]['arquivo']);

        return Inertia::render('SobreNos', [
            'tradicaoVideo' => $tradicaoVideo
        ]);
    }

    public function sustentabilidade()
    {
        $idioma = inertia()->getShared('idioma');

        $todasParcerias = Parceria::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'parceriasIdiomas' => function ($q) use ($idioma) {
                    $q->whereHas('idiomas', function ($r) use ($idioma) {
                        $r->where('codigo', $idioma)
                            ->orWhere('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($parceria) {
                return [
                    'id' => $parceria->id,
                    'logo' => $parceria->logo ? rafator('content/partnerships/' . $parceria->logo) : null,
                    'imagem' => rafator('content/display/' . $parceria->imagem),
                    'titulo' => $parceria->parceriasIdiomas->isNotEmpty() ? $parceria->parceriasIdiomas[0]->titulo : null,
                    'subtitulo' => $parceria->parceriasIdiomas->isNotEmpty() ? $parceria->parceriasIdiomas[0]->subtitulo : null,
                    'texto' => $parceria->parceriasIdiomas->isNotEmpty() ? $parceria->parceriasIdiomas[0]->texto : null,
                    'cor' => $parceria->parceriasIdiomas->isNotEmpty() ? $parceria->parceriasIdiomas[0]->cor : null,
                ];
            });

        return Inertia::render('Sustentabilidade', [
            'todasParcerias' => $todasParcerias,
        ]);
    }
};
