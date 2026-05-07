<?php

namespace App\Services\Manager;

use App\Models\Idioma;
use App\Models\Categoria;
use App\Models\CategoriaIdioma;

use Illuminate\Support\Str;

class CategoriasService extends Service
{
    /**
     * Store a newly created resource in storage.
     * 
     * @param object $idioma
     * @param object $request
     */
    public function cadastrarCategoria($idioma, $request)
    {
        $categoria = new Categoria();
        $categorias_idioma = new CategoriaIdioma();

        $categoria->slug = Str::slug($request->nome);

        $responseCategoria = $categoria->save();

        $categorias_idioma->nome = $request->nome;
        $categorias_idioma->categoria_id = $categoria->id;
        $categorias_idioma->idioma_id = $idioma->id;

        $responseCategoriaIdioma = $categorias_idioma->save();

        return $responseCategoria && $responseCategoriaIdioma;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarCategoria($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $categoria = Categoria::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'categoriasIdiomas' => function ($q) use ($idioma) {
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

        if (!$categoria) {
            return null;
        }

        $idioma = inertia()->getShared('idioma');

        $categoriaData = [
            'id' => $categoria->id,
            'nome' => count($categoria->categoriasIdiomas) ? $categoria->categoriasIdiomas[0]->nome : null,
        ];

        return [$categoriaData, $idioma, $idiomas];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarCategoria($request, $id)
    {

        $categoria = Categoria::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $categorias_idioma = CategoriaIdioma::query()
            ->where([
                'excluido' => null,
                'categoria_id' => $categoria->id
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

        if (!$categoria) {
            return false;
        }

        $idioma = $this->getLanguages($categoria, 'categoriasIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$categorias_idioma) {
            $categorias_idioma = new CategoriaIdioma;

            $categorias_idioma->categoria_id = $categoria->id;
            $categorias_idioma->idioma_id = $idioma;
        }

        $categoria->slug = Str::slug($request->nome);
        $responseCategoria = $categoria->save();

        $categorias_idioma->nome = $request->nome;
        $responseCategoriaIdioma = $categorias_idioma->save();

        return $responseCategoria && $responseCategoriaIdioma;
    }

    /**
     * Set the specified resource to visible/invisible.
     *
     * @param  int  $id
     * @return boolean
     */
    public function editarVisibilidade($id)
    {
        $response = Categoria::query()
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
                $registro = Categoria::query()
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
