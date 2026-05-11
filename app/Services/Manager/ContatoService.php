<?php

namespace App\Services\Manager;

use App\Models\Contato;
use Illuminate\Support\Carbon;

class ContatoService extends Service
{

    /**
     * Get data to show in the screen
     */
    public function carregarDadosContato()
    {
        $contatos = Contato::query()
            ->where([
                'excluido' => NULL
            ])
            ->orderBy('criado', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($contato) {
                return [
                    'id' => $contato->id,
                    'nome' => $contato->nome,
                    'data' => $contato->criado->format('d/m/Y'),
                ];
            });

        return $contatos;
    }

    /**
     * Show the specified resource.
     * @param  int  $id
     */
    public function visualizarContato($id)
    {
        $contato = Contato::query()
            ->where([
                'id' => $id,
                'excluido' => NULL,
            ])
            ->first();

        if (!$contato) {
            return null;
        }

        $contato = [
            'id' => $contato->id,
            'nome' => $contato->nome,
            'email' => $contato->email,
            'telefone' => $contato->telefone,
            'area' => $contato->area,
            'assunto' => $contato->assunto,
            'mensagem' => $contato->mensagem,
            'data' => $contato->criado->format('d/m/Y H:i')
        ];

        return $contato;
    }

    /**
     * Set the specified resource as deleted.
     *
     * @param  int  $id
     */
    public function excluirContato($id)
    {
        $exclusao = Contato::query()
            ->where([
                'excluido' => NULL,
                'id' => $id
            ])
            ->update([
                'excluido' => Carbon::now()
            ]);

        if (!$exclusao) return false;
        return true;
    }
}
