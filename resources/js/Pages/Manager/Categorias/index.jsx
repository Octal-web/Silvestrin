import { usePage } from "@inertiajs/react";

import { BlockContent } from "@/Components/Manager/BlockContent";
import { Breadcrumb } from "@/Components/Manager/Breadcrumb";
import AdminLayout from "@/Layouts/AdminLayout";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const { idioma, idiomas, marcas, categorias } = usePage().props;

    const breadcrumbItems = [
        { label: "Produtos", link: "Manager.Produtos.index" },
    ];

    const contentCategorias = {
        nome: ["Categorias", "categoria"],
        controller: "Categorias",
        imagens: false,
        imgClass: "",
        editavel: true,
        conteudos: categorias,
    };

    const contentMarcas = {
        nome: ["Marcas", "marca"],
        controller: "Marcas",
        imagens: true,
        imgClass: "",
        editavel: true,
        conteudos: marcas,
    };

    return (
        <AdminLayout>
            <Breadcrumb
                icon={faInfoCircle}
                items={breadcrumbItems}
                current="Categorias"
                idioma={idioma.codigo}
                idiomas={idiomas}
            />

            <BlockContent content={contentCategorias} />

            <BlockContent content={contentMarcas} />
        </AdminLayout>
    );
};

export default Page;
