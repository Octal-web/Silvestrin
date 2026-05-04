import { Link, useForm, usePage } from '@inertiajs/react';

import { faArrowLeft, faImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Breadcrumb } from '@/Components/Manager/Breadcrumb';
import { FormGroup } from '@/Components/Manager/Inputs/FormGroup';
import AdminLayout from '@/Layouts/AdminLayout';

const Page = () => {
    const { idioma, idiomas, valor } = usePage().props;

    const { data, setData, post, processing, errors } = useForm(valor);

    const breadcrumbItems = [
        { label: 'Home', link: 'Manager.Home.index' },
        { label: 'Valores', link: 'Manager.Home.index' },
    ];

    const inputItems = [
        [
            {
                titulo: "Título",
                name: "nome",
                tamanho: "col-span-12 lg:col-span-8",
                tipo: "texto",
                max: 120,
            },
        ],
        [
            {
                titulo: "Descrição",
                name: "texto",
                tamanho: "col-span-12 lg:col-span-8",
                tipo: "texto_longo",
                max: 220,
            },
        ],
        [
            {
                titulo: "Icone",
                name: "icone",
                tamanho: "col-span-12 md:col-span-6",
                tipo: "imagem",
                crop: true,
                largura: 72.5,
                altura: 66.5,
            },
        ],
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const idioma_url = new URLSearchParams(window.location.search).get('lang');

        post(route('Manager.Valores.atualizar', {id: valor.id, lang: idioma_url}), {
            preserveScroll: true,
        });
    };

    const onChange = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageCrop = (croppedImage, fileExtenstion, name) => {
        setData(prevData => ({
            ...prevData,
            [name]: croppedImage
        }));
    };
    
    return (
        <AdminLayout>
            <Breadcrumb icon={faImage} items={breadcrumbItems} current="Editar" idioma={idioma.codigo} idiomas={idiomas} id={valor.id} />

            <div className="mb-6 rounded-sm border border-stroke bg-white px-5 py-5 shadow-md">
                <div className="mt-10">
                    <form onSubmit={handleSubmit}>
                        {inputItems.map((group, groupIndex) => (
                            <div key={groupIndex} className="grid grid-cols-12 gap-x-6">
                                {group.map((input, index) => (
                                    <div key={index} className={`w-full ${input.tamanho}`}>
                                        <FormGroup
                                            input={input}
                                            idioma={idioma}
                                            value={data[input.name]}
                                            onChange={onChange}
                                            handleImageCrop={handleImageCrop}
                                        />
                                        {errors[input.name] && <p className="text-sm text-red-500 -mt-5 mb-3">{errors[input.name]}</p>}
                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className="flex items-center justify-end">
                            <Link href={route('Manager.Home.index')} className="flex items-center w-fit rounded-lg border border-red-700 text-red-700 px-3 py-2 mr-3 cursor-pointer transition-all hover:bg-red-100">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                Voltar
                            </Link>

                            <button
                                type="submit"
                                className="block relative w-fit rounded-lg border border-gray-300 px-3 py-2 cursor-pointer transition-all hover:bg-slate-200"
                            >   
                                <FontAwesomeIcon icon={faSave} className="text-slate-700 mr-2" />
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Page;