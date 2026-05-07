<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Manager/Institucional/index');
    }

    public function sustentabilidade()
    {
        $idioma = inertia()->getShared('idioma');

        $parcerias = Parceria::query()
            ->where([
                'excluido' => NULL
            ])
            ->with([
                'parceriasIdiomas' => function ($q) {
                    $q->whereHas('idiomas', function ($r) {
                        $r->Where('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'visivel' => $item->visivel,
                    'titulo' => $item->parceriasIdiomas->isNotEmpty() ? $item->parceriasIdiomas[0]->titulo : null,
                    'imagem' => rafator('content/display/' . $item->imagem)
                ];
            });

        return Inertia::render('Manager/Institucional/sustentabilidade', [
            'parcerias' => $parcerias,
        ]);
    }
};
