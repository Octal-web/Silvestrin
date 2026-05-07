import { usePage } from "@inertiajs/react";

import { BlockContent } from "@/Components/Manager/BlockContent";
import { FormContent } from "@/Components/Manager/FormContent";
import AdminLayout from "@/Layouts/AdminLayout";

const Page = () => {
    const { conteudos, idioma, parcerias } = usePage().props;

    const contentPartnerships = {
        nome: ["Parcerias", "parceria"],
        controller: "Parcerias",
        imagens: true,
        imgClass: "",
        editavel: true,
        conteudos: parcerias,
    };

    return (
        <AdminLayout>
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
