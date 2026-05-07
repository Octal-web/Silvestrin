<?php

namespace App\Services;

use App\Models\Idioma;
use App\Models\Valor;
use App\Models\ValorIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class ValoresService extends Service
{
    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param object $idioma
     * @param object $request
     */
    public function cadastrarValor($idioma, $request)
    {
        $valor = new Valor();
        $valores_idioma = new ValorIdioma();

        $arquivo = $request->file('icone');

        if ($arquivo) {
            $valor->icone = $this->service->gerarNome($arquivo);
        }

        $response = $valor->save();

        $valores_idioma->nome = $request->nome;
        $valores_idioma->texto = $request->texto;

        $valores_idioma->valor_id = $valor->id;
        $valores_idioma->idioma_id = $idioma->id;

        $response = $valores_idioma->save();

        if ($response) $this->service->salvar($arquivo, 'content/values/thumbs/', $valor->icone);

        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarValor($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $valor = Valor::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'valoresIdiomas' => function ($q) use ($idioma) {
                    $q->when($idioma, function ($r) use ($idioma) {
                        $r->whereHas('idiomas', function ($query) use ($idioma) {
                            $query->where('codigo', $idioma);
                        });
                    })
                        ->when(!$idioma, function ($r) {
                            $r->whereHas('idiomas', function ($query) {
                                $query->where('padrao', true);
                            });
                        });
                },
            ])
            ->first();

        if (!$valor) {
            return null;
        }

        $idioma = inertia()->getShared('idioma');

        $valorData = [
            'id' => $valor->id,
            'nome' => count($valor->valoresIdiomas) ? $valor->valoresIdiomas[0]->nome : null,
            'texto' => count($valor->valoresIdiomas) ? $valor->valoresIdiomas[0]->texto : null,
        ];

        if ($valor->icone) {
            $valorData['icone'] = rafator('content/values/thumbs/' . $valor->icone);
        }

        return [$valorData, $idioma, $idiomas];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarValor($request, $id)
    {

        $valor = Valor::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $valores_idioma = ValorIdioma::query()
            ->where([
                'excluido' => null,
                'valor_id' => $valor->id
            ])
            ->when($idioma, function ($q) use ($idioma) {
                $q->whereHas('idiomas', function ($query) use ($idioma) {
                    $query->where('codigo', $idioma);
                });
            })
            ->when(!$idioma, function ($q) {
                $q->whereHas('idiomas', function ($query) {
                    $query->where('padrao', true);
                });
            })
            ->first();

        if (!$valor) {
            return false;
        }

        $idioma = $this->getLanguages($valor, 'valoresIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$valores_idioma) {
            $valores_idioma = new ValorIdioma;

            $valores_idioma->valor_id = $valor->id;
            $valores_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $valorOriginal = $copier->copy($valor);
        }

        $arquivo = $request->file('icone');

        if ($valor->icone) {
            if ($arquivo && $arquivo->isValid()) {
                $valor->icone =  $this->service->gerarNome($arquivo);
            }
        }

        $valores_idioma->nome = $request->nome;
        $valores_idioma->texto = $request->texto;

        $response = $valor->save();
        $response = $valores_idioma->save();

        if ($response) {
            if ($valor->icone) {
                if ($arquivo && $arquivo->isValid()) {
                    if ($valor->icone && isset($valorOriginal) && File::exists(public_path('content/values/thumbs/' . $valorOriginal->icone))) {
                        File::delete(public_path('content/values/thumbs/' . $valorOriginal->icone));
                    }
                    $this->service->salvar($arquivo, 'content/values/thumbs/', $valor->icone);
                }
            }
        }

        return $response;
    }

    /**
     * Set the specified resource to visible/invisible.
     *
     * @param  int  $id
     * @return boolean
     */
    public function editarVisibilidade($id)
    {
        $response = Valor::query()
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

        return $response ? true : false;
    }

    /**
     * Update the order of the specified resource.
     *
     * @param  object  $request
     * @return boolean
     */
    public function editarOrdem($request)
    {
        $erros = [];

        if ($request->odr && is_array($request->odr)) {
            foreach ($request->odr as $key => $value) {
                $registro = Valor::query()
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

        return !count($erros) ? true : false;
    }
}
