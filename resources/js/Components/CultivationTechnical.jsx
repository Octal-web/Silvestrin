import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const CultivationTechnical = ({ content }) => {
    return (
        <section className="pt-16 md:pt-10 xl:pt-24 container max-w-large">
            <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-0 2xl:ml-20">
                <Reveal direction="left">
                    <img
                        src={content.imagem}
                        className="w-screen object-cover rounded-3xl h-60 md:h-[450px] 2xl:h-[680px] md:w-[635px] 2xl:w-[730px]"
                        alt={content.title}
                    />
                </Reveal>
                <Reveal direction="right">
                    <div className="lg:max-w-[425px] lg:ml-20 2xl:ml-36">
                        <LetterReveal
                            className="font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight lg:max-w-[389px] text-start"
                            text={content.titulo}
                            element="h2"
                        />
                        <div
                            className=" text-sm 2xl:text-base text-start text-custom-gray lg:text-balance my-5"
                            dangerouslySetInnerHTML={{
                                __html: content.texto,
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
