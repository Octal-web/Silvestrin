import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import LetterReveal from './LetterReveal';
import { Reveal } from './Reveal';
import { VideoPlayer } from './VideoPlayer';

gsap.registerPlugin(ScrollTrigger);

export const HomeSteps = ({ content, steps, video }) => {
    const sectionRef = useRef(null);
    const startImageRef = useRef(null);
    const endImageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !startImageRef.current || !endImageRef.current) return;

        gsap.fromTo(
            startImageRef.current,
            { 
                top: "-10%",
                x: "50%",
                scaleX: -1 
            },
            {
                top: "-10%",
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
        
        gsap.fromTo(
            endImageRef.current,
            { 
                bottom: "10%",
                x: "-40%"
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

        gsap.fromTo(startImageRef.current, 
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
        
        gsap.fromTo(endImageRef.current, 
        {
            rotation: -60
        },
        {
            rotation: -66,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        
    }, []);

    if (!steps.length) return null;

    return (
        <section ref={sectionRef} className="relative bg-primary py-10 lg:pb-2 md:pt-16 xl:pt-24">
            <img
                ref={startImageRef}
                src={content.imagem}
                className="absolute max-h-[7%] md:max-h-[17%] 2xl:max-h-[78%] right-0 drop-shadow-lg"
                style={{ top: '0%' }}
            />
            <div className="relative container max-w-large">
                <LetterReveal className="font-secondary text-white text-5xl md:text-6xl 2xl:text-7xl font-black leading-snug uppercase" text={content.titulo} element="h1" />
                <LetterReveal className="font-secondary text-secondary text-5xl md:text-6xl 2xl:text-7xl uppercase font-black mb-10 lg:mb-16" text={content.subtitulo} element="h1" />
                <div className={`grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6 2xl:mr-16 mb-7 2xl:mb-30 px-5`}>
                    {steps.map((value, index) => (
                        <Reveal
                            key={index}
                            className="flex flex-col lg:pl-10 pb-10 lg:border-l lg:border-gray-300"
                            direction="left"
                            delay={index * 1}
                        >
                            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-2 lg:mb-4">{`0${index + 1}`}</h2>
                            
                            <h3 className="text-xl lg:text-2xl text-secondary font-bold max-w-60 text-balance leading-none mb-6 lg:mb-8">{value.titulo}</h3>
                            <p className="text-sm lg:text-base text-white lg:max-w-72 text-balance">{value.texto}</p>
                        </Reveal>
                    ))}
                </div>

                <div className="relative z-[1]">
                    <VideoPlayer src={video} classList={['sm:max-w-[78vw]', 'mx-auto', 'w-full', 'aspect-video', 'rounded-2xl']} autoplay={false} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[12%] md:h-[16%] lg:h-1/4 bg-white" />
            
            <img
                ref={endImageRef}
                src={content.imagem}
                className="absolute w-40 -left-10 md:w-64 2xl:w-96 lg:-left-20 drop-shadow-lg z-[1]"
            />
        </section>
    );
};
