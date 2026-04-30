import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";

import kiwi from "../../../public/content/display/75201cafed6e11cd757266eb08f6c330.png";
import sheet from "../../../public/content/display/a9b9dbdca63c73157be10aa0d9eb0b41.png";

gsap.registerPlugin(ScrollTrigger);

export const CultivationAnalysis = ({ content, video }) => {
    const bgRef = useRef(null);
    const rightImageRef = useRef(null);
    const leftImageRef = useRef(null);

    useEffect(() => {
        if (!bgRef.current || !leftImageRef.current || !rightImageRef.current)
            return;

        gsap.fromTo(
            leftImageRef.current,
            {
                top: "55%",
                x: "0%",
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
            },
        );

        gsap.fromTo(
            rightImageRef.current,
            {
                rotation: 0,
            },
            {
                rotation: 10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );

        gsap.fromTo(
            leftImageRef.current,
            {
                rotation: -70,
            },
            {
                rotation: -60,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section className="pt-10 md:pt-20 xl:pt-36">
            <div className="container max-w-large">
                <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-0 pt-8 2xl:container">
                    <Reveal direction="left">
                        <img
                            src={content[0].imagem}
                            className="w-screen object-cover rounded-t-3xl h-60 md:h-[450px] 2xl:h-[739px] md:w-[635px] 2xl:w-[730px]"
                            alt={content[0].title}
                        />
                    </Reveal>
                    <Reveal direction="right">
                        <div className="lg:max-w-[385px] lg:ml-20">
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight text-start mb-6 uppercase"
                                text={content[0].titulo}
                                element="h2"
                            />
                            <div
                                className="[&_ul_li]:mt-2 [&_ul]:pl-0 [&_ul_li]:list-none [&_ul_li]:relative [&_ul_li]:pt-1 [&_ul_li]:pl-10 [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-1 [&_ul_li]:before:w-7 [&_ul_li]:before:h-7 [&_ul_li]:before:bg-no-repeat [&_ul_li]:before:bg-contain [&_ul_li]:before:bg-[url('/content/display/b25b3b334c89c50ae74ad94cc5b9fce0.png')] text-custom-gray text-sm 2xl:text-base"
                                dangerouslySetInnerHTML={{
                                    __html: content[0].texto,
                                }}
                            />
                        </div>
                    </Reveal>
                </div>
            </div>

            <div ref={bgRef} className="bg-gray-100 pt-20 lg:pt-40 relative">
                <img
                    ref={rightImageRef}
                    src={kiwi}
                    className="hidden lg:block absolute lg:max-h-[40%] 2xl:max-h-[50%] -right-[20%] lg:-right-[10%] drop-shadow-lg top-20 2xl:-top-[4%] z-10"
                />
                <img
                    ref={leftImageRef}
                    src={sheet}
                    className="hidden sm:block absolute w-40 md:w-50 2xl:w-80 sm:-left-20 md:-left-30 drop-shadow-lg z-[1]"
                />
                <div className="container max-w-large">
                    <LetterReveal
                        className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight text-center mb-10 lg:mb-30 uppercase"
                        text={content[1].titulo}
                        element="h2"
                    />

                    <div className="relative z-[1] pb-40">
                        <VideoPlayer
                            src={video}
                            classList={[
                                "sm:max-w-[78vw]",
                                "mx-auto",
                                "w-full",
                                "aspect-video",
                                "rounded-2xl",
                            ]}
                            autoplay={false}
                        />
                    </div>
                </div>
                <div className="bg-secondary absolute top-[60%] min-w-full h-60 lg:h-[556px]" />
            </div>
        </section>
    );
};
