import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const AboutStation = ({ content }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { 
                x: "3%"
            },
            {
                x: "20%",
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
            translateY: 0
        },
        {
            translateY: 21,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });        
    }, []);
   
    return (
        <section ref={sectionRef} className="relative md:pt-16 xl:pt-24 z-[1]">
            <div className="relative container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Reveal direction="left" className="">
                        <div className="ml-auto max-w-[772px] mt-8">
                            <LetterReveal className="font-secondary text-primary text-5xl font-black leading-tight max-w-[14.2em] uppercase" text={content.titulo} element="h2" />
                            <div className="max-w-[30em] text-neutral-600 text-balance my-10" dangerouslySetInnerHTML={{ __html: content.texto }} /> 
                        </div>
                    </Reveal>
                    
                    <Reveal direction="right">
                        <div className="-ml-10 -translate-x-20 -mt-[30%] -mb-[22%]">
                            <svg className="absolute w-0 h-auto" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="custom-shape-3" clipPathUnits="objectBoundingBox">
                                        <path
                                            d="M884,261.7c-89.4,113.9-85.5,147.5-50.5,229.4c5.5,12.5,8.4,26,8.5,39.6c0.8,66.9-61.1,133.7-138.1,161.4c-29.1,10.1-56.1,12.4-78.5,7.1c-86.7-18.8-118-24.7-286,110.5c-29.3,24.2-61.6,43.9-95.4,56.1c-67.6,24.9-128.7,12.8-172.5-25.8C27.5,801.8,0.9,737.2,1.6,666.2c0.6-65.8,24.3-125.7,62.5-174h0c118.4-153,111.4-190.3,88.3-285.7c-3-11.9-4.5-24.1-4.4-36.4C148.5,90.9,210.1,21.7,285.5,6c36.4-7.6,69.5-1.2,93.9,15.5c95.4,66.6,127.2,70.8,305.4-4.5c13.9-5.8,28.4-10.1,43.3-12.6c105.6-18,192.2,63.9,193.5,155.5C922.1,197.8,908.1,232.1,884,261.7"
                                            transform="scale(0.001, 0.001)"
                                        >
                                            <animate 
                                                attributeName="d" 
                                                dur="10s" 
                                                repeatCount="indefinite"
                                                values="
                                                    M884,261.7c-89.4,113.9-85.5,147.5-50.5,229.4c5.5,12.5,8.4,26,8.5,39.6c0.8,66.9-61.1,133.7-138.1,161.4c-29.1,10.1-56.1,12.4-78.5,7.1c-86.7-18.8-118-24.7-286,110.5c-29.3,24.2-61.6,43.9-95.4,56.1c-67.6,24.9-128.7,12.8-172.5-25.8C27.5,801.8,0.9,737.2,1.6,666.2c0.6-65.8,24.3-125.7,62.5-174h0c118.4-153,111.4-190.3,88.3-285.7c-3-11.9-4.5-24.1-4.4-36.4C148.5,90.9,210.1,21.7,285.5,6c36.4-7.6,69.5-1.2,93.9,15.5c95.4,66.6,127.2,70.8,305.4-4.5c13.9-5.8,28.4-10.1,43.3-12.6c105.6-18,192.2,63.9,193.5,155.5C922.1,197.8,908.1,232.1,884,261.7;
                                                    M884,261.7c-89.4,113.9-119.5,161.8-72.3,232c7.4,10.7,11.3,22.2,11.4,33.9c1,57.4-42.2,136.7-119.2,164.3c-29.1,10.1-57.5,6.3-78.9,0.7c-82.9-19.8-112.7-26.1-273.3,116.5c-28,25.5-73.9,44.3-107.8,56.5c-67.6,24.9-128.7,12.8-172.5-25.8C27.5,801.8,0.9,737.2,1.6,666.2c0.6-65.8,24.3-125.7,62.5-174h0c118.4-153,111.4-190.3,88.3-285.7c-3-11.9-4.5-24.1-4.4-36.4C148.5,90.9,210.1,21.7,285.5,6c36.4-7.6,79.2,2,101.6,12.7c87.1,42.5,116.1,45.2,278.8-2.9c12.7-3.7,47.4-8.8,62.3-11.4c105.6-18,192.2,63.9,193.5,155.5C922.1,197.8,908.1,232.1,884,261.7;
                                                    M884,261.7c-89.4,113.9-85.5,147.5-50.5,229.4c5.5,12.5,8.4,26,8.5,39.6c0.8,66.9-61.1,133.7-138.1,161.4c-29.1,10.1-56.1,12.4-78.5,7.1c-86.7-18.8-118-24.7-286,110.5c-29.3,24.2-61.6,43.9-95.4,56.1c-67.6,24.9-128.7,12.8-172.5-25.8C27.5,801.8,0.9,737.2,1.6,666.2c0.6-65.8,24.3-125.7,62.5-174h0c118.4-153,111.4-190.3,88.3-285.7c-3-11.9-4.5-24.1-4.4-36.4C148.5,90.9,210.1,21.7,285.5,6c36.4-7.6,69.5-1.2,93.9,15.5c95.4,66.6,127.2,70.8,305.4-4.5c13.9-5.8,28.4-10.1,43.3-12.6c105.6-18,192.2,63.9,193.5,155.5C922.1,197.8,908.1,232.1,884,261.7"
                                                keySplines="0 0 0.58 1;0 0 0.58 1"
                                            />
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div style={{ clipPath: 'url(#custom-shape-3)' }}>
                                <img src={content.imagem} alt={content.titulo} />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            
            <img ref={imageRef} src={content.imagem_mobile} alt={content.titulo} className="absolute -top-[30em] -left-[25em] w-[40em] drop-shadow-2xl" />
        </section>
    );
};
