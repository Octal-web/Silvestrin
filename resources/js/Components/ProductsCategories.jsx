import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardItem = ({
    title,
    items,
    onClick,
    selected,
    onClickAll,
    isCategory,
    group,
}) => (
    <>
        <h3 className="text-primary md:text-white text-lg lg:text-xl font-semibold mb-1 2xl:mb-2 mt-5 md:mt-0 px-3">
            {title}
        </h3>

        <ul className="space-y-1">
            <li>
                <button
                    onClick={onClickAll}
                    className={`w-full lg:text-left pb-0.5 lg:pb-1 px-3 rounded text-base 2xl:text-lg transition-colors ${
                        selected === `todas-${group}` || selected === "a-granel"
                            ? "underline md:text-white font-bold"
                            : "md:text-white hover:bg-black hover:bg-opacity-10"
                    }`}
                >
                    Todas
                </button>
            </li>

            {items.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() =>
                            isCategory
                                ? onClick(item.slug)
                                : onClick(item.slug, item.parceiro)
                        }
                        className={`w-full lg:text-left pb-0.5 lg:pb-1 px-3 rounded text-base 2xl:text-lg transition-colors ${
                            selected === item.slug
                                ? "underline md:text-white font-bold"
                                : "md:text-white hover:bg-black hover:bg-opacity-10"
                        }`}
                    >
                        {item.nome}
                    </button>
                </li>
            ))}
        </ul>
    </>
);

export const ProductsCategories = ({ brands, categories, hasChanged }) => {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const contentElement = contentRef.current;

        if (!wrapperElement || !contentRef) return;

        const scrollTrigger = ScrollTrigger.create({
            trigger: wrapperElement,
            start: "top top",
            end: "bottom 45%",
            pin: contentElement,
            pinSpacing: false,
        });

        return () => {
            scrollTrigger.kill();
        };
    }, []);

    useEffect(() => {
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

    const handleBrandClick = (brandSlug, isPartner) => {
        setSelectedBrand(brandSlug);
        setShowMobileFilter(false);
        setSelectedCategory("");

        const url = new URL(window.location);

        url.searchParams.set("marca", brandSlug);

        if (isPartner) {
            url.searchParams.set("parceiro", "1");
        } else {
            url.searchParams.delete("parceiro");
        }

        url.searchParams.delete("categoria");
        window.history.pushState({}, "", url);

        hasChanged(true);
    };

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
        setSelectedBrand("");
        setShowMobileFilter(false);

        const url = new URL(window.location);
        url.searchParams.set("categoria", categorySlug);
        url.searchParams.delete("parceiro");
        url.searchParams.delete("marca");
        window.history.pushState({}, "", url);

        hasChanged(true);
    };

    const handleAllBrands = (type) => {
        setSelectedBrand(`todas-${type}`);
        setSelectedCategory("");
        setShowMobileFilter(false);

        const url = new URL(window.location);

        url.searchParams.set("marca", `todas-${type}`);
        url.searchParams.delete("categoria");

        window.history.pushState({}, "", url);
        hasChanged(true);
    };

    const handleAllCategories = () => {
        setSelectedCategory("a-granel");
        setSelectedBrand("");
        setShowMobileFilter(false);

        const url = new URL(window.location);

        url.searchParams.set("categoria", "a-granel");
        url.searchParams.delete("marca");
        url.searchParams.delete("parceiro");

        window.history.pushState({}, "", url);
        hasChanged(true);
    };

    const partners = brands.filter((item) => item.parceiro === 1);
    const others = brands.filter((item) => item.parceiro !== 1);

    return (
        <aside className="lg:bg-neutral-100 container w-fit py-3 lg:py-20 xl:py-32">
            <button
                onClick={() => setShowMobileFilter(true)}
                className={`lg:hidden fixed bottom-6 right-6 z-10 bg-primary text-white rounded-full p-4 shadow-lg ${showMobileFilter && "hidden"}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                    />
                </svg>
            </button>

            {showMobileFilter && (
                <div className="fixed inset-0 bg-neutral-100 z-40 p-6 pt-10   overflow-y-auto md:hidden animate-fade-in-down flex flex-col items-center">
                    <button
                        onClick={() => setShowMobileFilter(false)}
                        className="absolute top-4 right-4 text-neutral-800 text-xl"
                    >
                        ✕
                    </button>
                    <CardItem
                        selected={selectedBrand}
                        items={others}
                        isCategory={false}
                        title="Nossas marcas"
                        onClick={handleBrandClick}
                        onClickAll={() => handleAllBrands("silvestrin")}
                        group="silvestrin"
                    />

                    <CardItem
                        selected={selectedBrand}
                        items={partners}
                        isCategory={false}
                        title="Marcas parceiras"
                        onClick={handleBrandClick}
                        onClickAll={() => handleAllBrands("parceiras")}
                        group="parceiras"
                    />

                    <CardItem
                        selected={selectedCategory}
                        items={categories}
                        isCategory={true}
                        title="Frutas a granel"
                        onClick={handleCategoryClick}
                        onClickAll={handleAllCategories}
                    />
                </div>
            )}

            <div className="lg:mb-[25rem] min-h-80">
                <div
                    ref={wrapperRef}
                    className="w-full lg:w-56 xl:w-80 lg:mr-3 xl:mr-12 mb-8 md:mb-0 max-w-large hidden lg:flex flex-col"
                >
                    <div ref={contentRef}>
                        <div className="bg-primary rounded-3xl px-3 py-3 2xl:px-6 2xl:py-8">
                            <CardItem
                                selected={selectedBrand}
                                items={others}
                                isCategory={false}
                                title="Nossas marcas"
                                onClick={handleBrandClick}
                                onClickAll={() => handleAllBrands("silvestrin")}
                                group="silvestrin"
                            />
                        </div>

                        <div className="bg-custom-green rounded-3xl px-3 py-3 2xl:px-6 2xl:py-8 lg:mt-4 2xl:mt-10">
                            <CardItem
                                selected={selectedBrand}
                                items={partners}
                                isCategory={false}
                                title="Marcas parceiras"
                                onClick={handleBrandClick}
                                onClickAll={() => handleAllBrands("parceiras")}
                                group="parceiras"
                            />
                        </div>

                        <div className="bg-secondary rounded-3xl px-3 py-3 2xl:px-6 2xl:py-8 lg:mt-4 2xl:mt-10">
                            <CardItem
                                selected={selectedCategory}
                                items={categories}
                                title="Frutas a granel"
                                isCategory={true}
                                onClick={handleCategoryClick}
                                onClickAll={handleAllCategories}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
