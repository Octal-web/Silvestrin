import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LetterReveal from "./LetterReveal";

export const ProductsBanner = ({ content }) => {
    const [contentBanner, setContentBanner] = useState(content[0]);
    const productsBgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            productsBgRef.current,
            {
                backgroundPositionY: "100%",
            },
            {
                backgroundPositionY: "0%",
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: productsBgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            },
        );
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const category = urlParams.get("categoria");
        const partner = urlParams.get("parceiro");
        const marcaUrl = urlParams.get("marca");

        let selected;

        if (partner || marcaUrl === "todas-parceiras") {
            selected = content[1];
        } else if (category) {
            selected = content[2];
        } else {
            selected = content[0];
        }

        if (selected) {
            setContentBanner(selected);
        }
    }, [content]);

    return (
        <section
            ref={productsBgRef}
            className="relative w-full h-[195px] -mt-11 sm:-mt-15 md:-mt-10 lg:mt-0 bg-cover"
            style={{
                backgroundImage: `url(${contentBanner.imagem})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="h-full container max-w-large">
                <div className="relative h-full">
                    <div className="absolute flex items-center left-0 right-0 h-full">
                        <LetterReveal
                            className="font-secondary text-5xl md:text-6xl 2xl:text-7xl text-white font-black"
                            text={contentBanner.titulo}
                            element="h1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
