<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\ConteudoRequest;
use App\Models\Conteudo;
use App\Services\Manager\ConteudosService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

use DeepCopy\DeepCopy;
use Inertia\Inertia;

class ConteudosController extends Controller
{
    protected $service;

    public function __construct(ConteudosService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function editarAction(ConteudoRequest $request, $id)
    {
        if ($request->ajax()) {
            $response = $this->service->editarConteudo($request, $id);

            return $response
                ? redirect()->back()->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!'])
                : redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
        }
        return redirect()->route('Manager.Usuarios.login', [], 301);
    }

    /**
     * Download the specified file
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function baixarArquivo($id)
    {
        if (!$id) {
            return redirect()->route('Manager.Home.index', [], 301);
        }

        $conteudo = Conteudo::query()
            ->where([
                'id' => $id
            ])
            ->with('Parametro')
            ->first();

        if (!$conteudo || !$conteudo->parametro->habilitar_arq) {
            return redirect()->route('Manager.Home.index', [], 301);
        }

        return Response::download(File::path('content/files/' . $conteudo->conteudo_idioma->arquivo));
    }

    /**
     * Delete the specified file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function excluirArquivo(Request $request, $id)
    {
        if ($request->post()) {
            if (!$id) {
                return $request->header('referer');
            }

            $conteudo = Conteudo::query()
                ->where([
                    'id' => $id
                ])
                ->with('Parametro')
                ->first();

            $arquivo = $conteudo->conteudo_idioma->arquivo;
            $conteudo->conteudo_idioma->arquivo = null;

            if ($conteudo->save()) {
                File::delete('content/files/' . $arquivo);

                return redirect()->back()->with('message', ['type' => 'alerte', 'msg' => 'Arquivo excluído com sucesso.']);
            }
        }

        return redirect()->route('Manager.Home.index', [], 301);
    }
}
