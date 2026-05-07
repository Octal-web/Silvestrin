import { usePage } from "@inertiajs/react";

import { FormContent } from "@/Components/Manager/FormContent";
import AdminLayout from "@/Layouts/AdminLayout";

const Page = () => {
    const { conteudos, idioma } = usePage().props;
    return (
        <AdminLayout>
            <FormContent
                content={conteudos[0]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[7]}
                full={true}
                idioma={idioma.codigo}   
            />

            <FormContent
                content={conteudos[6]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[5]}
                full={true}
                idioma={idioma.codigo}
            />
        </AdminLayout>
    );
};

export default Page;
