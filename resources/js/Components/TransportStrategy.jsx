import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const TransportStrategy = ({ content }) => {
    const sectionRef = useRef(null);
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);

    useEffect(() => { 
        if (!sectionRef.current || !leftImageRef.current || !rightImageRef.current) return;

        gsap.fromTo(
            leftImageRef.current,
            { 
                top: "-34%",
                x: "0%"
            },
            {
                top: "-29%",
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
        
        gsap.fromTo(
            rightImageRef.current,
            { 
                top: "-24%",
                x: "0%"
            },
            {
                top: "-19%",
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
            rotation: 20
        },
        {
            rotation: 30,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });  

        gsap.fromTo(rightImageRef.current, 
        {
            rotation: 0
        },
        {
            rotation: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });        
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-primary"
        >
            <div className="container max-w-medium">
                <div className="pt-50 pb-24">
                    <h1 className="font-secondary text-white text-center text-7xl font-black leading-[1.2] uppercase -mt-2">{content.titulo}</h1>
                    <h1 className="font-secondary text-secondary text-center text-7xl font-black leading-[1.2] uppercase -mt-2">{content.subtitulo}</h1>                       
                    
                    <div className="text-center text-white max-w-[1145px] mx-auto mt-10" dangerouslySetInnerHTML={{ __html: content.texto.replace(/\n/g, "<br />"), }} /> 
                </div>
            </div>

            <img
                ref={leftImageRef}
                src={content.imagem}
                className="absolute w-80 -left-20 -top-[22%] drop-shadow-lg z-[1]"
            />

            <img
                ref={rightImageRef}
                src={content.imagem_mobile}
                className="absolute w-96 -right-30 -top-[12%] drop-shadow-lg z-[2]"
            />
        </section>
    );
};