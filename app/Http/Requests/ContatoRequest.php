<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContatoRequest extends FormRequest
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
            'nome' => 'required',
            'email' => 'required|email',
            'telefone' => 'required|celular_com_ddd',
            'mensagem' => 'required',
            'politica' => 'required|accepted',
            'assunto'  => 'required',
            'area'  => 'required',
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
            'nome.required' => __('default.nome.required'),
            'email.required' => __('default.email.required'),
            'email.email' => __('default.email.email'),
            'telefone.required' => __('default.telefone.required'),
            'telefone.celular_com_ddd' => __('default.telefone.celular_com_ddd'),
            'mensagem.required'  => __('default.mensagem.required'),
            'politica.required' => __('default.politica.required'),
            'politica.accepted' => __('default.politica.accepted'),
            'assunto.required'  => __('default.assunto.required'),
            'area.required'  => __('default.area.required'),
        ];
    }
}
