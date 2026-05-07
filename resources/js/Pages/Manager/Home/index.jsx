import { usePage } from "@inertiajs/react";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { BlockContent } from "@/Components/Manager/BlockContent";
import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import { FormContent } from "@/Components/Manager/FormContent";
import { GeneralData } from "@/Components/Manager/GeneralData";
import { PageSettings } from "@/Components/Manager/PageSettings";
import AdminLayout from "@/Layouts/AdminLayout";

const Page = () => {
    // Content
    const { pagina, conteudos, idioma, idiomas, slides, valores } =
        usePage().props;

    const breadcrumbItems = [
        // { label: 'Home', link: 'Home.index' },
        // { label: 'Projects', link: 'Home.index' },
    ];

    const contentSlides = {
        nome: ["Slides", "slide"],
        controller: "Slides",
        imagens: false,
        imgClass: "",
        editavel: true,
        conteudos: slides,
        addParametros: ["imagem", "video"],
    };

    const contentValores = {
        nome: ["Valores", "valor"],
        controller: "Valores",
        imagens: true,
        imgClass: "",
        editavel: true,
        conteudos: valores,
    };

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faHome}
                items={breadcrumbItems}
                current="Home"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />
            <PageSettings page={pagina} idioma={idioma.codigo} />

            <GeneralData />

            <BlockContent content={contentSlides} />

            <FormContent
                content={conteudos[0]}
                full={true}
                idioma={idioma.codigo}
            />

            <BlockContent content={contentValores} />

            <FormContent
                content={conteudos[1]}
                full={true}
                idioma={idioma.codigo}
            />

            <div className="grid lg:gap-x-4 lg:grid-cols-2 2xl:grid-cols-4">
                <FormContent
                    content={conteudos[2]}
                    full={false}
                    idioma={idioma.codigo}
                />

                <FormContent
                    content={conteudos[3]}
                    full={false}
                    idioma={idioma.codigo}
                />

                <FormContent
                    content={conteudos[4]}
                    full={false}
                    idioma={idioma.codigo}
                />
                <FormContent
                    content={conteudos[5]}
                    full={false}
                    idioma={idioma.codigo}
                />
            </div>

            <FormContent
                content={conteudos[12]}
                full={true}
                idioma={idioma.codigo}
            />

            <FormContent
                content={conteudos[11]}
                full={true}
                idioma={idioma.codigo}
            />
        </AdminLayout>
    );
};

export default Page;
