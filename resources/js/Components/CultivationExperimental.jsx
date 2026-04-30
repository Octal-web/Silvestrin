import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const CultivationExperimental = ({ content }) => {
    const partesTitulo = content[0].titulo.split("\r\n");
    const bgRef = useRef(null);
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);

    useEffect(() => {
        if (!bgRef.current || !leftImageRef.current || !rightImageRef.current)
            return;

        gsap.fromTo(
            leftImageRef.current,
            {
                top: "15%",
                x: "0%",
            },
            {
                bottom: "6%",
                x: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            },
        );

        gsap.fromTo(
            rightImageRef.current,
            {
                rotation: 100,
            },
            {
                rotation: 110,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );

        gsap.fromTo(
            leftImageRef.current,
            {
                rotation: -70,
            },
            {
                rotation: -60,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section ref={bgRef} className="pt-10 md:pt-20 xl:pt-64 relative">
            <img
                ref={leftImageRef}
                src="/content/display/a9b9dbdca63c73157be10aa0d9eb0b41.png"
                className="hidden sm:block absolute w-40 md:w-50 2xl:w-80 sm:-left-20 md:-left-30 drop-shadow-lg z-[1]"
            />

            <img
                ref={rightImageRef}
                src="/content/display/abf043ef9b36c503f36790391013db89.png"
                className="hidden sm:block absolute max-h-[36%] lg:max-h-[70%] 2xl:max-h-[150%] -right-[20%] lg:-right-[24%] drop-shadow-lg top-[46%] lg:top-[12%] 2xl:top-[2%] z-10"
            />

            <div className="container max-w-large">
                <div className="2xl:ml-20">
                    {partesTitulo.map((parte, i) => (
                        <LetterReveal
                            key={i}
                            className={`font-secondary ${i === 0 ? "text-primary" : "text-secondary"} max-w-[914px] text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] uppercase`}
                            text={parte.trim()}
                            element="h1"
                        />
                    ))}
                    <div className="text-xl md:text-2xl 2xl:text-3xl max-w-[364px] -mt-10">
                        <p>{content[0].subtitulo}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 items-center md:justify-between gap-10 lg:gap-0 pt-8 2xl:container">
                    <Reveal direction="left">
                        <div className="lg:max-w-[540px]">
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight text-start uppercase"
                                text={content[1].titulo}
                                element="h2"
                            />
                            <div
                                className=" text-sm 2xl:text-base text-start text-custom-gray lg:text-balance mt-5"
                                dangerouslySetInnerHTML={{
                                    __html: content[1].texto,
                                }}
                            />
                        </div>
                    </Reveal>
                    <Reveal direction="right">
                        <img
                            src={content[1].imagem}
                            className="md:h-[450px] 2xl:h-[680px] md:w-[635px] 2xl:w-[726px] object-cover rounded-3xl mx-auto"
                            alt={content[1].titulo}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
