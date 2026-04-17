<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InstitucionalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $idioma = inertia()->getShared('idioma');
        
        $tradicaoVideo = rafator('content/files/' . inertia()->getShared('conteudos')[0]['arquivo']);

        return Inertia::render('SobreNos', [
            'tradicaoVideo' => $tradicaoVideo
        ]);
    }
};