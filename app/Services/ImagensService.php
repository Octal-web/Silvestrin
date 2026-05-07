<?php

namespace App\Services;

use App\Models\Conteudo;
use App\Models\Imagem;
use Carbon\Carbon;

class ImagensService extends Service
{
    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function imagem($id)
    {
        $conteudo = Conteudo::query()
            ->where([
                'excluido' => NULL,
                'id' => $id
            ])
            ->with([
                'imagens' => function ($q) {
                    $q->where([
                        'excluido' => NULL
                    ])
                        ->orderBy('ordem', 'ASC')
                        ->orderBy('id', 'DESC');
                }

            ])
            ->whereHas('parametro', function ($q) {
                $q->where([
                    'galeria' => true,
                ]);
            })
            ->first();

        if (!$conteudo) {
            return false;
        }

        $conteudoData = [
            'id' => $conteudo->id,
            'descricao' => $conteudo->parametro->descricao,
            'controladora' => $conteudo->controladora,
            'imagens' => $conteudo->imagens->map(function ($img) {
                return [
                    'id' => $img->id,
                    'visivel' => $img->visivel ? true : false,
                    'imagem' => asset('content/carousel/' . $img->imagem),
                ];
            })->values()->all(),
        ];

        return $conteudoData;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param object $request
     * @param int $id
     */
    public function novoImagem($request, $id)
    {
        $conteudo = Conteudo::query()
            ->where([
                'excluido' => NULL,
                'id' => $id
            ])
            ->whereHas('parametro', function ($q) {
                $q->where(['galeria' => true]);
            })
            ->first();

        if (!$conteudo) {
            return false;
        }

        foreach ($request->file('images') as $image) {
            $imagem = new Imagem;

            $imagem->imagem = $this->service->gerarNome($image['img']);

            $imagem->controladora = $conteudo->controladora;
            $imagem->acao = $conteudo->acao;
            $imagem->conteudo_id = $conteudo->id;

            $response = $imagem->save();

            if ($response) {
                $this->service->salvar($image['img'], 'content/carousel/', $imagem->imagem);
            } else {
                return false;
            }
        }

        return true;
    }

    /**
     * Set the specified resource as deleted.
     *
     * @param  int  $id
     */
    public function excluir($id)
    {
        $exclusao = Imagem::query()
            ->where([
                'excluido' => NULL,
                'id' => $id
            ])
            ->update([
                'excluido' => Carbon::now()
            ]);

        if ($exclusao == true) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Set the specified resource to visible/invisible.
     *
     * @param  int  $id
     */
    public function visibilidade($id)
    {

        $response = Imagem::query()
            ->where([
                'id' => $id,
                'excluido' => NULL
            ])
            ->first();

        if (!$response) {
            return false;
        }

        $response->visivel = 1 - $response->visivel;
        $response->save();

        if ($response) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Update the order of the specified resource.
     *
     * @param object  $request
     */
    public function ordenar($request)
    {
        $erros = [];

        if ($request->odr && is_array($request->odr)) {
            foreach ($request->odr as $key => $value) {
                $registro = Imagem::query()
                    ->where([
                        'excluido' => NULL,
                        'id' => $value
                    ])
                    ->update([
                        'ordem' => $key,
                    ]);

                $errors[] = $registro;
            }
        }

        if (!count($erros)) {
            return true;
        } else {
            return false;
        }
    }
}
