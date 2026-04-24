import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { Reveal } from "./Reveal";

import kiwi from "../../../public/content/display/abf043ef9b36c503f36790391013db89.png";

gsap.registerPlugin(ScrollTrigger);

export const TransportCertification = ({ certification }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                rotation: -2,
            },
            {
                rotation: -8,
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
            className="relative pb-20 lg:pb-40"
        >
            <img
                ref={imageRef}
                src={kiwi}
                className="hidden sm:block absolute max-h-[55%] md:max-h-[96%] lg:max-h-[110%] 2xl:max-h-[150%] -right-24
                md:-right-40 lg:-right-50 2xl:-right-80 drop-shadow-lg -top-[63%] sm:-top-[50%] md:-top-[75%] 2xl:-top-[100%]"
            />
            <Reveal>
                <img
                    src={certification.logo}
                    className="mx-auto mb-5 2xl:mb-16 mt-16 2xl:mt-28 w-36 lg:w-fit"
                    alt={certification.nome}
                />
            </Reveal>

            <div className="relative container mb-10 lg:mb-20 max-w-6xl">
                <div className="text-center">
                    <div
                        className="whitespace-pre-line text-sm lg:text-base text-custom-gray"
                        dangerouslySetInnerHTML={{
                            __html: certification.descricao,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
