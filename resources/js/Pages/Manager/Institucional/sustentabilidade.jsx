import { usePage } from "@inertiajs/react";

import { BlockContent } from "@/Components/Manager/BlockContent";
import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import AdminLayout from "@/Layouts/AdminLayout";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const { conteudos, idioma, parcerias, idiomas } = usePage().props;

    const contentPartnerships = {
        nome: ["Parcerias", "parceria"],
        controller: "Parcerias",
        imagens: true,
        imgClass: "",
        editavel: true,
        conteudos: parcerias,
    };

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faLeaf}
                items={breadcrumbItems}
                current="Sustentabilidade"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <FormContent
                content={conteudos[0]}
                full={true}
                idioma={idioma.codigo}
            />

            <div className="grid lg:grid-cols-2 gap-x-6">
                <FormContent
                    content={conteudos[1]}
                    full={false}
                    idioma={idioma.codigo}
                />
                <FormContent
                    content={conteudos[2]}
                    full={false}
                    idioma={idioma.codigo}
                />
            </div>

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

            <BlockContent content={contentPartnerships} />
        </AdminLayout>
    );
};

export default Page;
