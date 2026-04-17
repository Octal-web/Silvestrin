import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const TransportBanner = ({ content }) => {
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

    
    return (
        <section
            ref={bgRef}
            className="relative w-full h-[570px] max-[430px]:bg-[length:auto_120%] max-[570px]:bg-[length:200%] sm:bg-[length:170%] bg-[60%] xl:bg-[length:100%]"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
            <div className="container max-w-large h-full">
                <div className="flex h-full justify-center flex-col">
                    <LetterReveal className="font-secondary text-white text-7xl text-center font-black uppercase mb-32" text={content.titulo} element="h1" />
                </div>
            </div>
        </section>
    );
};