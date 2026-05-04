<?php

namespace App\Services;

class ArquivoService
{
    /**
     * Save the arquivo in public path
     * 
     * @param object $arquivo
     * @param string $caminho
     * @param string $nome
     */
    public function salvar($arquivo, $caminho, $nome)
    {
        $arquivo->move(public_path($caminho), $nome);
    }

    /**
     * Generate random name
     * 
     * @param object $arquivo
     * @return string
     */
    public function gerarNome($arquivo)
    {
        return md5(uniqid((string) rand(), true)) . '.' . strtolower($arquivo->extension());
    }
}
