import { usePage } from '@inertiajs/react';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { BlockContent } from '@/Components/Manager/BlockContent';
import { Breadcrumb } from '@/Components/Manager/Breadcrumb';
import { FormContent } from '@/Components/Manager/FormContent';
import { PageSettings } from '@/Components/Manager/PageSettings';
import AdminLayout from '@/Layouts/AdminLayout';

const Page = () => {
    const { pagina, conteudos, idioma, idiomas, contatos } = usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    const contentContacts = {
        nome: ['Contatos', 'contato'],
        controller: 'Contato',
        imagens: false,
        imgClass: '',
        editavel: false,
        conteudos: contatos
    };

    console.log(conteudos)

    return (
        <AdminLayout>
            <Breadcrumb icon={faEnvelope} items={breadcrumbItems} current="Contato" idioma={idioma.codigo} idiomas={idiomas} />
            <PageSettings page={pagina} idioma={idioma.codigo} />
            
            <FormContent content={conteudos[0]} full={true} idioma={idioma.codigo} />

            <BlockContent content={contentContacts} />

        </AdminLayout>
    );
};

export default Page;