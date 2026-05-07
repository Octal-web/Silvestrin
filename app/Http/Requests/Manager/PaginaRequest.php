<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class PaginaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'paginasIdiomas.0.titulo' => 'required|max:60',
            'paginasIdiomas.0.descricao' => 'required|max:300',
            'paginasIdiomas.0.titulo_compartilhamento' => 'required|max:60',
            'paginasIdiomas.0.descricao_compartilhamento' => 'required|max:300',
            'img' => 'nullable|image|mimes:png,jpg|max:2048',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [
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
        ];
    }
}
