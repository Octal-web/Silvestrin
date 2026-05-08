<?php

namespace App\Services\Manager;

use App\Models\Categoria;
use App\Models\Idioma;
use App\Models\Marca;
use App\Models\Produto;
use App\Models\ProdutoIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class ProdutosService extends Service
{
    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function carregarDadosProduto()
    {
        $marcas = Marca::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'marcasIdiomas' => function ($q) {
                    $q->whereHas('idiomas', function ($r) {
                        $r->Where('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($item) {
                return [
                    'label' => $item->marcasIdiomas->isNotEmpty() ? $item->marcasIdiomas[0]->nome : null,
                    'value' =>  $item->id
                ];
            });

        $categorias = Categoria::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->with([
                'categoriasIdiomas' => function ($q) {
                    $q->whereHas('idiomas', function ($r) {
                        $r->Where('padrao', true);
                    })
                        ->orderBy('idioma_id', 'DESC');
                }
            ])
            ->orderBy('ordem', 'ASC')
            ->orderBy('id', 'DESC')
            ->get()
            ->map(function ($item) {
                return [
                    'value' => $item->id,
                    'label' => $item->categoriasIdiomas->isNotEmpty() ? $item->categoriasIdiomas[0]->nome : null,
                ];
            });

        return [$categorias, $marcas];
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param object $idioma
     * @param object $request
     */
    public function cadastrarProduto($idioma, $request)
    {
        $produto = new Produto();
        $produtos_idioma = new ProdutoIdioma();

        $arquivo = $request->file('manual');
        $imagem = $request->file('imagem');

        if ($arquivo) {
            $produtos_idioma->manual = $this->service->gerarNome($arquivo);
        }

        $produto->imagem = $this->service->gerarNome($imagem);
        $produto->marca_id = $request->marca_id;
        $produto->categoria_id = $request->categoria_id;

        $response = $produto->save();

        $produtos_idioma->nome = $request->nome;
        $produtos_idioma->descricao = $request->descricao;

        if ($request->sazonalidade) {
            $sazonalidadeText = implode(',', $request->sazonalidade);
            $produtos_idioma->sazonalidade = $sazonalidadeText;
        }

        $produtos_idioma->produto_id = $produto->id;
        $produtos_idioma->idioma_id = $idioma->id;

        $response = $produtos_idioma->save();

        if ($response) {
            if ($arquivo) $this->service->salvar($arquivo, 'content/manuals/', $produtos_idioma->manual);

            if ($imagem) $this->service->salvar($imagem, 'content/products/thumbs/', $produto->imagem);
        }


        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarProduto($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $produto = Produto::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'produtosIdiomas' => function ($q) use ($idioma) {
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

        if (!$produto) {
            return null;
        }

        [$categorias, $marcas] = $this->carregarDadosProduto();

        $idioma = inertia()->getShared('idioma');

        $produtoData = [
            'id' => $produto->id,
            'nome' => count($produto->produtosIdiomas) ? $produto->produtosIdiomas[0]->nome : null,
            'descricao' => count($produto->produtosIdiomas) ? $produto->produtosIdiomas[0]->descricao : null,
            'sazonalidade' => count($produto->produtosIdiomas) ? explode(',', $produto->produtosIdiomas[0]->sazonalidade) : [],
            'marca_id' => $produto->marca_id,
            'categoria_id' => $produto->categoria_id,
        ];

        if (
            $produto->produtosIdiomas->isNotEmpty() &&
            $produto->produtosIdiomas[0]->manual
        ) {
            $arquivoNome = $produto->produtosIdiomas[0]->manual;
            $arquivoPath = public_path('content/manuals/' . $arquivoNome);

            $produtoData['manual'] = [
                'name' => $arquivoNome,
                'size' => File::exists($arquivoPath) ? File::size($arquivoPath) : 0,
                'url' => rafator('content/manuals/' . $arquivoNome),
            ];
        }

        if ($produto->imagem) {
            $produtoData['imagem'] = rafator('content/products/thumbs/' . $produto->imagem);
        }

        return [$produtoData, $idioma, $idiomas, $marcas, $categorias];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarProduto($request, $id)
    {
        $produto = Produto::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $produtos_idioma = ProdutoIdioma::query()
            ->where([
                'excluido' => null,
                'produto_id' => $produto->id
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

        if (!$produto) {
            return false;
        }

        $idioma = $this->getLanguages($produto, 'produtosIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$produtos_idioma) {
            $produtos_idioma = new ProdutoIdioma;

            $produtos_idioma->produto_id = $produto->id;
            $produtos_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $produtoOriginal = $copier->copy($produto);
            $produtoOriginalArquivo = $copier->copy($produtos_idioma);
        }

        $arquivo = $request->file('manual');
        $imagem = $request->file('imagem');
        $removerManual = $request->manual === null;

        if ($arquivo && $arquivo->isValid()) {
            $produtos_idioma->manual =  $this->service->gerarNome($arquivo);
        }

        if ($removerManual && isset($produtoOriginalArquivo->manual)) {

            $arquivoPath = public_path(
                'content/manuals/' . $produtoOriginalArquivo->manual
            );

            if (File::exists($arquivoPath)) {
                File::delete($arquivoPath);
            }

            $produtos_idioma->manual = null;
        }

        if ($produto->imagem) {
            if ($imagem && $imagem->isValid()) {
                $produto->imagem =  $this->service->gerarNome($imagem);
            }
        }
        $produto->marca_id = $request->marca_id;
        $produto->categoria_id = $request->categoria_id;

        $produtos_idioma->nome = $request->nome;
        $produtos_idioma->descricao = $request->descricao;

        if ($request->sazonalidade) {
            $sazonalidadeText = implode(',', $request->sazonalidade);
            $produtos_idioma->sazonalidade = $sazonalidadeText;
        }

        $response = $produto->save();
        $response = $produtos_idioma->save();

        if ($response) {
            if ($produtos_idioma->manual) {
                if ($arquivo && $arquivo->isValid()) {
                    if ($produtos_idioma->manual && isset($produtoOriginalArquivo->manual) && File::exists(public_path('content/manuals/' . $produtoOriginalArquivo->manual))) {
                        File::delete(public_path('content/manuals/' . $produtoOriginalArquivo->manual));
                    }
                    $this->service->salvar($arquivo, 'content/manuals/', $produtos_idioma->manual);
                }
            }

            if ($produto->imagem) {
                if ($imagem && $imagem->isValid()) {
                    if ($produto->imagem && isset($produtoOriginal) && File::exists(public_path('content/products/thumbs/' . $produtoOriginal->imagem))) {
                        File::delete(public_path('content/products/thumbs/' . $produtoOriginal->imagem));
                    }
                    $this->service->salvar($imagem, 'content/products/thumbs/', $produto->imagem);
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
        $response = Produto::query()
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
                $registro = Produto::query()
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
