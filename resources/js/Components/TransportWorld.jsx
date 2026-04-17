import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const TransportWorld = ({ content }) => {
    return (
        <section className="bg-neutral-100 pt-30 pb-44">
            <div className="container max-w-large">
                <Reveal className="text-center">
                    <LetterReveal className="font-secondary text-primary text-5xl font-black leading-tight uppercase max-w-[700px] mx-auto mb-10" text={content.titulo} element="h2" />
                    <div className="text-neutral-600 max-w-[910px] mx-auto" dangerouslySetInnerHTML={{ __html: content.texto }} />
                </Reveal>
            </div>
        </section>
    );
};
