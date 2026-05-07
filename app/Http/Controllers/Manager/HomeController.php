<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\DadosGeraisRequest;
use Inertia\Inertia;
use App\Models\DadosGerais;
use App\Models\Slide;
use App\Models\Valor;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $idioma = inertia()->getShared('idioma');

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

        return Inertia::render('Manager/Home/index', [
            'dadosGerais' => $dadosGerais,
            'slides' => $slides,
            'valores' => $valores,
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function atualizarInfo(DadosGeraisRequest $request)
    {
        if ($request->ajax()) {
            $dados_gerais = DadosGerais::first();

            $dados_gerais->endereco = $request->endereco;
            $dados_gerais->cep = $request->cep;
            $dados_gerais->cidade = $request->cidade;
            $dados_gerais->telefone = $request->telefone;
            $dados_gerais->whatsapp = $request->whatsapp;
            $dados_gerais->email = $request->email;
            $dados_gerais->instagram = $request->instagram ? $request->instagram : null;
            $dados_gerais->facebook = $request->facebook ? $request->facebook : null;
            $dados_gerais->linkedin = $request->linkedin ? $request->linkedin : null;

            $response = $dados_gerais->save();

            if ($response) {
                return to_route('Manager.Home.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!']);
            }
        }
    }
};
