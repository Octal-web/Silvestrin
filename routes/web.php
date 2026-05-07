<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\InstitucionalController;
use App\Http\Controllers\TransportadoraController;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\CultivoController;
use App\Http\Controllers\PoliticasController;

use App\Http\Controllers\Manager\UsuariosController;
use App\Http\Controllers\Manager\ConteudosController as ManagerConteudosController;
use App\Http\Controllers\Manager\ImagensController as ManagerImagensController;
use App\Http\Controllers\Manager\HomeController as ManagerHomeController;
use App\Http\Controllers\Manager\PaginasController as ManagerPaginasController;
use App\Http\Controllers\Manager\SlidesController as ManagerSlidesController;
use App\Http\Controllers\Manager\ValoresController as ManagerValoresController;
use App\Http\Controllers\Manager\ParceriasController as ManagerParceriasController;
use App\Http\Controllers\Manager\MarcasController as ManagerMarcasController;
use App\Http\Controllers\Manager\InstitucionalController as ManagerInstitucionalController;
use App\Http\Controllers\Manager\ProdutosController as ManagerProdutosController;
use App\Http\Controllers\Manager\CategoriasController as ManagerCategoriasController;
use App\Http\Controllers\Manager\ContatoController as ManagerContatoController;
use App\Http\Controllers\Manager\PoliticasController as ManagerPoliticasController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => LaravelLocalization::setLocale(), 'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']], function () {
    Route::get('/', [HomeController::class, 'index'])->name('Home.index');

    Route::get('/sobre-nos', [InstitucionalController::class, 'index'])->name('Institucional.index');

    Route::get('/transportadora', [TransportadoraController::class, 'index'])->name('Transportadora.index');

    Route::get('/produtos', [ProdutosController::class, 'marcas'])->name('Produtos.marcas');
    Route::get('/produtos/frutas', [ProdutosController::class, 'frutas'])->name('Produtos.frutas');

    Route::get('/cultivo', [CultivoController::class, 'index'])->name('Cultivo.index');

    Route::get('/sustentabilidade', [InstitucionalController::class, 'sustentabilidade'])->name('Institucional.sustentabilidade');

    Route::get('/contato', [ContatoController::class, 'index'])->name('Contato.index');
    Route::post('/contato/enviar', [ContatoController::class, 'enviar'])->name('Contato.enviar');

    Route::get('/politica-de-privacidade', [PoliticasController::class, 'privacidade'])->name('Politicas.privacidade');
});

Route::prefix('/manager')->group(function () {
    Route::get('/', [UsuariosController::class, 'login'])->name('Manager.Usuarios.login');
    Route::post('/', ['as' => 'login', 'uses' => 'App\Http\Controllers\Manager\UsuariosController@authenticate']);

    Route::post('/usuarios/logout', [UsuariosController::class, 'logout'])->name('Manager.Usuarios.logout');

    Route::group(['middleware' => ['auth']], function () {
        Route::put('/paginas/editar/{id}', [ManagerPaginasController::class, 'editarAction'])->name('Manager.Paginas.editar');

        Route::post('/conteudos/editar/{id}', [ManagerConteudosController::class, 'editarAction'])->name('Manager.Conteudos.editar');
        Route::post('/conteudos/baixar-arquivo/{id}', [ManagerConteudosController::class, 'baixarArquivo'])->name('Manager.Conteudos.baixarArquivo');

        Route::get('/imagens/{id}', [ManagerImagensController::class, 'conteudo'])->name('Manager.Imagens.conteudo');
        Route::post('/imagens/conteudo/adicionar/{id}', [ManagerImagensController::class, 'novo'])->name('Manager.Imagens.novo');

        Route::post('/imagens/conteudo/ordenar/{id}', [ManagerImagensController::class, 'ordenar'])->name('Manager.Imagens.ordenar');
        Route::post('/imagens/conteudo/visibilidade/{id}', [ManagerImagensController::class, 'visibilidade'])->name('Manager.Imagens.visibilidade');
        Route::post('/imagens/conteudo/excluir/{id}', [ManagerImagensController::class, 'excluir'])->name('Manager.Imagens.excluir');

        Route::get('/home', [ManagerHomeController::class, 'index'])->name('Manager.Home.index');

        Route::post('/slides/ordenar', [ManagerSlidesController::class, 'ordenar'])->name('Manager.Slides.ordenar');
        Route::post('/slides/visibilidade/{id}', [ManagerSlidesController::class, 'visibilidade'])->name('Manager.Slides.visibilidade');
        Route::post('/slides/excluir/{id}', [ManagerSlidesController::class, 'excluir'])->name('Manager.Slides.excluir');

        Route::get('/slides/adicionar/{tipo}', [ManagerSlidesController::class, 'adicionar'])->name('Manager.Slides.adicionar');
        Route::post('/slides/adicionar/{tipo}', [ManagerSlidesController::class, 'novo'])->name('Manager.Slides.novo');
        Route::get('/slides/editar/{id}', [ManagerSlidesController::class, 'editar'])->name('Manager.Slides.editar');
        Route::post('/slides/editar/{id}', [ManagerSlidesController::class, 'atualizar'])->name('Manager.Slides.atualizar');
        Route::get('/slides/baixar-video/{id}/{video}', [ManagerSlidesController::class, 'baixarVideo'])->name('Manager.Slides.baixarVideo');

        Route::post('/valores/ordenar', [ManagerValoresController::class, 'ordenar'])->name('Manager.Valores.ordenar');
        Route::post('/valores/visibilidade/{id}', [ManagerValoresController::class, 'visibilidade'])->name('Manager.Valores.visibilidade');
        Route::post('/valores/excluir/{id}', [ManagerValoresController::class, 'excluir'])->name('Manager.Valores.excluir');

        Route::get('/valores/adicionar', [ManagerValoresController::class, 'adicionar'])->name('Manager.Valores.adicionar');
        Route::post('/valores/adicionar', [ManagerValoresController::class, 'novo'])->name('Manager.Valores.novo');
        Route::get('/valores/editar/{id}', [ManagerValoresController::class, 'editar'])->name('Manager.Valores.editar');
        Route::post('/valores/editar/{id}', [ManagerValoresController::class, 'atualizar'])->name('Manager.Valores.atualizar');

        Route::post('/marcas/ordenar', [ManagerMarcasController::class, 'ordenar'])->name('Manager.Marcas.ordenar');
        Route::post('/marcas/visibilidade/{id}', [ManagerMarcasController::class, 'visibilidade'])->name('Manager.Marcas.visibilidade');
        Route::post('/marcas/excluir/{id}', [ManagerMarcasController::class, 'excluir'])->name('Manager.Marcas.excluir');

        Route::get('/marcas/adicionar', [ManagerMarcasController::class, 'adicionar'])->name('Manager.Marcas.adicionar');
        Route::post('/marcas/adicionar', [ManagerMarcasController::class, 'novo'])->name('Manager.Marcas.novo');
        Route::get('/marcas/editar/{id}', [ManagerMarcasController::class, 'editar'])->name('Manager.Marcas.editar');
        Route::post('/marcas/editar/{id}', [ManagerMarcasController::class, 'atualizar'])->name('Manager.Marcas.atualizar');


        Route::get('/institucional', [ManagerInstitucionalController::class, 'index'])->name('Manager.Institucional.index');

        Route::get('/institucional/sustentabilidade', [ManagerInstitucionalController::class, 'sustentabilidade'])->name('Manager.Institucional.sustentabilidade');

        Route::post('/parcerias/ordenar', [ManagerParceriasController::class, 'ordenar'])->name('Manager.Parcerias.ordenar');
        Route::post('/parcerias/visibilidade/{id}', [ManagerParceriasController::class, 'visibilidade'])->name('Manager.Parcerias.visibilidade');
        Route::post('/parcerias/excluir/{id}', [ManagerParceriasController::class, 'excluir'])->name('Manager.Parcerias.excluir');

        Route::get('/parcerias/adicionar', [ManagerParceriasController::class, 'adicionar'])->name('Manager.Parcerias.adicionar');
        Route::post('/parcerias/adicionar', [ManagerParceriasController::class, 'novo'])->name('Manager.Parcerias.novo');
        Route::get('/parcerias/editar/{id}', [ManagerParceriasController::class, 'editar'])->name('Manager.Parcerias.editar');
        Route::post('/parcerias/editar/{id}', [ManagerParceriasController::class, 'atualizar'])->name('Manager.Parcerias.atualizar');


        Route::get('/produtos', [ManagerProdutosController::class, 'index'])->name('Manager.Produtos.index');

        Route::post('/produtos/ordenar', [ManagerProdutosController::class, 'ordenar'])->name('Manager.Produtos.ordenar');
        Route::post('/produtos/visibilidade/{id}', [ManagerProdutosController::class, 'visibilidade'])->name('Manager.Produtos.visibilidade');
        Route::post('/produtos/excluir/{id}', [ManagerProdutosController::class, 'excluir'])->name('Manager.Produtos.excluir');

        Route::get('/produtos/adicionar', [ManagerProdutosController::class, 'adicionar'])->name('Manager.Produtos.adicionar');
        Route::post('/produtos/adicionar', [ManagerProdutosController::class, 'novo'])->name('Manager.Produtos.novo');
        Route::get('/produtos/editar/{id}', [ManagerProdutosController::class, 'editar'])->name('Manager.Produtos.editar');
        Route::post('/produtos/editar/{id}', [ManagerProdutosController::class, 'atualizar'])->name('Manager.Produtos.atualizar');


        Route::post('/categorias/ordenar', [ManagerCategoriasController::class, 'ordenar'])->name('Manager.Categorias.ordenar');
        Route::post('/categorias/visibilidade/{id}', [ManagerCategoriasController::class, 'visibilidade'])->name('Manager.Categorias.visibilidade');
        Route::post('/categorias/excluir/{id}', [ManagerCategoriasController::class, 'excluir'])->name('Manager.Categorias.excluir');

        Route::get('/categorias/adicionar', [ManagerCategoriasController::class, 'adicionar'])->name('Manager.Categorias.adicionar');
        Route::post('/categorias/adicionar', [ManagerCategoriasController::class, 'novo'])->name('Manager.Categorias.novo');
        Route::get('/categorias/editar/{id}', [ManagerCategoriasController::class, 'editar'])->name('Manager.Categorias.editar');
        Route::post('/categorias/editar/{id}', [ManagerCategoriasController::class, 'atualizar'])->name('Manager.Categorias.atualizar');


        Route::get('/contato', [ManagerContatoController::class, 'index'])->name('Manager.Contato.index');
        Route::get('/contato/visualizar/{id}', [ManagerContatoController::class, 'visualizar'])->name('Manager.Contato.visualizar');
        Route::post('/contato/excluir/{id}', [ManagerContatoController::class, 'excluir'])->name('Manager.Contato.excluir');


        Route::get('/politicas/privacidade', [ManagerPoliticasController::class, 'privacidade'])->name('Manager.Politicas.privacidade');
    });
});

Auth::routes(['login' => false]);
