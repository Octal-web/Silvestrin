<?php

namespace App\Services;

use App\Models\Pagina;
use App\Models\PaginaIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class PaginasService extends Service
{

    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Generate random name
     * 
     * @param object $request
     * @param string $id
     */
    public function editarPagina($request, $id)
    {
        $request->validate(
            [
                'paginasIdiomas.0.titulo' => 'required|max:60',
                'paginasIdiomas.0.descricao' => 'required|max:300',
                'paginasIdiomas.0.titulo_compartilhamento' => 'required|max:60',
                'paginasIdiomas.0.descricao_compartilhamento' => 'required|max:300',
                'img' => 'nullable|image|mimes:png,jpg|max:2048',
            ],
            [
                'paginasIdiomas.0.titulo.required' => 'Por favor, informe o título.',
                'paginasIdiomas.0.titulo.max' => 'O título da página deve conter no máximo 60 caracteres.',
                'paginasIdiomas.0.descricao.required' => 'Por favor, informe a descrição da página.',
                'paginasIdiomas.0.descricao.max' => 'A descrição da página deve conter no máximo 300 caracteres.',
                'paginasIdiomas.0.titulo_compartilhamento.required' => 'Por favor, informe o título exibido ao compartilhar.',
                'paginasIdiomas.0.titulo_compartilhamento.max' => 'O título exibido ao compartilhar deve conter no máximo 60 caracteres.',
                'paginasIdiomas.0.descricao_compartilhamento.required' => 'Por favor, informe a descrição exibida ao compartilhar.',
                'paginasIdiomas.0.descricao_compartilhamento.max' => 'A descrição exibida ao compartilhar deve conter no máximo 300 caracteres.',
                'img.image' => 'Por favor, selecione uma imagem válida.',
                'img.mimes' => 'Os formatos de imagem válidos são: JPG e PNG.',
                'img.max' => 'Por favor, envie um arquivo menor que 2MB.',
            ]
        );

        $pagina = Pagina::query()
            ->where([
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $pagina_idioma = PaginaIdioma::query()
            ->where([
                'excluido' => null,
                'pagina_id' => $pagina->id
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

        if (!$pagina) {
            return false;
        }

        $idioma = $this->getLanguages($pagina, 'PaginasIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$pagina_idioma) {
            $pagina_idioma = new PaginaIdioma;

            $pagina_idioma->pagina_id = $pagina->id;
            $pagina_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $paginaOriginal = $copier->copy($pagina_idioma);
        }

        $pagina_idioma->titulo = $request['paginasIdiomas'][0]['titulo'];
        $pagina_idioma->descricao = $request['paginasIdiomas'][0]['descricao'];
        $pagina_idioma->titulo_compartilhamento = $request['paginasIdiomas'][0]['titulo_compartilhamento'];
        $pagina_idioma->descricao_compartilhamento = $request['paginasIdiomas'][0]['descricao_compartilhamento'];

        if ($request->file('img') && $request->file('img')->getError() == 0) {
            $pagina->imagem = $this->service->gerarNome($request->file('img'));
        }

        $response = $pagina->save();
        $response = $pagina_idioma->save();

        if ($response) {
            if ($request->file('img') && $request->file('img')->getError() == 0) {
                if ($pagina->imagem && File::exists(public_path('content/pages/') . $paginaOriginal->imagem)) {
                    File::delete(public_path('content/pages/') . $paginaOriginal->imagem);
                }

                $image = $request->file('img')->move(public_path('content/pages/'), $pagina->imagem);
            }

            return true;
        }

        return false;
    }
}
