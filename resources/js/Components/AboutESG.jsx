import LetterReveal from './LetterReveal';

export const AboutESG = ({ content }) => {
    
    return (
        <section className="relative bg-primary pb-24 pt-[25%]">
            <div className="">
                <div className="relative container max-w-medium">
                    <div className="">
                        <LetterReveal className="font-secondary text-white text-center text-7xl font-black leading-[1.2] uppercase -mt-2" text={content.titulo} element="h1" />
                        <LetterReveal className="font-secondary text-secondary text-center text-7xl font-black leading-[1.2] uppercase -mt-2" text={content.subtitulo} element="h1" />

                        <p className="text-xl text-white text-center text-balance mt-10">{content.texto}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};