<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\DadosGeraisRequest;
use Inertia\Inertia;
use App\Services\Manager\HomeService;

class HomeController extends Controller
{
    protected $service;

    public function __construct(HomeService $service)
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
        [$valores, $slides, $dadosGerais] = $this->service->carregarDadosHome();

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
     * @return \Illuminate\Http\Response
     */
    public function atualizarInfo(DadosGeraisRequest $request)
    {
        if ($request->ajax()) {
            $response = $this->service->editarInfo($request);

            if ($response) {
                return to_route('Manager.Home.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!']);
            }
        }
    }
};
