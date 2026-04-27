<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Marca;
use App\Models\Categoria;
use App\Models\Produto;

class ProdutosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function marcas()
    {
        $idioma = inertia()->getShared('idioma');

        $todasMarcas = Marca::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'marcasIdiomas' => function ($q) use ($idioma) {
                    $q->whereHas('idiomas', function ($r) use ($idioma) {
                        $r->where('codigo', $idioma)
                            ->orWhere('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($marca) {
                return [
                    'id' => $marca->id,
                    'nome' => $marca->marcasIdiomas->isNotEmpty() ? $marca->marcasIdiomas[0]->nome : null,
                    'slug' => $marca->slug,
                    'parceiro' => $marca->parceiro
                ];
            });

        $marcaSelecionada = request('marca');

        $marca = null;

        if ($marcaSelecionada && !str_contains($marcaSelecionada, 'todas')) {
            $marca = Marca::query()
                ->where([
                    'excluido' => NULL,
                    'visivel' => true,
                    'slug' => $marcaSelecionada
                ])
                ->with([
                    'marcasIdiomas' => function ($q) use ($idioma) {
                        $q->whereHas('idiomas', function ($r) use ($idioma) {
                            $r->where('codigo', $idioma)
                                ->orWhere('padrao', true);
                        })
                            ->orderBy('idioma_id', 'DESC');
                    }
                ])
                ->orderBy('ordem', 'ASC')
                ->orderBy('id', 'DESC')
                ->first();

            if (!$marca) {
                return Inertia::location(route('Home.index'));
            }
        }

        $marcaData = $marca ? [
            'id' => $marca->id,
            'logo' => rafator('content/brands/thumbs/' . $marca->logo),
            'nome' => $marca->marcasIdiomas->isNotEmpty() ? $marca->marcasIdiomas[0]->nome : null,
            'descricao' => $marca->marcasIdiomas->isNotEmpty() ? $marca->marcasIdiomas[0]->descricao : null,
            'slug' => $marca->slug,
            'parceiro' => $marca->parceiro
        ] : null;

        $todasCategorias = Categoria::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'categoriasIdiomas' => function ($q) use ($idioma) {
                    $q->whereHas('idiomas', function ($r) use ($idioma) {
                        $r->where('codigo', $idioma)
                            ->orWhere('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($categoria) {
                return [
                    'id' => $categoria->id,
                    'nome' => $categoria->categoriasIdiomas->isNotEmpty() ? $categoria->categoriasIdiomas[0]->nome : null,
                    'slug' => $categoria->slug,
                ];
            });

        $categoriaSelecionada = request('categoria');
        $categoria = null;

        if ($categoriaSelecionada && !str_contains($categoriaSelecionada, 'a-granel')) {
            $categoria = Categoria::query()
                ->where([
                    'excluido' => NULL,
                    'visivel' => true,
                    'slug' => $categoriaSelecionada
                ])
                ->first();

            if (!$categoria) {
                return Inertia::location(route('Home.index'));
            }
        }

        $pesquisa = request('q');

        $produtos = Produto::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->when($marcaSelecionada, function ($q) use ($marcaSelecionada) {

                if ($marcaSelecionada === 'todas-silvestrin') {
                    $q->whereHas(
                        'marca',
                        fn($q) =>
                        $q->where('parceiro', '!=', 1)
                    );
                } elseif ($marcaSelecionada === 'todas-parceiras') {
                    $q->whereHas(
                        'marca',
                        fn($q) =>
                        $q->where('parceiro', 1)
                    );
                } else {
                    $q->whereHas(
                        'marca',
                        fn($q) =>
                        $q->where('slug', $marcaSelecionada)
                    );
                }
            })
            ->when($categoriaSelecionada, function ($q) use ($categoria, $categoriaSelecionada) {
                if ($categoriaSelecionada === 'a-granel') {
                    $q->whereNotNull('categoria_id');
                } else {
                    $q->where('categoria_id', $categoria->id);
                }
            })
            ->with([
                'produtosIdiomas' => function ($q) use ($idioma, $pesquisa) {
                    $q->whereHas('idiomas', function ($r) use ($idioma) {
                        $r->where('codigo', $idioma)
                            ->orWhere('padrao', true);
                    })
                        ->when('pesquisa', function ($q) use ($pesquisa) {
                            $q->where('nome', 'LIKE', "%{$pesquisa}%");
                        })
                        ->orderBy('idioma_id', 'DESC');
                },
                'marca' => function ($q) {
                    $q->where([
                        'excluido' => NULL,
                        'visivel' => true
                    ]);
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($produto) {
                return [
                    'id' => $produto->id,
                    'imagem' => rafator('content/products/thumbs/' . $produto->imagem),
                    'marca_logo' => rafator('content/brands/thumbs/' . $produto->marca->logo),
                    'nome' => $produto->produtosIdiomas->isNotEmpty() ? $produto->produtosIdiomas[0]->nome : null,
                    'descricao' => $produto->produtosIdiomas->isNotEmpty() ? $produto->produtosIdiomas[0]->descricao : null,
                    'sazonalidade' => $produto->produtosIdiomas->isNotEmpty() && $produto->produtosIdiomas[0]->sazonalidade
                        ? array_map(fn($item) => mb_substr(trim($item), 0, 1), explode(',', $produto->produtosIdiomas[0]->sazonalidade))
                        : [],
                    'manual' => $produto->produtosIdiomas[0]->manual ? rafator('content/manuals/' . $produto->produtosIdiomas[0]->manual) : null,
                    'categoria' => $produto->categoria_id
                ];
            });

        return Inertia::render('Produtos', [
            'todasMarcas' => $todasMarcas,
            'marca' => $marcaData,
            'todasCategorias' => $todasCategorias,
            'produtos' => $produtos
        ]);
    }
};
