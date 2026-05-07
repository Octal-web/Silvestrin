<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class ConteudoRequest extends FormRequest
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
            'conteudosIdiomas.0.titulo' => 'sometimes|required',
            'conteudosIdiomas.0.subtitulo' => 'sometimes|required',
            'conteudosIdiomas.0.texto' => 'sometimes|required',
            'conteudosIdiomas.0.link' => 'sometimes|required|url',
            'conteudosIdiomas.0.video' => 'sometimes|required|url',
            'conteudosIdiomas.0.arq' => 'sometimes|file|mimes:pdf|max:2048',

            'img' => 'nullable|image|mimes:png,jpg|max:5120',
            'img_mobile' => 'nullable|image|mimes:png,jpg|max:5120',
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
            'conteudosIdiomas.0.titulo.required' => 'Por favor, informe o título.',
            'conteudosIdiomas.0.subtitulo.required' => 'Por favor, informe o subtítulo.',
            'conteudosIdiomas.0.texto.required' => 'Por favor, informe o texto.',
            'conteudosIdiomas.0.link.required' => 'Por favor, informe o link.',
            'conteudosIdiomas.0.link.url' => 'Por favor, informe um link válido.',
            'conteudosIdiomas.0.video.required' => 'Por favor, informe o link do vídeo.',
            'conteudosIdiomas.0.video.url' => 'Por favor, informe um link de vídeo válido.',
            'img.image' => 'Por favor, selecione uma imagem válida.',
            'img.mimes' => 'Os formatos de imagem válidos são: JPG e PNG.',
            'img.max' => 'Por favor, envie um arquivo menor que 5MB.',
            'img_mobile.image' => 'Por favor, selecione uma imagem mobile válida.',
            'img_mobile.mimes' => 'Os formatos de imagem mobile válidos são: JPG e PNG.',
            'img_mobile.max' => 'Por favor, envie um arquivo menor que 5MB.',
            'conteudosIdiomas.0.arq.file' => 'Por favor, selecione um arquivo válido.',
            'conteudosIdiomas.0.arq.mimes' => 'O formato de arquivo permitido é .pdf.',
            'conteudosIdiomas.0.arq.max' => 'O tamanho do arquivo deve ser menor que 2MB.',
        ];
    }
}
