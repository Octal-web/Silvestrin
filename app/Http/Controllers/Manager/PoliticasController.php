<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PoliticasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Manager/Politicas/index');
    }
};
