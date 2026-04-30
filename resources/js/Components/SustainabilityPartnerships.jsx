import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

import grape from "../../../public/content/display/6c849a1449c4a626dce6a920ca7fc51f.png";
import sheet from "../../../public/content/display/a9b9dbdca63c73157be10aa0d9eb0b41.png";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityPartnerships = ({ content, partnerships }) => {
    const partesTitulo = content.titulo.split("\r\n");
    const sectionRef = useRef(null);
    const startImageRef = useRef(null);
    const endImageRef = useRef(null);

    useEffect(() => {
        if (
            !sectionRef.current ||
            !startImageRef.current ||
            !endImageRef.current
        )
            return;

        gsap.fromTo(
            startImageRef.current,
            {
                rotation: -34,
            },
            {
                rotation: -40,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );

        gsap.fromTo(
            endImageRef.current,
            {
                rotation: 20,
                scaleX: 1,
            },
            {
                rotation: 26,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section className="mt-30 2xl:mt-60 mb-20">
            <div className="container max-w-large">
                {partesTitulo.map((parte, index) => (
                    <LetterReveal
                        key={index}
                        className="font-secondary text-[var(--title-partnerships)] text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight xl:max-w-[674px] text-center md:text-start uppercase"
                        style={{ "--title-partnerships": partnerships[0].cor }}
                        text={parte.trim()}
                        element="h2"
                    />
                ))}
            </div>
            {partnerships.map((item, index) => (
                <div
                    key={index}
                    ref={sectionRef}
                    className={`relative ${!item.cor && "bg-primary"}`}
                >
                    {index === 1 && !item.cor && (
                        <img
                            ref={startImageRef}
                            src={sheet}
                            className="hidden md:block absolute max-h-[16%] lg:max-h-[30%] 2xl:max-h-[48%] -left-30 lg:-left-32 2xl:-left-60 drop-shadow-lg z-10"
                        />
                    )}

                    {index === 2 && (
                        <img
                            ref={endImageRef}
                            src={grape}
                            className="hidden md:block absolute max-h-[25%] lg:max-h-[50%] 2xl:max-h-[78%] -right-[10%] lg:-right-[8%] 2xl:-right-[12%] z-10 -top-20 lg:-top-30 2xl:-top-60"
                        />
                    )}
                    <div className="2xl:container 2xl:max-w-large">
                        <div
                            className={`flex ${index % 2 === 1 ? "flex-col-reverse" : "flex-col"} px-[5%] lg:px-0 py-10 2xl:py-20 text-center lg:text-start justify-center lg:grid lg:grid-cols-2 gap-10 xl:gap-24 items-center`}
                        >
                            <Reveal
                                direction={`${index % 2 === 1 ? "right" : "left"}`}
                                className={` 2xl:px-0 ${index % 2 === 1 ? "lg:order-1 mr-auto lg:pr-[11%]" : "max-lg:order-1 lg:ml-auto lg:pl-[11%]"}`}
                            >
                                {item.logo && (
                                    <img
                                        src={item.logo}
                                        className="w-50 mx-auto lg:mx-0 mb-4 2xl:mb-8"
                                    />
                                )}

                                <LetterReveal
                                    style={{
                                        "--item-cor": item.cor,
                                    }}
                                    className={`xl:max-w-[737px] font-secondary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight uppercase ${item.cor ? "text-[var(--item-cor)]" : "text-white"}`}
                                    text={item.titulo}
                                    element="h2"
                                />
                                {item.subtitulo && (
                                    <div
                                        className={`xl:max-w-[400px] text-xl md:text-2xl 2xl:text-3xl py-7 2xl:py-10 ${item.cor ? "text-black" : "text-white"}`}
                                    >
                                        <p>{item.subtitulo}</p>
                                    </div>
                                )}
                                <div
                                    className={`text-sm 2xl:text-base ${!item.subtitulo && "pt-7 2xl:pt-10"} ${item.cor ? "text-custom-gray" : "text-white"} lg:text-balance`}
                                    dangerouslySetInnerHTML={{
                                        __html: item.texto,
                                    }}
                                />
                            </Reveal>
                            <Reveal
                                className={`${index % 2 === 1 ? "" : "ml-auto"}`}
                                direction={`${index % 2 === 1 ? "left" : "right"}`}
                            >
                                <div className="mx-auto">
                                    <img
                                        src={item.imagem}
                                        className={`w-full rounded-3xl mt-5 lg:mt-0 ${index % 2 === 1 ? "lg:rounded-l-none lg:rounded-r-3xl" : "lg:rounded-l-3xl lg:rounded-r-none "}`}
                                        alt=""
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
