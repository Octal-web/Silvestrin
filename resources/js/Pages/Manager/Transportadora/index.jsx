import { usePage } from "@inertiajs/react";

import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import AdminLayout from "@/Layouts/AdminLayout";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const { conteudos, idioma, idiomas } = usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faTruck}
                items={breadcrumbItems}
                current="Transportadora"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <FormContent
                content={conteudos[0]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[8]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[9]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[6]}
                full={true}
                idioma={idioma.codigo}
            />
            <FormContent
                content={conteudos[7]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[12]}
                full={true}
                idioma={idioma.codigo}
            />
        </AdminLayout>
    );
};

export default Page;
