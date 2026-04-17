<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\PostContactRequest;

use App\Models\Contato;

use Illuminate\Support\Facades\Mail;

class ContatoController extends Controller
{
    public function index() {
        return Inertia::render('Contato');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function enviar(PostContactRequest $request) {
        if($request->post()){
            $contato = new Contato;

            $token = md5(uniqid(rand(), true));

            $contato->nome = $request->nome;
            $contato->email = $request->email;
            $contato->telefone = $request->telefone;
            $contato->assunto = $request->assunto;
            $contato->mensagem = $request->mensagem;

            $response = $contato->save();

            if ($response) {
                $data = [
                    'nome' => $request->nome,
                    'email' => $request->email,
                    'telefone' => $request->telefone,
                    'assunto' => $request->assunto,
                    'mensagem' => $request->mensagem,
                ];

                // Mail::send('emails.contact', $data, function($message)use($data) {
                //     $message->from('site@8poroito.com.br')
                //             // ->to('trabalheconosco@8poroito.com.br')
                //             ->to('rafael@8poroito.com.br')
                //             ->subject('Obrigado por entrar em contato!');
                // });
                
                return back()->with('message', [
                    'type' => 'success',
                    'msg' => 'Contato enviado com sucesso!',
                ]);
            }
        }

        return Inertia::location(route('Contato.index'));
    }
};