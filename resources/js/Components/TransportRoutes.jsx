import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import sheet from "../../../public/content/display/a9b9dbdca63c73157be10aa0d9eb0b41.png";

gsap.registerPlugin(ScrollTrigger);

export const TransportRoutes = ({ content }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                top: "-5%",
                x: "0%",
            },
            {
                top: "-5%",
                x: "0%",
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
                rotation: -40,
            },
            {
                rotation: -46,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-primary text-white pb-10 md:pb-0 min-w-screen"
        >
            <img
                ref={imageRef}
                src={sheet}
                className="absolute max-h-[10%] md:max-h-[26%] 2xl:max-h-[78%] -left-[3rem] md:-left-40 drop-shadow-lg"
                style={{ top: "0%" }}
            />
            <div className="flex flex-col-reverse gap-10 md:gap-10 md:flex-row md:justify-between items-center container max-w-medium min-h-[586px]">
                <Reveal direction="left">
                    <LetterReveal
                        className="font-secondary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight md:max-w-[303px] text-center md:text-start "
                        text={content.titulo}
                        element="h2"
                    />
                    <div
                        className="md:max-w-[41em] md:text-balance mt-10 text-sm 2xl:text-base text-center md:text-start "
                        dangerouslySetInnerHTML={{
                            __html: content.texto,
                        }}
                    />
                </Reveal>

                <Reveal direction="right" className="self-center md:self-end">
                    <img
                        className="h-auto max-h-[300px] md:max-h-full rounded-3xl md:h-[508px] md:rounded-t-3xl md:rounded-b-none object-cover"
                        src={content.imagem}
                        alt={content.titulo}
                    />
                </Reveal>
            </div>
        </section>
    );
};
