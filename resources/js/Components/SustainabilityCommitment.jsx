import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import { useEffect, useRef } from "react";

import sheet from "../../../public/content/display/a9b9dbdca63c73157be10aa0d9eb0b41.png";
import apples from "../../../public/content/display/c618f705552e2f248371f2213642cdf7.png";
import plum from "../../../public/content/display/d851e5a40cf21d2f7c71d0578e8ef29b.png";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityCommitment = ({ content }) => {
    const partesTitulo = content.texto ? content.titulo.split("\r\n") : [];
    const partesSubtitulo = content.texto
        ? content.subtitulo.split("\r\n\r\n")
        : [];

    const sectionRef = useRef(null);
    const startImageRef = useRef(null);
    const endImageRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (
            !sectionRef.current ||
            !startImageRef.current ||
            !endImageRef.current ||
            !imageRef.current
        )
            return;

        gsap.fromTo(
            startImageRef.current,
            {
                rotation: -10,
                scaleX: -1,
            },
            {
                rotation: -16,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );

        gsap.fromTo(
            endImageRef.current,
            {
                rotation: 4,
            },
            {
                rotation: 10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );

        gsap.fromTo(
            imageRef.current,
            {
                rotation: 24,
                scaleX: -1,
                scaleY: -1
            },
            {
                rotation: 30,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section className="pt-[40%] lg:pt-40 xl:pt-60 2xl:pt-80">
            <div ref={sectionRef} className="relative ">
                <img
                    ref={startImageRef}
                    src={plum}
                    className="hidden md:block absolute max-h-[20%] md:max-h-[36%] 2xl:max-h-[48%] -left-30 lg:-left-32 2xl:-left-60 drop-shadow-lg z-10 -top-60 xl:-top-96 2xl:-top-[450px]"
                />
                <img
                    ref={endImageRef}
                    src={apples}
                    className="hidden md:block absolute max-h-[36%] xl:max-h-[58%] 2xl:max-h-[78%] -right-20 xl:-right-44 2xl:-right-72 drop-shadow-lg z-10 -top-60 xl:-top-96 2xl:-top-[480px]"
                />

                <img
                    ref={imageRef}
                    src={sheet}
                    className="hidden md:block absolute max-h-[16%] xl:max-h-[58%] 2xl:max-h-[78%] -right-20 xl:-right-24 2xl:-right-30 drop-shadow-lg z-10 -bottom-20 xl:-bottom-30"
                />

                <div className="container max-w-large">
                    <Reveal direction="top">
                        <div className="text-center mx-auto mt-8">
                            {partesTitulo.map((parte, i) => (
                                <LetterReveal
                                    key={i}
                                    className={`font-secondary ${i === 0 ? " text-secondary" : "text-primary"} text-center text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] uppercase`}
                                    text={parte.trim()}
                                    element="h1"
                                />
                            ))}
                            <div className="text-lg md:text-xl 2xl:text-2xl mx-auto text-center [&_p_+_p]:mt-0 mt-4 max-w-[623px]">
                                {partesSubtitulo.map((parte, i) => (
                                    <p key={i}>{parte}</p>
                                ))}
                            </div>
                            <div
                                className="text-sm 2xl:text-base text-custom-gray text-balance mt-4 mb-6 2xl:my-8 lg:max-w-[682px] mx-auto"
                                dangerouslySetInnerHTML={{
                                    __html: content.texto,
                                }}
                            />
                        </div>
                    </Reveal>
                    <Reveal direction="bottom">
                        <div className="overflow-hidden mx-auto pt-8">
                            <img
                                src={content.imagem}
                                className="w-full max-h-[722px] max-w-[1680px] object-cover rounded-3xl"
                                alt=""
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
