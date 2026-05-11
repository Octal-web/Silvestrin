<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class DadosGeraisRequest extends FormRequest
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
            'endereco'  => 'required',
            'cep'  => 'required|formato_cep',
            'telefone' => 'required',
            'emails' => 'required',
            'filiais' => 'required',
            'instagram' => 'nullable|url',
            'facebook' => 'nullable|url',
            'linkedin' => 'nullable|url',
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
            'endereco.required' => 'Por favor, informe o endereço.',
            'cep.required' => 'Por favor, informe o CEP.',
            'cep.formato_cep' => 'Por favor, informe um CEP válido.',
            'telefone.required' => 'Por favor, informe o telefone.',
            'emails.required' => 'Por favor, informe o email.',
            'filiais.required' => 'Por favor, informe as filiais.',
            'instagram.url' => 'Por favor, informe um link de instagram válido.',
            'facebook.url' => 'Por favor, informe um link de facebook válido.',
            'linkedin.url' => 'Por favor, informe um link de linkedin válido.',
        ];
    }
}
