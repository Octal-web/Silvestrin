import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

import apple from "../../../public/content/display/75cf39d846bc48362440c2f4e5ed497d.png";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export const TransportInfra = ({ content }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current ) return;

        gsap.fromTo(
            imageRef.current,
            { 
                top: "-65%",
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
            }
        );

        gsap.fromTo(imageRef.current, 
        {
            rotation: 10
        },
        {
            rotation: 16,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative mt-20 pb-10 lg:pb-0"
        >
            <img
                ref={imageRef}
                src={apple}
                className="hidden md:block absolute max-h-[100%] right-0 drop-shadow-lg"
                style={{ top: '0%' }}
            />
            <div className="container max-w-large  grid grid-cols-1 md:grid-cols-2 h-full gap-24 lg:min-h-[605px]">
                <Reveal direction="left">
                    <div className="relative">
                        <img
                            src={content.imagem}
                            className="absolute -top-40 inset-0 md:w-[740px] md:h-[759px] object-cover rounded-t-3xl w-full max-h-60 md:max-h-[759px]"
                            alt=""
                        />
                    </div>
                </Reveal>

                <Reveal direction="right">
                    <div className="ml-auto max-w-[772px] mt-4 lg:mt-8">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-[1.2] md:max-w-[422px] pt-1.5 text-center md:text-start uppercase"
                            text={content.titulo}
                            element="h2"
                        />
                        <div
                            className="md:max-w-md max-h-64 text-custom-gray text-balance my-8 truncate text-sm 2xl:text-base text-center md:text-start"
                            dangerouslySetInnerHTML={{
                                __html: content.texto,
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
