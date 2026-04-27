import { Link } from "@inertiajs/react";

import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const HomeBrands = ({ brands }) => {
    const partners = brands.filter((item) => item.parceiro === 1);
    const others = brands.filter((item) => item.parceiro !== 1);
    return (
        <section className="relative bg-white pb-16 md:py-16 xl:py-30">
            <div className="relative container max-w-large">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <LetterReveal
                        className="font-secondary text-primary text-5xl md:text-6xl 2xl:text-7xl font-black mb-3 mr-auto"
                        text="Linha de produtos"
                        element="h1"
                    />

                    <div className="flex flex-wrap justify-center lg:flex-row gap-6">
                        <Reveal>
                            <Link
                                href={route("Produtos.marcas", {
                                    marca: "todas-silvestrin",
                                })}
                                className="block px-4 2xl:px-8 py-2 gap-2 rounded-full text-primary text-base md:text-lg 2xl:text-xl font-normal ring-1 ring-primary transition-all hover:bg-white hover:text-tertiary hover:ring-tertiary hover:shadow truncate"
                            >
                                Nossas marcas
                            </Link>
                        </Reveal>

                        <Reveal delay={5}>
                            <Link
                                href={route("Produtos.marcas", {
                                    marca: "todas-parceiras",
                                })}
                                className="block px-4 2xl:px-8 py-2 gap-2 rounded-full text-primary text-base md:text-lg 2xl:text-xl font-normal ring-1 ring-primary transition-all hover:bg-white hover:text-tertiary hover:ring-tertiary hover:shadow truncate"
                            >
                                Marcas parceiras
                            </Link>
                        </Reveal>

                        <Reveal delay={10}>
                            <Link
                                href={route("Produtos.marcas", {
                                    categoria: "a-granel",
                                })}
                                className="block px-4 2xl:px-8 py-2 gap-2 rounded-full text-primary text-base md:text-lg 2xl:text-xl font-normal ring-1 ring-primary transition-all hover:bg-white hover:text-tertiary hover:ring-tertiary hover:shadow truncate"
                            >
                                Produtos a granel
                            </Link>
                        </Reveal>
                    </div>
                </div>

                <div className="flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-4 items-center justify-evenly md:justify-center gap-x-8 gap-y-10 2xl:gap-y-20 my-16">
                    {others.map((item, index) => (
                        <Reveal key={index} delay={index}>
                            <Link
                                href={route("Produtos.marcas", {
                                    marca: item.slug,
                                })}
                                className="group"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.nome}
                                    className="w-24 md:w-40 2xl:w-fit m-auto transition-all group-hover:scale-95 group-hover:opacity-90"
                                />
                            </Link>
                        </Reveal>
                    ))}

                    {partners.length > 0 && (
                        <div className="border-2 col-span-4 md:col-span-3 border-primary rounded-3xl p-6 mb-12 relative flex items-center justify-evenly px-10 gap-7 md:gap-40">
                            <span className="absolute bg-primary text-white px-6 py-0.5 rounded-full -top-3.5 left-7">
                                Parceiros
                            </span>

                            {partners.map((item, index) => (
                                <Reveal key={index} delay={index}>
                                    <Link
                                        href={route("Produtos.marcas", {
                                            marca: item.slug,
                                            parceiro: item.parceiro,
                                        })}
                                        className="group"
                                    >
                                        <img
                                            key={index}
                                            src={item.logo}
                                            alt={item.nome}
                                            className="w-24 md:w-40 2xl:w-fit m-auto transition-all group-hover:scale-95 group-hover:opacity-90"
                                        />
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
