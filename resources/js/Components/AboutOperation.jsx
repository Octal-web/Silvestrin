
import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const AboutOperation = ({ content }) => {
    return (
        <section className="pt-16 xl:pt-36">
            <div className="relative ">
                <div className="container max-w-large">
                    <Reveal direction="top">
                        <div className="text-center mx-auto max-w-[772px] mt-8">
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight uppercase"
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
                            className="w-full max-w-[1526px] mx-auto"
                            alt={content[0].titulo}
                        />
                    </Reveal>

                    <div className="flex flex-col justify-center md:flex-row md:justify-between max-w-medium items-center mt-10 lg:mt-32 mx-auto">
                        <Reveal direction="left" className="">
                            <div className="ml-auto max-w-[772px] mt-8">
                                <LetterReveal
                                    className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[303px] mx-auto md:mx-0 text-center md:text-start uppercase"
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
                                <img
                                    src={content[1].imagem}
                                    className="w-80 md:w-full rounded-t-3xl max-w-[560px] xl:max-w-[580px] 2xl:max-w-[740px]"
                                    alt={content[1].titulo}
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="bg-gray-100 pt-10 lg:pt-32 pb-16 xl:pb-36">
                    <div className="flex flex-col-reverse justify-center md:flex-row md:gap-20 md:justify-start items-center max-w-large container mx-auto">
                        <Reveal direction="left">
                            <div className="mx-auto 2xl:ml-6">
                                <img
                                    src={content[2].imagem}
                                    className="w-80 md:w-full rounded-3xl max-w-[570px] xl:max-w-[630px] 2xl:max-w-[740px]"
                                    alt={content[2].titulo}
                                />
                            </div>
                        </Reveal>
                        <Reveal direction="right" className="mt-8">
                            <LetterReveal
                                className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight max-w-[32rem] text-center md:text-start uppercase"
                                text={content[2].titulo}
                                element="h2"
                            />
                            <div
                                className="text-sm 2xl:text-base text-center md:text-start text-custom-gray text-balance py-8 max-w-md"
                                dangerouslySetInnerHTML={{
                                    __html: content[2].texto,
                                }}
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
