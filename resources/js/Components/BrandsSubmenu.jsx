import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export const BrandsSubmenu = ({ isMenuOpen, isHeaderVisible, menuRef }) => {
    const { marcasMenu } = usePage().props;
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (isMenuOpen && imagesLoaded === marcasMenu.length) {
            setVisible(true);
            setHeight(containerRef.current.scrollHeight);
        } else if (!isMenuOpen) {
            setHeight(0);
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isMenuOpen, imagesLoaded, marcasMenu.length]);

    useEffect(() => {
        if (isMenuOpen) {
            setVisible(true);
            requestAnimationFrame(() => {
                if (containerRef.current) {
                    setHeight(containerRef.current.scrollHeight);
                }
            });
        } else {
            setHeight(0);
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isMenuOpen]);

    if (!visible && !isMenuOpen) return null;

    const partners = marcasMenu.filter((item) => item.parceiro === 1);
    const others = marcasMenu.filter((item) => item.parceiro !== 1);

    return (
        <div
            ref={menuRef}
            className={`fixed right-1/2 translate-x-1/2 top-[88px] w-screen bg-white shadow-md overflow-hidden -z-[1] transition-[height,transform] duration-300${isHeaderVisible ? "" : " -translate-y-full"}`}
            style={{ height: `${height}px` }}
        >
            <div ref={containerRef} className="grid grid-cols-4 gap-20 xl:gap-10 2xl:container">
                <div className="pl-10 pt-10 col-span-2 ml-[5%]">
                    <h4 className="mb-4 text-sm text-gray-500 font-semibold">
                        Nossas marcas
                    </h4>
                    <div className="relative flex">
                        <div className="flex items-center justify-between w-full gap-5 2xl:gap-0">
                            {others.map((marca, index) => (
                                <Link
                                    key={index}
                                    href={route("Produtos.marcas", {
                                        marca: marca.slug,
                                    })}
                                    className="transition-all hover:scale-110 hover:opacity-80"
                                >
                                    <img
                                        src={marca.logo}
                                        className="max-w-24 max-h-14 2xl:max-w-32 2xl:max-h-16"
                                        onLoad={() =>
                                            setImagesLoaded((prev) => prev + 1)
                                        }
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-10 pl-10 px-5 xl:px-10 2xl:px-20 ml-auto min-w-full z-10 col-span-1 mr-[-12%]">
                    <h4 className="mb-4 text-sm text-gray-500 font-semibold">
                        Marcas parceiras
                    </h4>
                    <div className="flex items-center justify-between gap-5 xl:gap-10 ">
                        {partners.map((marca, index) => (
                            <Link
                                key={index}
                                href={route("Produtos.marcas", {
                                    marca: marca.slug,
                                    parceira: 1
                                })}
                                className="transition-all hover:scale-110 hover:opacity-80"
                            >
                                <img
                                    src={marca.logo}
                                    className="max-w-24 max-h-14 2xl:max-w-32 2xl:max-h-16"
                                    onLoad={() =>
                                        setImagesLoaded((prev) => prev + 1)
                                    }
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <Link
                    href={route("Produtos.marcas", {
                        categoria: "a-granel",
                    })}
                    className="flex flex-col items-center justify-center min-h-[180px] w-full bg-primary transition-all hover:bg-secondary col-span-1 z-20"
                >
                    <h4 className="mt-1.5 font-bold max-w-[108px] text-2xl 2xl:text-3xl text-white">
                        Frutas a granel
                    </h4>
                </Link>
            </div>
        </div>
    );
};
