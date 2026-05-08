<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class ProdutoRequest extends FormRequest
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
        $rules = [
            'nome' => 'required',
            'descricao' => 'required',
            'sazonalidade' => 'nullable',
            'marca_id' => 'nullable|exists:marcas,id',
            'categoria_id' => 'nullable|exists:categorias,id',
            'manual' => 'nullable|file|mimes:pdf|max:10240'
        ];

        if ($this->hasFile('imagem')) {
            $rules['imagem'] = 'image|mimes:png,jpg|max:2048';
        } elseif (inertia()->getShared('action') === 'novo') {
            $rules['imagem'] = 'required';
        }

        return $rules;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [
            'nome.required' => 'Por favor, informe o título.',
            'descricao.required' => 'Por favor, informe a descrição.',

            'marca_id.required_without' => 'Por favor, selecione uma marca ou uma categoria.',
            'marca_id.exists' => 'Por favor, selecione uma marca válida.',

            'categoria_id.required_without' => 'Por favor, selecione uma categoria ou uma marca.',
            'categoria_id.exists' => 'Por favor, selecione uma categoria válida.',

            'imagem.required' => 'Por favor, selecione uma imagem.',
            'imagem.image' => 'Por favor, selecione uma imagem válida.',
            'imagem.mimes' => 'Os formatos de imagem válidos são: JPG e PNG.',
            'imagem.max' => 'Por favor, envie um arquivo menor que 2MB.',

            'manual.file' => 'Por favor, selecione um manual válida.',
            'manual.mimes' => 'Os formatos válidos são: PDF.',
            'manual.max' => 'Por favor, envie um arquivo menor que 2MB.',
        ];
    }
}
