<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CultivoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tradicaoVideo = rafator('content/files/' . inertia()->getShared('conteudos')[0]['arquivo']);

        return Inertia::render('Cultivo', [
            'tradicaoVideo' => $tradicaoVideo
        ]);
    }
}
