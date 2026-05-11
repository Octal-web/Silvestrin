<?php

namespace App\Services\Manager;

use App\Models\DadosGerais;
use App\Models\Slide;
use App\Models\Valor;

class HomeService extends Service
{

    /**
     * Get data to show the form
     */
    public function carregarDadosHome()
    {
        $dadosGerais = DadosGerais::first();

        $slides = Slide::query()
            ->where([
                'excluido' => NULL
            ])
            ->with([
                'slidesIdiomas' => function ($q) {
                    $q->whereHas('idiomas', function ($r) {
                        $r->Where('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($slide) {
                return [
                    'id' => $slide->id,
                    'visivel' => $slide->visivel,
                    'titulo' => (($slide->slidesIdiomas->isNotEmpty() ? ($slide->slidesIdiomas[0]->titulo ? $slide->slidesIdiomas[0]->titulo . ' - ' : null) : null) . ($slide->tipo == 'imagem' ? 'Imagem' : 'Vídeo')),
                ];
            });

        $valores = Valor::query()
            ->where([
                'excluido' => NULL
            ])
            ->with([
                'valoresIdiomas' => function ($q) {
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
                    'nome' => $item->valoresIdiomas->isNotEmpty() ? $item->valoresIdiomas[0]->nome : null,
                    'imagem' => rafator('content/values/thumbs/' . $item->icone)
                ];
            });

        return [$valores, $slides, $dadosGerais];
    }

    /**
     * Update the specified resource in storage.
     * @param object $request
     */
    public function editarInfo($request)
    {
        $dados_gerais = DadosGerais::first();

        $dados_gerais->endereco = $request->endereco;
        $dados_gerais->cep = $request->cep;
        $dados_gerais->telefone = $request->telefone;
        $dados_gerais->filiais = $request->filiais;
        $dados_gerais->emails = $request->emails;
        $dados_gerais->instagram = $request->instagram ? $request->instagram : null;
        $dados_gerais->facebook = $request->facebook ? $request->facebook : null;
        $dados_gerais->linkedin = $request->linkedin ? $request->linkedin : null;

        $response = $dados_gerais->save();

        return $response;
    }
}
