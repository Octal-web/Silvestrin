import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export const AboutOperation = ({ content }) => {
    return (
        <section className="relative pb-16 md:py-16 xl:py-36">
            <div className="relative container max-w-large">
                <Reveal direction="top">
                    <div className="text-center mx-auto max-w-[772px] mt-8">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight"
                            text={content[0].titulo}
                            element="h2"
                        />
                        <div
                            className="text-sm 2xl:text-base text-custom-gray text-balance mt-4 mb-6 2xl:my-8"
                            dangerouslySetInnerHTML={{
                                __html: content[0].texto,
                            }}
                        />
                    </div>
                </Reveal>
                <Reveal direction="bottom">
                    <img
                        src={content[0].imagem}
                        className="w-full max-w-medium mx-auto"
                        alt=""
                    />
                </Reveal>

                <div className="flex flex-col justify-center md:flex-row md:justify-between max-w-medium items-center my-10 lg:my-32 mx-auto">
                    <Reveal direction="left" className="">
                        <div className="ml-auto max-w-[772px] mt-8">
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[32rem] text-center md:text-start"
                                text={content[1].titulo}
                                element="h2"
                            />
                            <div
                                className=" text-sm 2xl:text-base text-center md:text-start max-w-md text-custom-gray text-balance my-8"
                                dangerouslySetInnerHTML={{
                                    __html: content[1].texto,
                                }}
                            />
                        </div>
                    </Reveal>
                    <Reveal direction="right">
                        <div className="md:ml-20 mx-auto">
                            <div
                                className="w-full"
                                style={{ clipPath: "url(#custom-shape-2)" }}
                            >
                                <img
                                    src={content[1].imagem}
                                    className="w-80 md:w-full rounded-t-2xl max-w-[600px]"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="flex flex-col-reverse justify-center md:flex-row md:gap-24 md:justify-start items-center max-w-medium mx-auto">
                    <Reveal direction="left">
                        <div className="md:ml-20 md:-translate-x-20 mx-auto">
                            <div
                                className="w-full"
                                style={{ clipPath: "url(#custom-shape-2)" }}
                            >
                                <img
                                    src={content[2].imagem}
                                    className="w-80 md:w-full rounded-2xl max-w-[600px]"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal direction="right" className="mt-8">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[32rem] text-center md:text-start"
                            text={content[2].titulo}
                            element="h2"
                        />
                        <div
                            className="text-sm 2xl:text-base text-center md:text-start text-custom-gray text-balance my-8 max-w-md"
                            dangerouslySetInnerHTML={{
                                __html: content[2].texto,
                            }}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
