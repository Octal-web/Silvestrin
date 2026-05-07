<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\PaginaRequest;
use App\Services\PaginasService;
use Illuminate\Http\Request;

class PaginasController extends Controller
{
    protected $service;

    public function __construct(PaginasService $service)
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
    public function editarAction(PaginaRequest $request, $id)
    {
        if ($request->ajax()) {
            $response = $this->service->editarPagina($request, $id);

            return $response
                ? to_route('Manager.Home.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!'])
                : to_route('Manager.Home.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
        }

        return to_route('Manager.Home.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
    }
}
