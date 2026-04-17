import React, { useState, useEffect } from 'react';
import { usePage, Link, router } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { ProductsBanner } from '@/Components/ProductsBanner';
import { ProductsCategories } from '@/Components/ProductsCategories';
import { ProductsList } from '@/Components/ProductsList';

const Page = () => {
    const { conteudos, marca, todasMarcas, todasCategorias } = usePage().props;
    const [hasChanged, setHasChanged] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (hasChanged) {
            setLoading(true);

            const url = window.location.search;
            const urlParams = new URLSearchParams(url);
            const marcaUrl = urlParams.get('marca');

            const params = {};
            if (marcaUrl) params.marca = marcaUrl;

                router.get(
                    window.location.href,
                    params,
                    {
                        preserveState: true,
                        preserveScroll: true,
                        only: ['marca', 'produtos'],
                        onSuccess: () => {
                            setLoading(false);
                            setHasChanged(false);
                        },
                    },
            );
        }
    }, [hasChanged]);

    return (
        <DefaultLayout>
            <ProductsBanner content={conteudos[0]} />
            <section className="relative mt-10 md:mt-20 mb-20 md:mb-30">
                {!loading && (
                    <div className="absolute right-0 top-0 -bottom-30 w-[70.5%] bg-neutral-100 rounded-t-3xl" />
                )}
                
                <div className="container max-w-large">
                    <div className="md:flex">
                        <ProductsCategories 
                            brands={todasMarcas}
                            categories={todasCategorias}
                            hasChanged={setHasChanged}
                        />
                        <ProductsList hasAside={true} brand={marca} loading={loading} />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Page;