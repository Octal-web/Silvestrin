import { usePage } from "@inertiajs/react";

import { faFileText } from "@fortawesome/free-solid-svg-icons";

import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import { PageSettings } from "@/Components/Manager/PageSettings";
import AdminLayout from "@/Layouts/AdminLayout";

const Page = () => {
    const { pagina, conteudos, idioma, idiomas } = usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];
    return (
        <AdminLayout>
            <Breadcrumb
                icon={faFileText}
                items={breadcrumbItems}
                current="Política de privacidade"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <PageSettings page={pagina} idioma={idioma.codigo} />

            <FormContent
                content={conteudos[0]}
                full={true}
                toolbar={["Underline"]}
                idioma={idioma.codigo}
            />
        </AdminLayout>
    );
};

export default Page;
