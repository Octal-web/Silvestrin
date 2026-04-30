import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const SustainabilityReuse = ({ content }) => {
    return (
        <section className="lg:-mt-16">
            <div className="bg-gray-100 max-h-[460px] md:max-h-[550px] xl:max-h-[600px] 2xl:max-h-[767px]">
                <div className="flex flex-col py-16 lg:mt-20 xl:pt-0 xl:mt-0 justify-center lg:flex-row md:justify-between items-center max-w-large container mx-auto">
                    <Reveal direction="right" className="mt-8">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight xl:max-w-[531px] text-center md:text-start uppercase"
                            text={content.titulo}
                            element="h2"
                        />
                        <div
                            className="text-sm 2xl:text-base text-center md:text-start text-custom-gray text-balance py-8 xl:max-w-[462px]"
                            dangerouslySetInnerHTML={{
                                __html: content.texto,
                            }}
                        />
                    </Reveal>
                    <Reveal direction="left">
                        <div className="mx-auto lg:mt-[150px] 2xl:mt-[215px]">
                            <img
                                src={content.imagem}
                                className="w-full rounded-3xl xl:max-w-[630px] xl:h-[580px] 2xl:max-w-[710px] 2xl:h-[680px]"
                                alt={content.titulo}
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
