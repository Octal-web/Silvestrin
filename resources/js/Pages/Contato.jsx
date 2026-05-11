import { usePage } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { ContactData } from '@/Components/ContactData';
import { ContactForm } from '@/Components/ContactForm';

const Page = () => {
    const { dadosGerais, conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <ContactData data={dadosGerais} content={conteudos[0]} />

            <ContactForm content={conteudos[1]} />
        </DefaultLayout>
    );
};

export default Page;
