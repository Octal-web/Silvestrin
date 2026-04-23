<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Certificacao;
use App\Models\Imagem;
use App\Models\Marca;

use Carbon\Carbon;

class TransportadoraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $idioma = inertia()->getShared('idioma');

        $imagensGaleria = Imagem::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true,
                'controladora' => 'Transportadora',
                'acao' => 'index'
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->mapToGroups(function ($imagem) {
                return [
                    $imagem->conteudo_id => [
                        'id' => $imagem->id,
                        'imagem' => asset('content/carousel/' . $imagem->imagem),
                    ]
                ];
            });

        return Inertia::render('Transportadora', [
            'imagensGaleria' => $imagensGaleria
        ]);
    }
};
