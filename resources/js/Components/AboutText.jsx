import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LetterReveal from './LetterReveal';
import { VideoPlayer } from './VideoPlayer';

gsap.registerPlugin(ScrollTrigger);

export const AboutText = ({ content, video }) => {
    const bgRef = useRef(null);
    const leftImageRef = useRef(null);

    useEffect(() => { 
        if (!bgRef.current || !leftImageRef.current ) return;

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
    }, []);

    const partesTitulo = content.texto ? content.titulo.split(",") : [];
    const partesSubtitulo = content.texto ? content.subtitulo.split(":") : [];
    
    return (
        <section
            ref={bgRef}
            className="relative w-full sm:bg-[length:170%] bg-[60%] xl:bg-[length:100%]"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="min-h-[calc(100vh_-_110px)]">
                <div className="container max-w-medium">
                    <div className="py-24">
                        {partesTitulo.map((parte, i) => (
                            <LetterReveal key={i} className="font-secondary text-primary text-center text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] -mt-2 uppercase" text={parte.trim()} element="h1" />
                        ))}
                        
                        <div className="text-xl 2xl:text-2xl text-center [&_p_+_p]:mt-0 mt-4 border-b border-gray-200 pb-4">
                            {partesSubtitulo.map((parte, i) => (
                                <p key={i} className={i !== 0 ? 'font-bold' : ''}>{parte}</p>
                            ))}
                        </div>

                        <div className="text-xs md:text-sm 2xl:text-base text-gray-800 sm:text-custom-gray text-center mt-10 2xl:mt-12 2xl:pt-12" dangerouslySetInnerHTML={{ __html: content.texto.replace(/\n/g, "<br />"), }} /> 
                    </div>
                </div>
            </div>

            <div className="mt-1 2xl:mt-20 -mb-[20%]">
                <div className="container max-w-large">
                    <VideoPlayer src={video} classList={['sm:max-w-[78vw]', 'mx-auto', 'w-full', 'aspect-video', 'rounded-t-2xl']} autoplay={false} />
                </div>
            </div>

            <img
                ref={leftImageRef}
                src={content.imagem_mobile}
                className="absolute w-40 md:w-50 2xl:w-80 -left-20 drop-shadow-lg z-[1]"
            />

            <div className='bg-primary pt-[20%]'/>
        </section>
    );
}; 