<?php

namespace App\Services;

use App\Models\Idioma;
use App\Models\Parceria;
use App\Models\ParceriaIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class ParceriasService extends Service
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
    public function cadastrarParceria($idioma, $request)
    {
        $parceria = new Parceria();
        $parcerias_idioma = new ParceriaIdioma();

        $logo = $request->file('logo');
        $imagem = $request->file('imagem');

        if ($logo) {
            $parceria->logo = $this->service->gerarNome($logo);
        }

        $parceria->imagem = $this->service->gerarNome($imagem);

        $response = $parceria->save();

        $parcerias_idioma->titulo = $request->titulo;
        $parcerias_idioma->subtitulo = $request->subtitulo;
        $parcerias_idioma->texto = $request->texto;
        $parcerias_idioma->cor = $request->cor;

        $parcerias_idioma->parceria_id = $parceria->id;
        $parcerias_idioma->idioma_id = $idioma->id;

        $response = $parcerias_idioma->save();

        if ($response) {
            $this->service->salvar($logo, 'content/partnerships/', $parceria->logo);
            $this->service->salvar($imagem, 'content/display/', $parceria->imagem);
        }

        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarParceria($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $parceria = Parceria::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'parceriasIdiomas' => function ($q) use ($idioma) {
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

        if (!$parceria) {
            return null;
        }

        $idioma = inertia()->getShared('idioma');

        $parceriaData = [
            'id' => $parceria->id,
            'titulo' => count($parceria->parceriasIdiomas) ? $parceria->parceriasIdiomas[0]->titulo : null,
            'subtitulo' => count($parceria->parceriasIdiomas) ? $parceria->parceriasIdiomas[0]->subtitulo : null,
            'texto' => count($parceria->parceriasIdiomas) ? $parceria->parceriasIdiomas[0]->texto : null,
            'cor' => count($parceria->parceriasIdiomas) ? $parceria->parceriasIdiomas[0]->cor : null,
        ];

        if ($parceria->logo) {
            $parceriaData['logo'] = rafator('content/partnerships/' . $parceria->logo);
        }

        if ($parceria->imagem) {
            $parceriaData['imagem'] = rafator('content/display/' . $parceria->imagem);
        }

        return [$parceriaData, $idioma, $idiomas];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarParceria($request, $id)
    {

        $parceria = Parceria::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $parcerias_idioma = ParceriaIdioma::query()
            ->where([
                'excluido' => null,
                'parceria_id' => $parceria->id
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

        if (!$parceria) {
            return false;
        }

        $idioma = $this->getLanguages($parceria, 'parceriasIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$parcerias_idioma) {
            $parcerias_idioma = new ParceriaIdioma;

            $parcerias_idioma->parceria_id = $parceria->id;
            $parcerias_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $parceriaOriginal = $copier->copy($parceria);
        }

        $logo = $request->file('logo');
        $imagem = $request->file('imagem');

        if ($parceria->imagem) {
            if ($imagem && $imagem->isValid()) {
                $parceria->imagem =  $this->service->gerarNome($imagem);
            }
        }

        if ($parceria->logo) {
            if ($logo && $logo->isValid()) {
                $parceria->logo =  $this->service->gerarNome($logo);
            }
        }

        $parcerias_idioma->titulo = $request->titulo;
        $parcerias_idioma->subtitulo = $request->subtitulo;
        $parcerias_idioma->texto = $request->texto;
        $parcerias_idioma->cor = $request->cor;

        $response = $parceria->save();
        $response = $parcerias_idioma->save();

        if ($response) {
            if ($parceria->logo) {
                if ($logo && $logo->isValid()) {
                    if ($parceria->logo && isset($parceriaOriginal) && File::exists(public_path('content/partnerships/' . $parceriaOriginal->logo))) {
                        File::delete(public_path('content/partnerships/' . $parceriaOriginal->logo));
                    }
                    $this->service->salvar($logo, 'content/partnerships/', $parceria->logo);
                }
            }
            if ($parceria->imagem) {
                if ($imagem && $imagem->isValid()) {
                    if ($parceria->imagem && isset($parceriaOriginal) && File::exists(public_path('content/display/' . $parceriaOriginal->imagem))) {
                        File::delete(public_path('content/display/' . $parceriaOriginal->imagem));
                    }
                    $this->service->salvar($imagem, 'content/display/', $parceria->imagem);
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
        $response = Parceria::query()
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
                $registro = Parceria::query()
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
