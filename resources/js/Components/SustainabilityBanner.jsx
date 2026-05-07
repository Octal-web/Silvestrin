import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterReveal from "./LetterReveal";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityBanner = ({ content }) => {
    const partesTitulo = content.texto ? content.titulo.split(/ (.+)/) : [];
    const partesSubtitulo = content.texto
        ? content.subtitulo.split("\r\n\r\n")
        : [];
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                rotation: 10,
                scaleX: -1,
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
        <section
            ref={sectionRef}
            className="relative bg-no-repeat bg-cover min-w-screen h-fit lg:h-[947.8px] -mt-16 md:-mt-10 lg:-mt-3"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <img
                ref={imageRef}
                src="/content/display/6c849a1449c4a626dce6a920ca7fc51f.png"
                className="hidden md:block absolute max-h-[30%] lg:max-h-[50%] 2xl:max-h-[78%] -right-[10%] -bottom-10 lg:-right-[20%] lg:-bottom-[20%] drop-shadow-lg 2xl:-bottom-[450px]"
            />
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="min-h-[calc(100vh_-_110px)]">
                <div className="container max-w-medium ">
                    <div className="py-40">
                        {partesTitulo.map((parte, i) => (
                            <LetterReveal
                                key={i}
                                className={`font-secondary ${i === 0 ? "text-primary" : "text-secondary"} text-center text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] uppercase`}
                                text={parte.trim()}
                                element="h1"
                            />
                        ))}

                        <div className="text-lg md:text-xl 2xl:text-2xl mx-auto text-center [&_p_+_p]:mt-0 mt-4 border-b pb-10 2xl:pb-16">
                            {partesSubtitulo.map((parte, i) => (
                                <p className="max-w-[623px] mx-auto" key={i}>{parte}</p>
                            ))}
                        </div>

                        <div
                            className="text-sm xl:text-base text-black sm:text-custom-gray text-center mt-10 2xl:mt-12 [&_p_+_p]:mt-0 max-w-[913px] mx-auto"
                            dangerouslySetInnerHTML={{ __html: content.texto }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
