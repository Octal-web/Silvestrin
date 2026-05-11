<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Services\Manager\ContatoService;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Carbon\Carbon;

class ContatoController extends Controller
{
    protected $service;

    public function __construct(ContatoService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contatos = $this->service->carregarDadosContato();

        return Inertia::render('Manager/Contato/index', [
            'contatos' => $contatos,
        ]);
    }

    /**
     * Show the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function visualizar($id)
    {
        if (!$id) {
            return Inertia::location(route('Manager.Contato.index'));
        }

        $contato = $this->service->visualizarContato($id);

        if (!$contato) return Inertia::location(route('Manager.Contato.index'));

        return Inertia::render('Manager/Contato/visualizar', [
            'contato' => $contato
        ]);
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

            $exclusao = $this->service->excluirContato($id);

            if ($exclusao) {
                return redirect(route('Manager.Contato.index'))->with('message', ['type' => 'alert', 'msg' => 'Registro excluído com sucesso.']);
            } else {
                return redirect(route('Manager.Contato.index'))->with('message', ['type' => 'error', 'msg' => 'Não foi possível excluir o registro.']);
            }
        }
    }
}
