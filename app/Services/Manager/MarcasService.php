<?php

namespace App\Services\Manager;

use App\Models\Idioma;
use App\Models\Marca;
use App\Models\MarcaIdioma;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use DeepCopy\DeepCopy;

class MarcasService extends Service
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
    public function cadastrarMarca($idioma, $request)
    {
        $marca = new Marca();
        $marcas_idioma = new MarcaIdioma();

        $arquivo = $request->file('logo');

        if ($arquivo) {
            $marca->logo = $this->service->gerarNome($arquivo);
        }

        $marca->slug = Str::slug($request->nome);
        $marca->parceiro = $request->parceiro;
        $response = $marca->save();

        $marcas_idioma->nome = $request->nome;
        $marcas_idioma->descricao = $request->descricao;

        $marcas_idioma->marca_id = $marca->id;
        $marcas_idioma->idioma_id = $idioma->id;

        $response = $marcas_idioma->save();

        if ($response) $this->service->salvar($arquivo, 'content/brands/thumbs/', $marca->logo);

        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarMarca($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $marca = Marca::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'marcasIdiomas' => function ($q) use ($idioma) {
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

        if (!$marca) {
            return null;
        }

        $idioma = inertia()->getShared('idioma');

        $marcaData = [
            'id' => $marca->id,
            'nome' => count($marca->marcasIdiomas) ? $marca->marcasIdiomas[0]->nome : null,
            'descricao' => count($marca->marcasIdiomas) ? $marca->marcasIdiomas[0]->descricao : null,
            'parceiro' => $marca->parceiro ?? null
        ];

        if ($marca->logo) {
            $marcaData['logo'] = rafator('content/brands/thumbs/' . $marca->logo);
        }

        return [$marcaData, $idioma, $idiomas];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarMarca($request, $id)
    {

        $marca = Marca::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $marcas_idioma = MarcaIdioma::query()
            ->where([
                'excluido' => null,
                'marca_id' => $marca->id
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

        if (!$marca) {
            return false;
        }

        $idioma = $this->getLanguages($marca, 'marcasIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$marcas_idioma) {
            $marcas_idioma = new MarcaIdioma;

            $marcas_idioma->marca_id = $marca->id;
            $marcas_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $marcaOriginal = $copier->copy($marca);
        }

        $arquivo = $request->file('logo');

        if ($marca->logo) {
            if ($arquivo && $arquivo->isValid()) {
                $marca->logo =  $this->service->gerarNome($arquivo);
            }
        }

        $marca->slug = Str::slug($request->nome);
        $marca->parceiro = $request->parceiro;
        $response = $marca->save();

        $marcas_idioma->nome = $request->nome;
        $marcas_idioma->descricao = $request->descricao;

        $response = $marcas_idioma->save();

        if ($response) {
            if ($marca->logo) {
                if ($arquivo && $arquivo->isValid()) {
                    if ($marca->logo && isset($marcaOriginal) && File::exists(public_path('content/brands/thumbs/' . $marcaOriginal->logo))) {
                        File::delete(public_path('content/brands/thumbs/' . $marcaOriginal->logo));
                    }
                    $this->service->salvar($arquivo, 'content/brands/thumbs/', $marca->logo);
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
        $response = Marca::query()
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
                $registro = Marca::query()
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
