<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Slide;
use App\Models\SlideIdioma;
use App\Models\Idioma;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Manager\SlideRequest;
use App\Services\SlidesService;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;

use DeepCopy\DeepCopy;

class SlidesController extends Controller
{
    protected $service;

    public function __construct(SlidesService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function adicionar($tipo)
    {
        if (!$tipo || !in_array($tipo, ['imagem', 'video'])) {
            return Inertia::location(route('Manager.Home.index'));
        }

        $idiomas = Idioma::query()
            ->orderBy('padrao', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $idioma = request('lang');

        return Inertia::render('Manager/Slides/adicionar', [
            'tipo' => $tipo
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function novo(SlideRequest $request, $tipo)
    {
        if ($request->ajax()) {
            if (!$tipo || !in_array($tipo, ['imagem', 'video'])) {
                return Inertia::location(route('Manager.Home.index'));
            }
            $response = $this->service->cadastrarSlide($tipo, $request);

            if ($response) {
                return to_route('Manager.Home.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!']);
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
            return Inertia::location(route('Manager.Home.index'));
        }

        [$slideData, $idioma, $idiomas] = $this->service->editarSlide($id);

        return Inertia::render('Manager/Slides/editar', [
            'idiomas' => $idiomas,
            'idioma' => $idioma,
            'slide' => $slideData
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function atualizar(SlideRequest $request, $id)
    {
        if ($request->ajax()) {
            $response = $this->service->atualizarSlide($request, $id);

            return $response
                ? to_route('Manager.Home.index')->with('message', ['type' => 'success', 'msg' => 'Registro salvo com sucesso!'])
                : to_route('Manager.Home.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações.']);
        }
        return to_route('Manager.Home.index')->with('message', ['type' => 'error', 'msg' => 'Não foi possível salvar as informações. Tente novamente mais tarde.']);
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

            $exclusao = Slide::query()
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
     * @param  int  $id
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

    /**
     * Download the file of the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function baixarVideo($id, $video)
    {
        if (!$id || !$video || !in_array($video, ['desktop', 'mobile'])) {
            return redirect()->route('Manager.Home.index');
        }

        [$caminho, $extensao] = $this->service->baixarVideo($id, $video);

        return $caminho ?
            response()->download($caminho, 'Vídeo ' . $video . '.' . $extensao)
            : redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Registros não reordenados, tente novamente mais tarde!']);
    }
}
