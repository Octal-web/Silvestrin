import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const HomeRain = ({ content }) => {
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
            rotation: 16
        },
        {
            rotation: 21,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });        
    }, []);

    return (
        <section ref={sectionRef} className="relative pb-16 md:py-16 xl:py-24">
            <div className="relative container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">                    
                    <Reveal direction="right">
                        <div className="ml-20 -translate-x-20 -mt-36 -mb-40">
                            <svg className="absolute w-0 h-auto" viewBox="0 0 803.3 877.9" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="custom-shape-2" clipPathUnits="objectBoundingBox">
                                        <path
                                            d="M239.9,684.8c-11.6-96.9-18.1-115.9-123.2-192.4C5.1,414.1-33.5,269.7,31.9,149.4 C97.7,28.4,246.6-27.1,380.4,12.8C494.6,45.2,504.9,38.4,571.7,15c45.1-15.8,94.7-13.1,137.9,7.4c84.4,40.3,118,137.1,75,216.1 c-10.1,18.6-23.8,35-40.2,48.3c-103.5,87.8-130.5,137.4-64,301.5c22,54.4,20.4,117-10,172.9c-57.2,105.2-194.6,147-306.9,93.4 C291.4,820.2,247.2,754.9,239.9,684.8"
                                            transform="scale(0.001245, 0.001139)"
                                        >
                                            <animate
                                                attributeName="d"
                                                dur="12s"
                                                repeatCount="indefinite"
                                                values="
                                                M239.9,684.8c-11.6-96.9-18.1-115.9-123.2-192.4C5.1,414.1-33.5,269.7,31.9,149.4 C97.7,28.4,246.6-27.1,380.4,12.8C494.6,45.2,504.9,38.4,571.7,15c45.1-15.8,94.7-13.1,137.9,7.4c84.4,40.3,118,137.1,75,216.1 c-10.1,18.6-23.8,35-40.2,48.3c-103.5,87.8-130.5,137.4-64,301.5c22,54.4,20.4,117-10,172.9c-57.2,105.2-194.6,147-306.9,93.4 C291.4,820.2,247.2,754.9,239.9,684.8;
                                                M212.5,681.9c-9.2-87.4-14.4-104.6-98-173.6c-88.7-70.7-148-238.5-82.5-358.8 C97.7,28.4,246.6-27.1,380.4,12.8c114.2,32.4,163.8,22.8,209.2,2c30.7-14,70.1-11.7,102,6.6c62.5,35.8,113.9,145.5,79.3,222.8 c-8.2,18.2-19.2,34.2-32.4,47.2c-83.4,85.9-105.2,134.4-51.5,294.9c17.8,53.2,16.5,114.4-8.1,169.1 c-46.1,102.9-203.1,152.7-315.4,99.1C291.4,820.2,218.3,745.2,212.5,681.9;
                                                M239.9,684.8c-11.6-96.9-18.1-115.9-123.2-192.4C5.1,414.1-33.5,269.7,31.9,149.4 C97.7,28.4,246.6-27.1,380.4,12.8C494.6,45.2,504.9,38.4,571.7,15c45.1-15.8,94.7-13.1,137.9,7.4c84.4,40.3,118,137.1,75,216.1 c-10.1,18.6-23.8,35-40.2,48.3c-103.5,87.8-130.5,137.4-64,301.5c22,54.4,20.4,117-10,172.9c-57.2,105.2-194.6,147-306.9,93.4 C291.4,820.2,247.2,754.9,239.9,684.8"
                                                keySplines="0 0 0.58 1;0 0 0.58 1"
                                            />
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="w-full" style={{ clipPath: 'url(#custom-shape-2)' }}>
                                <img src={content.imagem} className="w-full" alt="" />
                            </div>
                        </div>
                    </Reveal>
                    
                    <Reveal direction="left" className="">
                        <div className="ml-auto max-w-[772px] mt-8">
                            <LetterReveal className="font-secondary text-custom-red text-5xl font-black leading-tight uppercase max-w-[32rem]" text={content.titulo} element="h2" />
                            <div className="max-w-xl text-neutral-600 text-balance my-8" dangerouslySetInnerHTML={{ __html: content.texto }} /> 
                        </div>
                    </Reveal>
                </div>
            </div>

            <img ref={imageRef} src={content.imagem_mobile} alt={content.titulo} className="absolute top-10 right-0 w-60 drop-shadow-2xl" />
        </section>
    );
};
