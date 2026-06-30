<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Conteudo;
use App\Models\Marca;
use App\Models\Pagina;
use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController
{
    public function __invoke()
    {
        $sitemap = Sitemap::create();

        $paginas = Pagina::query()
            ->where('excluido', null)
            ->get();

        foreach ($paginas as $pagina) {
            $route = $pagina->controladora . '.' . $pagina->acao;

            $ultimaModificacao = Conteudo::query()
                ->where([
                    'excluido' => NULL,
                    'controladora' => $pagina->controladora,
                    'acao' => $pagina->acao
                ])
                ->orderByDesc('modificado')
                ->first();;

            if (
                Route::has($route) &&
                $pagina->acao !== 'enviar'
            ) {
                $sitemap->add(
                    Url::create(route($route))
                        ->setLastModificationDate(
                            $ultimaModificacao->modificado ?? $ultimaModificacao->criado ?? $pagina->modificado ?? $pagina->criado
                        )
                        ->setPriority($pagina->controladora === 'Politicas' ? 0.3 : 1.0)
                );
            }
        }

        Categoria::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->get()
            ->each(function ($categoria) use ($sitemap) {

                $sitemap->add(
                    Url::create(
                        route('Produtos.index', [
                            'categoria' => $categoria->slug,
                        ])
                    )
                        ->setLastModificationDate($categoria->modificado ?? $categoria->criado)
                        ->setPriority(0.8)
                );
            });

        Marca::query()
            ->where([
                'excluido' => NULL,
                'visivel' => true
            ])
            ->get()
            ->each(function ($marca) use ($sitemap) {
                $params = [
                    'marca' => $marca->slug,
                ];

                if ($marca->parceiro) {
                    $params['parceiro'] = 1;
                }

                $sitemap->add(
                    Url::create(
                        route('Produtos.index', $params)
                    )
                        ->setLastModificationDate($marca->modificado ?? $marca->criado)
                        ->setPriority(0.7)
                );
            });

        return $sitemap;
    }
}
