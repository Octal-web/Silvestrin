import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useId, useRef } from "react";
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

import orange from "../../../public/content/display/cba4177b13b179611b05d839759675c5.png";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityProject = ({ content }) => {
    const id = useId();
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                rotation: -20,
            },
            {
                rotation: -26,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            },
        );
    }, []);

    return (
        <section ref={sectionRef} className="pt-10 xl:pt-28 relative">
            <img
                ref={imageRef}
                src={orange}
                className="hidden md:block absolute max-h-[30%] lg:max-h-[30%] 2xl:max-h-[90%] -left-[10%] lg:-left-[12%] -top-20 drop-shadow-lg z-10"
            />
            <div className="container max-w-large">
                <div className="flex flex-col-reverse justify-center md:flex md:flex-row md:justify-start items-center mx-auto md:mx-0">
                    <Reveal direction="left">
                        <div className="block">
                            <svg
                                viewBox="0 0 1000 1000"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-0 h-0"
                            >
                                <defs>
                                    <clipPath
                                        id={`custom-shape-${id}`}
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path
                                            d="M 33.853629,114.40665 C 24.572305,106.28151 14.100146,92.012542 13.83074,77.164158 13.561335,62.315773 19.070353,40.122463 32.564967,32.700541 46.059582,25.27862 69.620764,21.958668 81.828414,24.685558 c 12.207649,2.726889 17.485077,5.254661 24.024806,5.233613 6.53973,-0.02105 16.42286,-3.892096 25.7303,-5.382958 10.39246,-1.664659 30.38587,-0.487363 39.20908,9.01985 17.47785,18.832773 14.0171,34.237773 2.13672,47.523353 -7.49139,8.377461 -14.155,12.059849 -18.45947,19.247924 -2.16304,7.37563 -0.38518,13.53126 2.49777,19.8975 24.60858,43.1832 -6.40065,80.01875 -53.58837,73.52458 C 87.185814,190.621 67.23399,167.8441 67.244203,150.84445 62.830399,132.80386 60.682775,133.81307 56.47448,129.03295 c -4.208295,-4.78012 -9.175747,-7.80234 -22.620851,-14.6263 z"
                                            transform="scale(0.00465, 0.00510)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className="w-full"
                                style={{
                                    clipPath: `url(#custom-shape-${id})`,
                                }}
                            >
                                <img
                                    src={content[0].imagem}
                                    className="w-full 2xl:h-[850px] 2xl:w-[815px]"
                                    alt="imagem ilustrativa do projeto adotado para sustentabilidade"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="left">
                        <div>
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[530px] mx-auto md:mx-0 text-center md:text-start uppercase"
                                text={content[0].titulo}
                                element="h2"
                            />
                            <div
                                className=" text-sm 2xl:text-base text-center md:text-start lg:max-w-[498px] text-custom-gray text-balance my-8"
                                dangerouslySetInnerHTML={{
                                    __html: content[0].texto,
                                }}
                            />
                        </div>
                    </Reveal>
                </div>

                <div className="flex flex-col justify-center md:flex-row md:justify-start items-center mx-auto lg:-mt-30 2xl:-mt-60">
                    <Reveal direction="left" className="mt-10 lg:mt-28">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[688px] text-center md:text-start uppercase"
                            text={content[1].titulo}
                            element="h2"
                        />
                        <div
                            className="text-sm 2xl:text-base text-center md:text-start text-custom-gray text-balance py-8 lg:max-w-[511px]"
                            dangerouslySetInnerHTML={{
                                __html: content[1].texto,
                            }}
                        />
                    </Reveal>

                    <Reveal direction="left">
                        <div className="block">
                            <svg
                                viewBox="0 0 1000 1000"
                                className="w-0 h-0"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <clipPath
                                        id={`custom-shape-2-${id}`}
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path
                                            d="M 542.57531,76.386733 C 510.44699,80.320816 488.80997,68.190975 462.41832,55.568882 436.02667,42.94679 404.88311,29.83371 373.9016,36.226717 c -30.9815,6.393007 -61.79725,32.291349 -79.50096,55.732371 -17.70371,23.441022 -22.29329,44.421962 -20.65405,65.568072 1.63923,21.14611 9.50723,42.45528 16.71978,61.14233 7.21255,18.68705 13.76909,34.75057 13.76909,52.29036 0,17.53979 -6.55668,36.55414 -24.58818,59.66714 -18.0315,23.11299 -47.53593,50.32263 -67.96461,83.76298 -20.42869,33.44035 -31.77919,73.10742 -31.71746,114.58001 0.0617,41.4726 11.53567,84.74577 49.99592,108.35072 38.46025,23.60496 103.90351,27.53896 150.88712,10.81874 46.98361,-16.72022 75.50512,-54.09324 103.86357,-90.31992 28.35845,-36.22667 56.55213,-71.30486 97.6966,-82.45129 41.14447,-11.14644 95.23592,1.63882 137.52813,-8.19658 42.29222,-9.8354 72.78074,-42.29092 89.17276,-72.78033 16.39203,-30.48941 18.68686,-59.01093 12.45775,-84.7466 -6.2291,-25.73567 -20.98131,-48.68356 -7.86744,-79.50115 13.11386,-30.81759 54.09221,-69.50114 60.81308,-107.85921 C 881.23356,83.926293 853.6961,45.898374 818.45258,25.080111 783.20907,4.2618488 740.26374,0.65575248 712.5607,4.753835 684.85766,8.8519175 672.40024,20.653683 644.86112,36.554246 617.322,52.454808 574.70364,72.452651 542.57531,76.386733 Z"
                                            transform="scale(0.00113, 0.00149)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className="w-full"
                                style={{
                                    clipPath: `url(#custom-shape-2-${id})`,
                                }}
                            >
                                <img
                                    src={content[1].imagem}
                                    className="w-full 2xl:w-[920px] 2xl:h-[800px]"
                                    alt="imagem ilustrativa"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
