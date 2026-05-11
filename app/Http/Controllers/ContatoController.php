<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContatoRequest;
use Inertia\Inertia;

use App\Services\ContatoService;

class ContatoController extends Controller
{
    protected $service;

    public function __construct(ContatoService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Contato');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function enviar(ContatoRequest $request)
    {
        if ($request->post()) {
            $response = $this->service->enviarEmail($request);

            if ($response) return back()->with('message', [
                'type' => 'success',
                'msg' => 'Contato enviado com sucesso!',
            ]);
        }

        return Inertia::location(route('Contato.index'));
    }
};
