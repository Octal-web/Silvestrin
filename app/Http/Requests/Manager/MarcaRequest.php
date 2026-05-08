<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class MarcaRequest extends FormRequest
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
            'descricao' => 'nullable',
            'parceiro' => 'nullable',
        ];

        if ($this->hasFile('logo')) {
            $rules['logo'] = 'image|mimes:png,jpg|max:2048';
        } elseif (inertia()->getShared('action') === 'novo') {
            $rules['logo'] = 'required';
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
            'logo.required' => 'Por favor, selecione uma imagem.',
            'logo.image' => 'Por favor, selecione uma imagem válida.',
            'logo.mimes' => 'Os formatos de imagem válidos são: JPG e PNG.',
            'logo.max' => 'Por favor, envie um arquivo menor que 2MB.',
        ];
    }
}
