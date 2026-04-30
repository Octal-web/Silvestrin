import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useId, useRef } from "react";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const ContactData = ({ data, content }) => {
    const id = useId();
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { 
                top: "30%",
                x: "50%",
                scaleX: -1,
                scaleY: -1,
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

    const emails = data.emails.split("\n").map((line) => {
        const [label, value] = line.split(":").map((s) => s.trim());
        return { label, value };
    });

    const filiais = data.filiais.split("\r\n\r\n").map((bloco) => {
        const lines = bloco.split("\r\n");

        const title = lines[0];

        const phoneLine = lines.find((l) => l.includes("Fone"));

        const address = lines
            .filter((l) => l !== lines[0] && l !== phoneLine)
            .join("\n");

        return {
            label: title,
            value: address,
            phoneLine,
        };
    });

    return (
        <section className="relative z-[1]" ref={sectionRef}>
            <img
                ref={imageRef}
                src={content[1].imagem}
                className="hidden sm:block absolute max-h-[7%] z-10 md:max-h-[17%] 2xl:max-h-[78%] right-0 drop-shadow-lg"
                style={{ top: '0%' }}
            />
            <div className="container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Reveal className="py-10 lg:py-20">
                        <LetterReveal
                            className="font-secondary text-primary text-4xl md:text-5xl 2xl:text-6xl font-black leading-tight max-w-[700px] mb-10 uppercase"
                            text={content[0].titulo}
                            element="h1"
                        />
                        <ul className="max-w-[231px] text-custom-gray">
                            <li className="text-xs lg:text-sm font-light leading-tight mb-3">
                                <span className="block font-bold">
                                    Silvestrin Frutas - Matriz
                                </span>
                                {data.endereco} - CEP {data.cep}
                            </li>

                            <li>
                                <p className="leading-tight font-bold text-xs lg:text-sm">
                                    Fone: {data.telefone}
                                </p>
                            </li>
                        </ul>

                        <div className="max-w-[650px]">
                            <div className="bg-primary rounded-full px-5 py-1 w-fit text-white font-bold mt-16 md:mt-20 mb-6 text-sm md:text-base">
                                Outras Unidades:
                            </div>
                            <ul className="grid grid-cols-2 gap-y-6 gap-x-6 md:gap-y-12 md:gap-x-15 text-custom-gray text-xs lg:text-sm">
                                {filiais.map((item, index) => (
                                    <li key={index} className="flex flex-col">
                                        <span className="leading-tight font-bold mb-1">
                                            {item.label}
                                        </span>
                                        <span className="font-light">
                                            {item.value
                                                .split("\n")
                                                .map((linha, i) => (
                                                    <p
                                                        key={i}
                                                        className="-mt-1"
                                                    >
                                                        {linha}
                                                    </p>
                                                ))}
                                        </span>
                                        <span className="leading-tight font-bold mt-3">
                                            {item.phoneLine}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-custom-gray text-xs lg:text-sm font-light leading-tight mt-10 md:mt-14">
                            <ul className="flex max-sm:flex-wrap gap-4 text-custom-gray">
                                {emails.slice(0, 2).map((item, index) => (
                                    <li key={index}>
                                        <div className="leading-tight font-bold">
                                            {item.label}
                                        </div>
                                        <div className="font-light">
                                            {item.value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal
                        className="hidden sm:block absolute top-30 right-0 sm:w-[calc(50%_+_5em)] sm:-right-10 sm:-top-10 sm:-bottom-10 sm:max-w-[1060px]"
                        direction="right"
                    >
                        <div>
                            <svg
                                className="absolute w-0 h-auto"
                                viewBox="0 0 1000 1000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <clipPath
                                        id={`custom-shape-${id}`}
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path
                                            d="M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7"
                                            transform="scale(0.00105, 0.0014)"
                                        >
                                            <animate
                                                attributeName="d"
                                                dur="30s"
                                                repeatCount="indefinite"
                                                values="
                                                M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7;M928.4,259.7c0,229.6-207.8,426.8-464.2,426.8S0,489.3,0,259.7c0-200.9,223.2-136,389.1-181.5c4.1-1.1,8.1-2.3,12.4-3.6c10.8-3.3,21.3-7,31.3-11.1c9.2-3.8,18.1-7.8,26.6-12.1C675.2-58,928.4,6.9,928.4,248.7;M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7"
                                                keyTimes="0;0.5;1"
                                                calcMode="spline"
                                                keySplines="0 0 0.58 1;0 0 0.58 1"
                                            />
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div
                                className="w-full"
                                style={{ clipPath: `url(#custom-shape-${id})` }}
                            >
                                <img
                                    src={content[0].imagem}
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
