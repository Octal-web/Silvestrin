<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Services\ImagensService;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ImagensController extends Controller
{
    protected $service;

    public function __construct(ImagensService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function conteudo($id)
    {
        if (!$id) {
            return Inertia::location(route('Manager.Transportadora.index'));
        }

        $conteudo = $this->service->imagem($id);

        if (!$conteudo) {
            return Inertia::location(route('Manager.Transportadora.index'));
        }

        return Inertia::render('Manager/Imagens/conteudo', [
            'conteudo' => $conteudo,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function novo(Request $request, $id)
    {
        if ($request->ajax()) {

            $response = $this->service->novoImagem($request, $id);

            if ($response === false) {
                return redirect()->back()->with('message', [
                    'type' => 'error',
                    'msg' => 'Erro ao salvar imagem'
                ]);
            }

            return redirect()->back()->with('message', [
                'type' => 'success',
                'msg' => 'Imagens adicionadas com sucesso!'
            ]);
        }

        return redirect()->back();
    }

    /**
     * Set the specified resource as deleted.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function excluir(Request $request, $id)
    {
        if ($request->ajax()) {

            if (!$id) {
                return $request->header('referer');
            }

            $response = $this->service->excluir($id);

            if ($response) {
                return redirect()->back()->with('message', [
                    'type' => 'alert',
                    'msg' => 'Registro excluído com sucesso.'
                ]);
            }

            return redirect()->back()->with('message', [
                'type' => 'error',
                'msg' => 'Não foi possível excluir o registro.'
            ]);
        }
    }

    /**
     * Set the specified resource to visible/invisible.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function visibilidade(Request $request, $id)
    {
        if ($request->ajax()) {

            if (!$id) {
                return redirect()->back()->with([
                    'type' => 'error',
                    'message' => 'Registro não encontrado!'
                ]);
            }

            $response = $this->service->visibilidade($id);

            if ($response) {
                return redirect()->back()->with('message', [
                    'type' => 'success',
                    'msg' => 'Visibilidade alterada com sucesso!'
                ]);
            }

            return redirect()->back()->with('message', [
                'type' => 'error',
                'msg' => 'Visibilidade não alterada!'
            ]);
        }

        return $request->header('referer');
    }

    /**
     * Update the order of the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ordenar(Request $request)
    {
        if ($request->ajax()) {

            $response = $this->service->ordenar($request);

            if ($response) {
                return redirect()->back()->with('message', [
                    'type' => 'success',
                    'msg' => 'Registros reordenados com sucesso!'
                ]);
            }

            return redirect()->back()->with('message', [
                'type' => 'error',
                'msg' => 'Registros não reordenados, tente novamente mais tarde!'
            ]);
        }

        return redirect()->back();
    }
}
