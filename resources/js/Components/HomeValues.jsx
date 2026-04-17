import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

export const HomeValues = ({ content, values }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { 
                top: "0%",
                y: "0",
                x: "33%"
            },
            {
                top: "100%",
                y: "-100%",
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
        
        gsap.to(imageRef.current, {
            rotation: 3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    if (!values.length) return null;

    const colCount = Math.min(values.length, 6);
    const gridColsClass = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
    }[colCount];

    return (
        <section ref={sectionRef} className="relative bg-neutral-100 pb-16 md:py-16 xl:py-30">
            <img
                ref={imageRef}
                src={content.imagem}
                className="absolute max-h-[78%] right-0 drop-shadow-lg"
                style={{ top: '0%' }}
            />
            <div className="relative container max-w-large">
                <LetterReveal className="font-secondary text-primary text-7xl font-black uppercase mb-3" text={content.titulo} element="h1" />
                <h3 className="text-4xl mb-20">{content.subtitulo}</h3>
                <div className={`grid grid-cols-1 ${gridColsClass} gap-10 md:gap-6 mr-16 px-5`}>
                    {values.map((value, index) => (
                        <Reveal
                            key={index}
                            className={`flex flex-col px-5 ${
                                index !== values.length - 1 ? "md:border-r md:border-gray-300" : ""
                            }`}
                            direction="left"
                            delay={index * 1}
                        >
                            <div className="mb-2 md:mb-5">
                                <img src={value.icone} alt={value.nome} className="" />
                            </div>
                            
                            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4">{value.nome}</h3>
                            <p className="font-light max-w-64 text-balance">{value.texto}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
