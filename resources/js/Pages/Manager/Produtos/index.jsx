import { usePage } from "@inertiajs/react";

import { BlockContent } from "@/Components/Manager/BlockContent";
import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import AdminLayout from "@/Layouts/AdminLayout";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const { conteudos, idioma, idiomas, produtos } = usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    const contentProdutos = {
        nome: ["Produtos", "produto"],
        controller: "Produtos",
        imagens: true,
        imgClass: "max-h-50 min-h-50",
        editavel: true,
        conteudos: produtos,
    };

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faAppleWhole}
                items={breadcrumbItems}
                current="Produtos"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <div className="grid lg:gap-x-4 lg:grid-cols-3">
                <FormContent
                    content={conteudos[0]}
                    full={false}
                    idioma={idioma.codigo}
                />
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

            <BlockContent content={contentProdutos} />
            
        </AdminLayout>
    );
};

export default Page;
