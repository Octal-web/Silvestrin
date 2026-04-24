import React, { useState } from "react";

export const ProductsCategories = ({ brands, categories, hasChanged }) => {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    React.useEffect(() => {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const marcaUrl = urlParams.get("marca");
        const categoriaUrl = urlParams.get("categoria");

        if (marcaUrl) {
            setSelectedBrand(marcaUrl);
        } else if (categoriaUrl) {
            setSelectedCategory(categoriaUrl);
        }
    }, []);

    const handleBrandClick = (brandSlug) => {
        setSelectedBrand(brandSlug);
        setSelectedCategory("");

        const url = new URL(window.location);
        url.searchParams.set("marca", brandSlug);
        url.searchParams.delete("categoria");
        window.history.pushState({}, "", url);

        hasChanged(true);
    };

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
        setSelectedBrand("");

        const url = new URL(window.location);
        url.searchParams.set("categoria", categorySlug);
        url.searchParams.delete("marca");
        window.history.pushState({}, "", url);

        hasChanged(true);
    };

    React.useEffect(() => {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const pesquisaUrl = urlParams.get("q");

        if (pesquisaUrl) {
            setSearchTerm(pesquisaUrl);
        }
    }, []);

    const partners = brands.filter((item) => item.parceiro === 1);
    const others = brands.filter((item) => item.parceiro !== 1);

    return (
        <aside className="bg-neutral-100 container w-fit py-20">
            <div className="w-full md:w-80 md:mr-12 mb-8 md:mb-0 max-w-large flex flex-col space-y-11">
                <div className="bg-primary rounded-3xl px-6 py-8">
                    <h3 className="text-white text-xl font-semibold mb-2">
                        Nossas marcas
                    </h3>
                    <ul className="space-y-1">
                        {others?.map((brand) => (
                            <li key={brand.id}>
                                <button
                                    onClick={() => handleBrandClick(brand.slug)}
                                    className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                        selectedBrand === brand.slug
                                            ? "underline text-white font-bold"
                                            : "text-white hover:bg-black hover:bg-opacity-10"
                                    }`}
                                >
                                    {brand.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-custom-green rounded-3xl px-6 py-8">
                    <h3 className="text-white text-xl font-semibold mb-2">
                        Marcas parceiras
                    </h3>
                    <ul className="space-y-1">
                        {partners?.map((brand) => (
                            <li key={brand.id}>
                                <button
                                    onClick={() => handleBrandClick(brand.slug)}
                                    className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                        selectedBrand === brand.slug
                                            ? "underline text-white font-bold"
                                            : "text-white hover:bg-black hover:bg-opacity-10"
                                    }`}
                                >
                                    {brand.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-secondary rounded-3xl px-6 py-8">
                    <h3 className="text-white text-xl font-semibold mb-2">
                        Frutas a granel
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedCategory("");
                                    const url = new URL(window.location);
                                    url.searchParams.delete("categoria");
                                    window.history.pushState({}, "", url);
                                    hasChanged(true);
                                }}
                                className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                    selectedCategory === ""
                                        ? "underline text-white font-bold"
                                        : "text-white hover:bg-black hover:bg-opacity-10"
                                }`}
                            >
                                Todas
                            </button>
                        </li>
                        {categories?.map((category) => (
                            <li key={category.id}>
                                <button
                                    onClick={() =>
                                        handleCategoryClick(category.slug)
                                    }
                                    className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                        selectedCategory === category.slug
                                            ? "bg-white bg-opacity-20 text-white font-medium"
                                            : "text-white hover:bg-black hover:bg-opacity-10"
                                    }`}
                                >
                                    {category.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};
