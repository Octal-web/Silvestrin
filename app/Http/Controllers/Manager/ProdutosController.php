<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\ProdutoRequest;
use App\Models\Produto;
use App\Services\Manager\ProdutosService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdutosController extends Controller
{
    protected $service;

    public function __construct(ProdutosService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produtos = Produto::query()
            ->where([
                'excluido' => NULL
            ])
            ->with([
                'produtosIdiomas' => function ($q) {
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
                    'id' => $item->id,
                    'visivel' => $item->visivel,
                    'titulo' => $item->produtosIdiomas->isNotEmpty() ? $item->produtosIdiomas[0]->nome : null,
                    'imagem' => rafator('content/products/thumbs/' . $item->imagem)
                ];
            });

        return Inertia::render('Manager/Produtos/index', [
            'produtos' => $produtos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function adicionar()
    {
        [$categorias, $marcas] = $this->service->carregarDadosProduto();

        return Inertia::render('Manager/Produtos/adicionar', [
            'categorias' => $categorias,
            'marcas' => $marcas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function novo(ProdutoRequest $request)
    {
        if ($request->ajax()) {
            $arquivo = $request->file('imagem');

            if (!$arquivo) {
                return Inertia::location(route('Manager.Produtos.index'));
            }

            $idioma = inertia()->getShared('idioma');

            $response = $this->service->cadastrarProduto($idioma, $request);

            if ($response) {
                return to_route('Manager.Produtos.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!']);
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editar($id)
    {
        if (!$id) {
            return Inertia::location(route('Manager.Produtos.index'));
        }

        [$produtoData, $idioma, $idiomas, $marcas, $categorias] = $this->service->editarProduto($id);

        return Inertia::render('Manager/Produtos/editar', [
            'idiomas' => $idiomas,
            'idioma' => $idioma,
            'produto' => $produtoData,
            'marcas' => $marcas,
            'categorias' => $categorias
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function atualizar(ProdutoRequest $request, $id)
    {
        if ($request->ajax()) {
            $response = $this->service->atualizarProduto($request, $id);

            return $response
                ? to_route('Manager.Produtos.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!'])
                : to_route('Manager.Produtos.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
        }
        return to_route('Manager.Produtos.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações. Tente novamente mais tarde.']);
    }

    /**
     * Set the specified resource as deleted.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function excluir(Request $request, $id)
    {
        if ($request->ajax()) {
            if (!$id) {
                return $request->header('referer');
            }

            $exclusao = Produto::query()
                ->where([
                    'excluido' => NULL,
                    'id' => $id
                ])
                ->update([
                    'excluido' => Carbon::now()
                ]);

            if ($exclusao == true) {
                return redirect()->back()->with('message', ['type' => 'alert', 'msg' => 'Registro excluído com sucesso.']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Não foi possível excluir o registro.']);
            }
        }
    }

    /**
     * Set the specified resource to visible/invisible.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function visibilidade(Request $request, $id)
    {
        if ($request->ajax()) {
            if (!$id) {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Registro não encontrado!']);
            }

            $response = $this->service->editarVisibilidade($id);

            if ($response) {
                return redirect()->back()->with('message', ['type' => 'success', 'msg' => 'Visibilidade alterada com sucesso!']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Visibilidade não alterada!']);
            }
        }

        return $request->header('referer');
    }

    /**
     * Update the order of the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ordenar(Request $request)
    {
        if ($request->ajax()) {
            $response = $this->service->editarOrdem($request);

            if ($response) {
                return redirect()->back()->with('message', ['type' => 'success', 'msg' => 'Registros reordenados com sucesso!']);
            } else {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Registros não reordenados, tente novamente mais tarde!']);
            }
        }

        return redirect()->back();
    }
};
