import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import pear from "../../../public/content/display/911fa8daaaf588bf65154be322d7f04b.png";
import plum from "../../../public/content/display/d851e5a40cf21d2f7c71d0578e8ef29b.png";

gsap.registerPlugin(ScrollTrigger);

export const TransportTechAndSecurity = ({ content }) => {
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
                top: "-10%",
                scaleX: -1,
            },
            {
                top: "-14%",
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
            endImageRef.current,
            {
                top: "-5%",
            },
            {
                top: "-7%",
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
            startImageRef.current,
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
    }, []);

    return (
        <section ref={sectionRef} className="bg-neutral-100 container relative">
            <img
                ref={startImageRef}
                src={pear}
                className="absolute max-h-[20%] md:max-h-[36%] 2xl:max-h-[48%] -left-4 lg:-left-16 2xl:-left-20  drop-shadow-lg z-10"
                style={{ top: "0%" }}
            />

            <img
                ref={endImageRef}
                src={plum}
                className="absolute max-h-[15%] md:max-h-[36%] 2xl:max-h-[58%] -right-10
                lg:-right-20 2xl:-right-44 drop-shadow-lg z-10"
                style={{ top: "0%" }}
            />

            <div className="flex flex-col gap-10 lg:gap-20 md:flex-row md:justify-between items-center container max-w-medium pt-10 pb-32 lg:pt-24 lg:pb-52 relative">
                <Reveal direction="left">
                    <LetterReveal
                        className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight md:max-w-[403px] text-center md:text-start "
                        text={content.titulo}
                        element="h2"
                    />
                    <div
                        className="md:max-w-[520px] text-custom-gray md:text-balance mt-10 text-sm 2xl:text-base text-center md:text-start "
                        dangerouslySetInnerHTML={{
                            __html: content.texto,
                        }}
                    />
                </Reveal>

                <Reveal direction="right">
                    <img
                        className="max-w-[310px] lg:max-w-[640px] lg:h-[494px] lg:w-[740px] rounded-3xl"
                        src={content.imagem}
                        alt={content.titulo}
                    />
                </Reveal>

                <LetterReveal
                    className="font-secondary text-white bg-secondary w-fit round text-3xl md:text-4xl 2xl:text-5xl font-black mb-3 rounded-full py-3 lg:py-5 px-10 lg:px-30 2xl:px-40 absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2"
                    text="Certificação"
                    element="h1"
                />
            </div>
        </section>
    );
};
