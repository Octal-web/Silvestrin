<?php

namespace App\Services;

use App\Models\Contato;


class ContatoService
{

    /**
     * Send a new email
     * @param object $request
     */
    public function enviarEmail($request)
    {
        $contato = new Contato;

        $token = md5(uniqid(rand(), true));

        $contato->nome = $request->nome;
        $contato->email = $request->email;
        $contato->telefone = $request->telefone;
        $contato->mensagem = $request->mensagem;
        $contato->area = $request->area;
        $contato->assunto = $request->assunto;

        $response = $contato->save();

        if ($response) {
            $data = [
                'nome' => $request->nome,
                'email' => $request->email,
                'telefone' => $request->telefone,
                'assunto' => $request->assunto,
                'mensagem' => $request->mensagem,
            ];

            $destinatarios = [
                'trabalhe' => '',
                'comercial' => '',
            ];

            $to = $destinatarios[$request->area] ?? '';

            // Mail::send('emails.contact', $data, function($message)use($data) {
            //     $message->from('site@8poroito.com.br')
            //             // ->to('trabalheconosco@8poroito.com.br')
            //             ->to($to)
            //             ->subject('Obrigado por entrar em contato!');
            // });

            return true;
        }
    }
}
