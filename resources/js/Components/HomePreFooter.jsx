import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const HomePreFooter = ({ content }) => {
    const bgRef = useRef(null);

    useEffect(() => { 
        gsap.fromTo(bgRef.current, 
        {
            backgroundPositionY: '100%',
        },
        {
            backgroundPositionY: '0%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: bgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }, []);

    const linhas = content.texto ? content.texto.split("\n") : [];
    
    return (
        <section
            ref={bgRef}
            className="relative w-full h-[300px] 2xl:h-[422px] max-[430px]:bg-[length:auto_120%] max-[570px]:bg-[length:200%] sm:bg-[length:170%] bg-[60%] xl:bg-[length:100%] rounded-t-3xl"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="absolute top-0 left-0 bottom-0 w-2/3 bg-gradient-to-r from-black to-transparent opacity-50 rounded-t-3xl" />
            <div className="container max-w-large h-full">
                <div className="flex h-full justify-center flex-col">
                    {linhas.map((linha, index) => (
                        <LetterReveal key={index} className="font-secondary text-white text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight" text={linha} element="h2" />
                    ))}
                </div>
            </div>
        </section>
    );
};