import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const HomeCertification = ({ certification }) => {
    return (
        <section className="container">
            <div className="mb-40 mt-36 bg-white border-2 border-secondary rounded-3xl relative max-w-6xl mx-auto shadow-2xl ">
                <LetterReveal
                    className="font-secondary text-white bg-secondary w-fit round text-3xl md:text-4xl 2xl:text-5xl font-black mb-3 rounded-full py-3 lg:py-5 px-10 lg:px-30 2xl:px-40 absolute -top-7 lg:-top-10 left-1/2 -translate-x-1/2 uppercase"
                    text="Certificação"
                    element="h1"
                />
                <Reveal>
                    <img
                        src={certification.imagem}
                        className="mx-auto mb-5 2xl:mb-16 mt-16 2xl:mt-28 w-36 lg:w-fit"
                        alt={certification.titulo}
                    />
                </Reveal>

                <div className="relative container max-w-large mb-10 lg:mb-20">
                    <div className="text-center">
                        <div
                            className="whitespace-pre-line text-sm lg:text-base text-custom-gray"
                            dangerouslySetInnerHTML={{
                                __html: certification.texto,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
