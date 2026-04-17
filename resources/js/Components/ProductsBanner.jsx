import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LetterReveal from './LetterReveal';

export const ProductsBanner = ({ content }) => {
    const productsBgRef = useRef(null);

    useEffect(() => {  
        gsap.registerPlugin(ScrollTrigger);     
        gsap.fromTo(productsBgRef.current, 
        {
            backgroundPositionY: '100%',
        },
        {
            backgroundPositionY: '0%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: productsBgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }, []);

    return (
        <section 
            ref={productsBgRef}
            className="relative w-full h-[195px] max-[430px]:bg-[length:auto_120%] max-[570px]:bg-[length:200%] sm:bg-[length:170%] bg-[60%] xl:bg-[length:100%]"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="h-full container max-w-large">
                <div className="relative h-full">
                    <div className="absolute flex items-center left-0 right-0 h-full">
                        <LetterReveal className="font-secondary text-6xl md:text-7xl text-white font-black" text={content.titulo} element="h1" />
                    </div>
                </div>
            </div>
        </section>
    );
};