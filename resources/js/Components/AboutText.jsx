import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LetterReveal from './LetterReveal';
import { VideoPlayer } from './VideoPlayer';

gsap.registerPlugin(ScrollTrigger);

export const AboutText = ({ content, video }) => {
    const bgRef = useRef(null);
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);

    useEffect(() => { 
        if (!bgRef.current || !leftImageRef.current || !rightImageRef.current) return;

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
        
        gsap.fromTo(
            leftImageRef.current,
            { 
                bottom: "10%",
                x: "0%"
            },
            {
                bottom: "6%",
                x: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(leftImageRef.current, 
        {
            rotation: -70
        },
        {
            rotation: -60,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });  

        gsap.fromTo(rightImageRef.current, 
        {
            rotation: -150
        },
        {
            rotation: -160,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });        
    }, []);

    const partesTitulo = content.texto ? content.titulo.split(",") : [];
    const partesSubtitulo = content.texto ? content.subtitulo.split(":") : [];
    
    return (
        <section
            ref={bgRef}
            className="relative w-full max-[430px]:bg-[length:auto_120%] max-[570px]:bg-[length:200%] sm:bg-[length:170%] bg-[60%] xl:bg-[length:100%]"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="min-h-[calc(100vh_-_110px)]">
                <div className="container max-w-medium">
                    <div className="py-24">
                        {partesTitulo.map((parte, i) => (
                            <LetterReveal key={i} className="font-secondary text-primary text-center text-7xl font-black leading-[1.2] uppercase -mt-2" text={parte.trim()} element="h1" />
                        ))}
                        
                        <div className="text-2xl text-center [&_p_+_p]:mt-0 mt-4">
                            {partesSubtitulo.map((parte, i) => (
                                <p key={i} className={i !== 0 ? 'font-bold' : ''}>{parte}</p>
                            ))}
                        </div>

                        <div className="text-neutral-600 text-center mt-12 pt-12 border-t" dangerouslySetInnerHTML={{ __html: content.texto }} /> 
                    </div>
                </div>
            </div>

            <div className="mt-20 -mb-[20%]">
                <div className="container max-w-large">
                    <VideoPlayer src={video} classList={['sm:max-w-[78vw]', 'mx-auto', 'w-full', 'aspect-video']} autoplay={false} />
                </div>
            </div>

            <img
                ref={leftImageRef}
                src={content.imagem_mobile}
                className="absolute w-80 -left-20 drop-shadow-lg z-[1]"
            />

            <img
                ref={rightImageRef}
                src={content.imagem_mobile}
                className="absolute -right-20 -bottom-[10%] drop-shadow-lg z-[2]"
            />
        </section>
    );
};