import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import apple from "../../../public/content/display/75cf39d846bc48362440c2f4e5ed497d.png";

gsap.registerPlugin(ScrollTrigger);

export const CultivationProduction = ({ content }) => {
    const partesTitulo = content[0].texto
        ? content[0].titulo.split("\r\n")
        : [];

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                top: "-33%",
                x: "50%",
            },
            {
                x: "33%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            },
        );

        gsap.fromTo(
            imageRef.current,
            {
                rotation: 10,
            },
            {
                rotation: 16,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section ref={sectionRef} className="pt-16 md:pt-10 xl:pt-16 relative">
            <img
                ref={imageRef}
                src={apple}
                className="hidden lg:block absolute max-h-[80%] 2xl:max-h-[100%] right-0 drop-shadow-lg z-10"
                style={{ top: "0%" }}
            />
            <div className="container max-w-large">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-0">
                    <Reveal direction="left">
                        <div className="text-left mx-auto lg:max-w-[670px] lg:mt-8">
                            {partesTitulo.map((parte, i) => (
                                <LetterReveal
                                    key={i}
                                    className={`font-secondary ${i === 0 ? "text-primary" : "text-secondary"} text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] -mt-2 uppercase pt-1.5`}
                                    text={parte.trim()}
                                    element="h2"
                                />
                            ))}
                            <div className="text-xl md:text-2xl 2xl:text-3xl">
                                <p>{content[0].subtitulo}</p>
                            </div>
                            <div
                                className="text-xs md:text-sm xl:text-base text-custom-gray mt-8 2xl:mt-12 lg:text-balance [&>p:first-of-type]:font-bold [&>p:first-of-type]:pb-7 [&>p:first-of-type]:text-[22px]"
                                dangerouslySetInnerHTML={{
                                    __html: content[0].texto,
                                }}
                            />

                            <div className="flex gap-3 lg:gap-6 mt-11">
                                <img
                                    src={content[1].imagem}
                                    className="bg-primary p-3 lg:p-4 rounded-2xl max-w-14 max-h-14 lg:max-w-20 lg:max-h-20"
                                    alt={content[1].titulo}
                                    aria-hidden="true"
                                />

                                <div>
                                    <LetterReveal
                                        className="text-md md:text-2xl 2xl:text-3xl font-bold"
                                        text={content[1].titulo}
                                        element="h3"
                                    />
                                    <LetterReveal
                                        className="text-md md:text-2xl 2xl:text-3xl font-bold text-primary"
                                        text={content[1].subtitulo}
                                        element="h3"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal direction="right">
                        <img
                            src={content[0].imagem}
                            className="-mt-24 w-screen h-60 lg:h-[950px] 2xl:h-[1077px] lg:w-[635px] 2xl:w-[840px] object-cover rounded-t-3xl mx-auto xl:-mt-40 2xl:-mt-44"
                            alt={content[0].titulo}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
