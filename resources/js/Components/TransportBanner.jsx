
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterReveal from "./LetterReveal";

gsap.registerPlugin(ScrollTrigger);

export const TransportBanner = ({ content }) => {

    const partesTitulo = content.texto ? content.titulo.split(",") : [];

    return (
        <section
            className="relative bg-no-repeat bg-fill 2xl:bg-cover min-w-screen h-screen max-h-[672px] -mt-16 md:-mt-10"
            style={{
                backgroundImage: `url(${content.imagem})`,
            }}
        >
            <div className="container max-w-large flex flex-col justify-center h-full pb-10">
                {partesTitulo.map((parte, i) => (
                    <LetterReveal
                        key={i}
                        className={`font-secondary ${i === 0 ? "text-primary" : "text-secondary"} text-center text-5xl md:text-6xl 2xl:text-7xl font-black leading-[1.2] -mt-2 uppercase`}
                        text={parte.trim()}
                        element="h1"
                    />
                ))}

                <div
                    className="text-xs md:text-sm 2xl:text-base text-custom-gray text-center mt-10 2xl:mt-12 2xl:pt-12 max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: content.texto }}
                />
            </div>
        </section>
    );
};
