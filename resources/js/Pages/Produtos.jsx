import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { ProductsBanner } from "@/Components/ProductsBanner";
import { ProductsCategories } from "@/Components/ProductsCategories";
import { ProductsList } from "@/Components/ProductsList";

const Page = () => {
    const { conteudos, marca, todasMarcas, todasCategorias } = usePage().props;
    const [hasChanged, setHasChanged] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (hasChanged) {
            setLoading(true);

            const url = window.location.search;
            const urlParams = new URLSearchParams(url);
            const marcaUrl = urlParams.get("marca");

            const params = {};
            if (marcaUrl) params.marca = marcaUrl;

            router.get(window.location.href, params, {
                preserveState: true,
                preserveScroll: true,
                only: ["marca", "produtos"],
                onSuccess: () => {
                    setLoading(false);
                    setHasChanged(false);
                },
            });
        }
    }, [hasChanged]);

    return (
        <DefaultLayout>
            <ProductsBanner content={conteudos[0]} />

            <div className="md:flex">
                <ProductsCategories
                    brands={todasMarcas}
                    categories={todasCategorias}
                    hasChanged={setHasChanged}
                />
                <ProductsList hasAside={true} brand={marca} loading={loading} />
            </div>
        </DefaultLayout>
    );
};

export default Page;
