import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const HomeCompromise = ({ content }) => {
    const sectionRef = useRef(null);
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !leftImageRef.current || !rightImageRef.current) return;

        gsap.fromTo(
            leftImageRef.current,
            { 
                top: "-80%",
            },
            {
                top: "-70%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
        
        gsap.fromTo(
            rightImageRef.current,
            { 
                bottom: "10%",
                x: "0%"
            },
            {
                bottom: "6%",
                x: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(leftImageRef.current, 
        {
            rotation: 10
        },
        {
            rotation: 12,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        
        gsap.fromTo(rightImageRef.current, 
        {
            rotation: 0
        },
        {
            rotation: 6,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        
    }, []);

    return (
        <section ref={sectionRef} className="relative pb-16 md:py-16 xl:py-24 bg-custom-red">
            <div className="relative container max-w-large">
                <div className="text-center">
                    <LetterReveal className="font-secondary text-white text-5xl font-black leading-tight uppercase mb-2" text={content.titulo} element="h2" />
                    <div className="text-white whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.texto.replace(/\n/g, "<br />"), }} />
                </div>
            </div>

            <img ref={rightImageRef} src={content.imagem} className="absolute -right-40" />
            <img ref={leftImageRef} src={content.imagem_mobile} className="absolute max-w-md -left-40 drop-shadow-2xl"  />
        </section>
    );
};
