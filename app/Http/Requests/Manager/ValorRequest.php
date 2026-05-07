<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class ValorRequest extends FormRequest
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
            'texto' => 'required',
        ];

        if ($this->hasFile('icone')) {
            $rules['icone'] = 'image|mimes:png,jpg|max:2048';
        } elseif (inertia()->getShared('action') === 'novo') {
            $rules['icone'] = 'required';
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
            'nome.required'  => 'Por favor, informe o título.',
            'texto.required'  => 'Por favor, informe a descrição.',
            'icone.required' => 'Por favor, selecione uma imagem.',
            'icone.image' => 'Por favor, selecione uma imagem válida.',
            'icone.mimes' => 'Os formatos de imagem válidos são: JPG e PNG.',
            'icone.max' => 'Por favor, envie um arquivo menor que 2MB.',
        ];
    }
}
