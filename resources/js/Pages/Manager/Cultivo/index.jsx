import { usePage } from "@inertiajs/react";

import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import { PageSettings } from "@/Components/Manager/PageSettings";
import AdminLayout from "@/Layouts/AdminLayout";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const { pagina, conteudos, idioma, idiomas } = usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    console.log(conteudos);

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faTrowel}
                items={breadcrumbItems}
                current="Cultivo"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <PageSettings page={pagina} idioma={idioma.codigo} />

            <FormContent
                content={conteudos[1]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[2]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[3]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[4]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[5]}
                full={true}
                idioma={idioma.codigo}
            />

            <div className="grid lg:gap-x-4 lg:grid-cols-2">
                <FormContent
                    content={conteudos[6]}
                    full={false}
                    idioma={idioma.codigo}
                />

                <FormContent
                    content={conteudos[7]}
                    full={false}
                    toolbar={["UlList"]}
                    idioma={idioma.codigo}
                />
            </div>

            <FormContent
                content={conteudos[0]}
                full={true}
                idioma={idioma.codigo}
            />
        </AdminLayout>
    );
};

export default Page;
