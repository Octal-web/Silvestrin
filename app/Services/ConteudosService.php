<?php

namespace App\Services;

use App\Models\Conteudo;
use App\Models\ConteudoIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class ConteudosService extends Service
{
    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Set the language based in the id
     * 
     * @param object $request
     * @param string $id
     */
    public function editarConteudo($request, $id)
    {
        $conteudo = Conteudo::query()
            ->where('id', $id)
            ->with('Parametro')
            ->first();

        $idioma = $request->query('lang');

        $conteudo_idioma = ConteudoIdioma::query()
            ->where([
                'excluido' => null,
                'conteudo_id' => $conteudo->id
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

        if (!$conteudo) {
            return false;
        }

        $idioma = $this->getLanguages($conteudo, 'ConteudosIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$conteudo_idioma) {
            $request->validate(
                [
                    'img' => $conteudo->parametro->habilitar_imagem ? 'required' : 'nullable',
                    'img_mobile' => $conteudo->parametro->habilitar_imagem_mobile ? 'required' : 'nullable',
                    'conteudosIdiomas.0.arq' => $conteudo->parametro->habilitar_arq ? 'required' : 'nullable',
                ],
                [
                    'img.required' => 'Por favor, selecione uma imagem.',
                    'img_mobile.required' => 'Por favor, selecione uma imagem mobile.',
                    'conteudosIdiomas.0.arq.required' => 'Por favor, selecione um arquivo.',
                ]
            );

            $conteudo_idioma = new ConteudoIdioma;

            $conteudo_idioma->conteudo_id = $conteudo->id;
            $conteudo_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $conteudoOriginal = $copier->copy($conteudo);
        }

        $conteudo_idioma->titulo = $request->exists('conteudosIdiomas.0.titulo') ? $request['conteudosIdiomas'][0]['titulo'] : null;
        $conteudo_idioma->subtitulo = $request->exists('conteudosIdiomas.0.subtitulo') ? $request['conteudosIdiomas'][0]['subtitulo'] : null;
        $conteudo_idioma->texto = $request->exists('conteudosIdiomas.0.texto') ? $request['conteudosIdiomas'][0]['texto'] : null;
        $conteudo_idioma->link = $request->exists('conteudosIdiomas.0.link') ? $request['conteudosIdiomas'][0]['link'] : null;
        $conteudo_idioma->nova_aba = $request->exists('conteudosIdiomas.0.nova_aba') ? $request['conteudosIdiomas'][0]['nova_aba'] : null;
        $conteudo_idioma->video = $request->exists('conteudosIdiomas.0.video') ? $request['conteudosIdiomas'][0]['video'] : null;

        if ($request->file('img') && $request->file('img')->getError() == 0) {
            $conteudo->imagem = $this->service->gerarNome($request->file('img'));
        }

        if ($request->file('img_mobile') && $request->file('img_mobile')->getError() == 0) {
            $conteudo->imagem_mobile = $this->service->gerarNome($request->file('img_mobile'));
        }
        if ($request->file('arq') && $request->file('arq')->getError() == 0) {
            $conteudo_idioma->arquivo = $this->service->gerarNome($request->file('arq'));
        }

        $responseConteudo = $conteudo->save();
        $responseIdioma = $conteudo_idioma->save();

        $response = $responseConteudo && $responseIdioma;

        if ($response) {

            if ($conteudo->parametro->habilitar_img && $request->file('img') && $request->file('img')->getError() == 0) {

                if ($conteudo->imagem && isset($conteudoOriginal) && File::exists('content/display/' . $conteudoOriginal->imagem)) {
                    File::delete('content/display/' . $conteudoOriginal->imagem);
                }

                $this->service->salvar($request->file('img'), 'content/display/', $conteudo->imagem);
            }


            if ($conteudo->parametro->habilitar_img_mobile && $request->file('img_mobile') && $request->file('img_mobile')->getError() == 0) {
                if (isset($conteudoOriginal) && $conteudo->imagem_mobile && File::exists(public_path('content/display/') . $conteudoOriginal->imagem_mobile)) {
                    File::delete(public_path('content/display/') . $conteudoOriginal->imagem_mobile);
                }

                $this->service->salvar($request->file('img_mobile'), 'content/display/', $conteudo->imagem_mobile);
            }

            if ($conteudo->parametro->habilitar_arq && $request->file('arq') && $request->file('arq')->getError() == 0) {
                if (isset($conteudoOriginal) && $conteudo_idioma->arquivo && File::exists(public_path('content/files/') . $conteudoOriginal->arquivo)) {
                    File::delete(public_path('content/files/') . $conteudoOriginal->arquivo);
                }

                $request->file('arq')->storeAs('content/files/', $conteudo_idioma->arquivo);
            }

            return true;
        }
        return false;
    }
}
