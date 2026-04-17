<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Slide;
use App\Models\Valor;
use App\Models\Marca;

use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $idioma = inertia()->getShared('idioma');
        
        $tradicaoVideo = rafator('content/files/' . inertia()->getShared('conteudos')[1]['arquivo']);

        $slides = Slide::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'slidesIdiomas' => function ($q) use ($idioma) {
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
            ->map(function($slide) {
                return [
                    'id' => $slide->id,
                    'tipo' => $slide->tipo,
                    'imagem' => $slide->tipo == 'imagem' ? rafator('content/slides/d/' . $slide->imagem) : null,
                    'imagem_mobile' => $slide->tipo == 'imagem' ? rafator('content/slides/m/' . $slide->imagem_mobile) : null,
                    'video' => $slide->tipo == 'video' ? rafator('content/slides/videos/d/' . $slide->video) : null,
                    'video_mobile' => $slide->tipo == 'video' ? rafator('content/slides/videos/m/' . $slide->video_mobile) : null,
                    'titulo' => $slide->slidesIdiomas->isNotEmpty() ? $slide->slidesIdiomas[0]->titulo : null,
                    'descricao' => $slide->slidesIdiomas->isNotEmpty() ? $slide->slidesIdiomas[0]->descricao : null,
                ];
            });
            
        $valores = Valor::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'valoresIdiomas' => function ($q) use ($idioma) {
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
            ->map(function($valor) {
                return [
                    'id' => $valor->id,
                    'icone' => rafator('content/values/thumbs/' . $valor->icone),
                    'nome' => $valor->valoresIdiomas->isNotEmpty() ? $valor->valoresIdiomas[0]->nome : null,
                    'texto' => $valor->valoresIdiomas->isNotEmpty() ? $valor->valoresIdiomas[0]->texto : null,
                ];
            });
            
        $marcas = Marca::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'marcasIdiomas' => function ($q) use ($idioma) {
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
            ->map(function($marca) {
                return [
                    'id' => $marca->id,
                    'logo' => rafator('content/brands/thumbs/' . $marca->logo),
                    'nome' => $marca->marcasIdiomas->isNotEmpty() ? $marca->marcasIdiomas[0]->nome : null,
                    'slug' => $marca->slug,
                ];
            });

        return Inertia::render('Home', [
            'slides' => $slides,
            'valores' => $valores,
            'marcas' => $marcas,
            'tradicaoVideo' => $tradicaoVideo,
        ]);
    }
};