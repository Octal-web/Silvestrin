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
use App\Http\Controllers\Manager\MarcasController as ManagerMarcasController;
use App\Http\Controllers\Manager\InstitucionalController as ManagerInstitucionalController;
use App\Http\Controllers\Manager\AcontecimentosController as ManagerAcontecimentosController;
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

        Route::put('/conteudos/editar/{id}', [ManagerConteudosController::class, 'editarAction'])->name('Manager.Conteudos.editar');
        Route::post('/conteudos/baixar-arquivo/{id}', [ManagerConteudosController::class, 'baixarArquivo'])->name('Manager.Conteudos.baixarArquivo');

        Route::get('/imagens/{id}', [ManagerImagensController::class, 'conteudo'])->name('Manager.Imagens.conteudo');
        Route::post('/imagens/conteudo/adicionar/{id}', [ManagerImagensController::class, 'novo'])->name('Manager.Imagens.novo');

        Route::post('/imagens/conteudo/ordenar/{id}', [ManagerImagensController::class, 'ordenar'])->name('Manager.Imagens.ordenar');
        Route::post('/imagens/conteudo/visibilidade/{id}', [ManagerImagensController::class, 'visibilidade'])->name('Manager.Imagens.visibilidade');
        Route::post('/imagens/conteudo/excluir/{id}', [ManagerImagensController::class, 'excluir'])->name('Manager.Imagens.excluir');


        Route::get('/home', [ManagerHomeController::class, 'index'])->name('Manager.Home.index');

        Route::post('/marcas/ordenar', [ManagerMarcasController::class, 'ordenar'])->name('Manager.Marcas.ordenar');
        Route::post('/marcas/visibilidade/{id}', [ManagerMarcasController::class, 'visibilidade'])->name('Manager.Marcas.visibilidade');
        Route::post('/marcas/excluir/{id}', [ManagerMarcasController::class, 'excluir'])->name('Manager.Marcas.excluir');

        Route::get('/marcas/adicionar', [ManagerMarcasController::class, 'adicionar'])->name('Manager.Marcas.adicionar');
        Route::post('/marcas/adicionar', [ManagerMarcasController::class, 'novo'])->name('Manager.Marcas.novo');
        Route::get('/marcas/editar/{id}', [ManagerMarcasController::class, 'editar'])->name('Manager.Marcas.editar');
        Route::post('/marcas/editar/{id}', [ManagerMarcasController::class, 'atualizar'])->name('Manager.Marcas.atualizar');


        Route::get('/institucional', [ManagerInstitucionalController::class, 'index'])->name('Manager.Institucional.index');

        Route::post('/institucional/acontecimentos/ordenar', [ManagerAcontecimentosController::class, 'ordenar'])->name('Manager.Acontecimentos.ordenar');
        Route::post('/institucional/acontecimentos/visibilidade/{id}', [ManagerAcontecimentosController::class, 'visibilidade'])->name('Manager.Acontecimentos.visibilidade');
        Route::post('/institucional/acontecimentos/excluir/{id}', [ManagerAcontecimentosController::class, 'excluir'])->name('Manager.Acontecimentos.excluir');

        Route::get('/institucional/acontecimentos/adicionar', [ManagerAcontecimentosController::class, 'adicionar'])->name('Manager.Acontecimentos.adicionar');
        Route::post('/institucional/acontecimentos/adicionar', [ManagerAcontecimentosController::class, 'novo'])->name('Manager.Acontecimentos.novo');
        Route::get('/institucional/acontecimentos/editar/{id}', [ManagerAcontecimentosController::class, 'editar'])->name('Manager.Acontecimentos.editar');
        Route::post('/institucional/acontecimentos/editar/{id}', [ManagerAcontecimentosController::class, 'atualizar'])->name('Manager.Acontecimentos.atualizar');


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
