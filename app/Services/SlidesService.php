<?php

namespace App\Services;

use App\Models\Idioma;
use App\Models\Slide;
use App\Models\SlideIdioma;

use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class SlidesService extends Service
{
    protected $service;

    public function __construct(ArquivoService $service)
    {
        $this->service = $service;
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param string $tipo
     * @param object $request
     */
    public function cadastrarSlide($tipo, $request)
    {
        $idioma = inertia()->getShared('idioma');

        $slide = new Slide;
        $slide_idioma = new SlideIdioma;

        $img = $request->file('img');
        $img_mobile = $request->file('img_mobile');
        $video = $request->file('vid');
        $video_mobile = $request->file('vid_mobile');

        if ($tipo == 'imagem') {
            $slide->tipo = 'imagem';

            $slide->imagem = $this->service->gerarNome($img);
            $slide->imagem_mobile = $this->service->gerarNome($img_mobile);
        } else if ($tipo == 'video') {
            $slide->tipo = 'video';

            $slide->video = $this->service->gerarNome($video);
            $slide->video_mobile = $this->service->gerarNome($video_mobile);
        }

        $response = $slide->save();

        $slide_idioma->titulo = $request->titulo;
        $slide_idioma->descricao = $request->descricao;
        $slide_idioma->link = $request->link;
        $slide_idioma->texto_botao = $request->texto_botao;

        $slide_idioma->slide_id = $slide->id;
        $slide_idioma->idioma_id = $idioma->id;

        $response = $slide_idioma->save();

        if ($response) {
            if ($tipo == 'imagem') {
                $this->service->salvar($img, 'content/slides/d/', $slide->imagem);
                $this->service->salvar($img_mobile, 'content/slides/m/', $slide->imagem_mobile);
            }
        } else if ($tipo == 'video') {
            $this->service->salvar($video, 'content/slides/videos/d/',  $slide->video);
            $this->service->salvar($video_mobile, 'content/slides/videos/m/',  $slide->video_mobile);
        }

        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param int $id
     */
    public function editarSlide($id)
    {
        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        $slide = Slide::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->with([
                'slidesIdiomas' => function ($q) use ($idioma) {
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

        if (!$slide) {
            return null;
        }

        $idioma = inertia()->getShared('idioma');

        $slideData = [
            'id' => $slide->id,
            'tipo' => $slide->tipo,
            'titulo' => count($slide->slidesIdiomas) ? $slide->slidesIdiomas[0]->titulo : null,
            'descricao' => count($slide->slidesIdiomas) ? $slide->slidesIdiomas[0]->descricao : null,
            'link' => count($slide->slidesIdiomas) ? $slide->slidesIdiomas[0]->link : null,
            'texto_botao' => count($slide->slidesIdiomas) ? $slide->slidesIdiomas[0]->texto_botao : null,
        ];

        if ($slide->tipo === 'imagem') {
            $slideData['imagem'] = rafator('content/slides/d/' . $slide->imagem);
            $slideData['imagem_mobile'] = rafator('content/slides/m/' . $slide->imagem_mobile);
        }

        return [$slideData, $idioma, $idiomas];
    }

    /**
     * Update the specified resource in storage..
     * 
     * @param object $request
     * @param int $id
     */
    public function atualizarSlide($request, $id)
    {

        $slide = Slide::query()
            ->where([
                'excluido' => null,
                'id' => $id
            ])
            ->first();

        $idioma = $request->query('lang');

        $slide_idioma = SlideIdioma::query()
            ->where([
                'excluido' => null,
                'slide_id' => $slide->id
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

        if (!$slide) {
            return false;
        }

        $idioma = $this->getLanguages($slide, 'slidesIdiomas', $idioma);

        if (!$idioma) {
            return false;
        }

        if (!$slide_idioma) {
            $slide_idioma = new SlideIdioma;

            $slide_idioma->slide_id = $slide->id;
            $slide_idioma->idioma_id = $idioma;
        } else {
            $copier = new DeepCopy();
            $slideOriginal = $copier->copy($slide);
        }

        $img = $request->file('img');
        $img_mobile = $request->file('img_mobile');
        $video = $request->file('vid');
        $video_mobile = $request->file('vid_mobile');

        if ($slide->tipo == 'imagem') {
            if ($img && $img->isValid()) {
                $slide->imagem = $this->service->gerarNome($img);
            }
            if ($img_mobile && $img_mobile->isValid()) {
                $slide->imagem_mobile = $this->service->gerarNome($img_mobile);
            }
        } elseif ($slide->tipo == 'video') {
            if ($video && $video->isValid()) {
                $slide->video = $this->service->gerarNome($video);
            }
            if ($video_mobile && $video_mobile->isValid()) {
                $slide->video_mobile = $this->service->gerarNome($video_mobile);
            }
        }

        $slide_idioma->titulo = $request->titulo;
        $slide_idioma->descricao = $request->descricao;
        $slide_idioma->link = $request->link;
        $slide_idioma->texto_botao = $request->texto_botao;

        $response = $slide->save();
        $response = $slide_idioma->save();

        if ($response) {
            if ($slide->tipo == 'imagem') {
                if ($img && $img->isValid()) {
                    if ($slide->imagem && isset($slideOriginal) && File::exists(public_path('content/slides/d/' . $slideOriginal->imagem))) {
                        File::delete(public_path('content/slides/d/' . $slideOriginal->imagem));
                    }
                    $this->service->salvar($img, 'content/slides/d/', $slide->imagem);
                }

                if ($slide->imagem_mobile && isset($slideOriginal) && File::exists(public_path('content/slides/d/' . $slideOriginal->imagem_mobile))) {
                    File::delete(public_path('content/slides/m/' . $slideOriginal->imagem_mobile));
                }
                $this->service->salvar($img_mobile, 'content/slides/m/', $slide->imagem_mobile);
            }
        }
        if ($slide->tipo == 'video') {
            if ($video && $video->isValid()) {
                if ($slide->video && isset($slideOriginal) && File::exists(public_path('content/slides/videos/d/' . $slideOriginal->video))) {
                    File::delete(public_path('content/slides/videos/d/' . $slideOriginal->video));
                }
                $this->service->salvar($video, 'content/slides/videos/d/', $slide->video);
            }

            if ($video_mobile && $video_mobile->isValid()) {
                if ($slide->video_mobile && isset($slideOriginal) && File::exists(public_path('content/slides/videos/m/' . $slideOriginal->video_mobile))) {
                    File::delete(public_path('content/slides/videos/m/' . $slideOriginal->video_mobile));
                }
                $this->service->salvar($video_mobile, 'content/slides/videos/m/', $slide->video_mobile);
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
        $response = Slide::query()
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
                $registro = Slide::query()
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

    /**
     * Download the file of the specified resource.
     *
     * @param  int  $id
     * @param  object  $video
     */
    public function baixarVideo($id, $video)
    {
        $slide = Slide::query()
            ->where([
                'id' => $id,
                'excluido' => NULL,
            ])
            ->first();

        if (!$slide) {
            return false;
        }

        if ($video == 'desktop') {
            $caminho = public_path('content/slides/videos/d/' . $slide->video);
        } else if ($video == 'mobile') {
            $caminho = public_path('content/slides/videos/m/' . $slide->video_mobile);
        }

        $extensao = pathinfo($caminho)['extension'];

        if (!File::exists($caminho)) {
            return false;
        }

        return [$caminho, $extensao];
    }
}
