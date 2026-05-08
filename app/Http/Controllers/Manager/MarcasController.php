<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Manager\MarcaRequest;
use App\Models\Marca;
use App\Services\Manager\MarcasService;
use Carbon\Carbon;


class MarcasController extends Controller
{

    protected $service;

    public function __construct(MarcasService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function adicionar()
    {
        return Inertia::render('Manager/Marcas/adicionar');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function novo(MarcaRequest $request)
    {
        if ($request->ajax()) {
            $arquivo = $request->file('logo');

            if (!$arquivo) {
                return Inertia::location(route('Manager.Categorias.index'));
            }

            $idioma = inertia()->getShared('idioma');

            $response = $this->service->cadastrarMarca($idioma, $request);

            if ($response) {
                return to_route('Manager.Categorias.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!']);
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editar($id)
    {
        if (!$id) {
            return Inertia::location(route('Manager.Categorias.index'));
        }

        [$marcaData, $idioma, $idiomas] = $this->service->editarMarca($id);

        return Inertia::render('Manager/Marcas/editar', [
            'idiomas' => $idiomas,
            'idioma' => $idioma,
            'marca' => $marcaData
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function atualizar(MarcaRequest $request, $id)
    {
        if ($request->ajax()) {
            $response = $this->service->atualizarMarca($request, $id);

            return $response
                ? to_route('Manager.Categorias.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!'])
                : to_route('Manager.Categorias.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
        }
        return to_route('Manager.Categorias.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações. Tente novamente mais tarde.']);
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

            $exclusao = Marca::query()
                ->where([
                    'excluido' => NULL,
                    'id' => $id
                ])
                ->update([
                    'excluido' => Carbon::now()
                ]);

            if ($exclusao == true) {
                return redirect()->back()->with('message', ['type' => 'alert', 'msg' => 'Registro excluído com sucesso.']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Não foi possível excluir o registro.']);
            }
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
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Registro não encontrado!']);
            }

            $response = $this->service->editarVisibilidade($id);

            if ($response) {
                return redirect()->back()->with('message', ['type' => 'success', 'msg' => 'Visibilidade alterada com sucesso!']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Visibilidade não alterada!']);
            }
        }

        return $request->header('referer');
    }

    /**
     * Update the order of the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ordenar(Request $request)
    {
        if ($request->ajax()) {
            $response = $this->service->editarOrdem($request);

            if ($response) {
                return redirect()->back()->with('message', ['type' => 'success', 'msg' => 'Registros reordenados com sucesso!']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Registros não reordenados, tente novamente mais tarde!']);
            }
        }

        return redirect()->back();
    }
}
