import LetterReveal from "./LetterReveal";

export const CultivationBanner = ({ content }) => {
    const partesTitulo = content.texto ? content.titulo.split("\r\n") : [];
    const partesSubtitulo = content.texto
        ? content.subtitulo.split("\r\n\r\n")
        : [];

    return (
        <section
            className="relative bg-no-repeat bg-fill 2xl:bg-cover min-w-screen h-fit max-h-[782px] -mt-16 md:-mt-10"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="min-h-[calc(100vh_-_110px)]">
                <div className="container max-w-medium ">
                    <div className="py-40">
                        {partesTitulo.map((parte, i) => (
                            <LetterReveal
                                key={i}
                                className={`font-secondary ${i === 0 ? "text-primary" : "text-secondary"} text-center text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2]`}
                                text={parte.trim()}
                                element="h1"
                            />
                        ))}

                        <div className="text-lg md:text-xl 2xl:text-2xl mx-auto text-center [&_p_+_p]:mt-0 mt-4 max-w-[623px]">
                            {partesSubtitulo.map((parte, i) => (
                                <p key={i}>{parte}</p>
                            ))}
                        </div>

                        <div
                            className="text-sm xl:text-base text-custom-gray text-center mt-10 2xl:mt-12 2xl:pt-12 [&_p_+_p]:mt-0"
                            dangerouslySetInnerHTML={{ __html: content.texto }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
