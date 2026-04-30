import LetterReveal from "./LetterReveal";

export const TransportFeatures = ({ content }) => {
    const lines = content.texto.split("\n").filter(Boolean);

    return (
        <section className="bg-primary pt-24 pb-20 mb-14">
            <div className="container max-w-large">
                <div className="ml-14">
                    <LetterReveal
                        className="font-secondary text-secondary text-6xl font-black leading-none max-w-[14.2em] uppercase"
                        text={content.titulo}
                        element="h1"
                    />
                    <LetterReveal
                        className="font-secondary text-secondary text-6xl font-black leading-none max-w-[14.2em] uppercase"
                        text={content.subtitulo}
                        element="h1"
                    />

                    <div className="mt-12 space-y-4">
                        {lines.map((line, i) => {
                            const [label, value] = line.split(":").map(s => s.trim());
                            return (
                                <div key={i} className="text-white text-2xl grid grid-cols-4">
                                    <div className="flex gap-8">
                                        <span className="font-bold whitespace-nowrap">{label}</span>
                                        <span className="relative whitespace-nowrap w-full mr-8">
                                            <span className="absolute top-2.5 right-0 w-3 h-3 border-r-2 border-t-2 border-white rotate-45" />
                                            <span className="absolute top-[15px] left-0 right-2 w-full h-0.5 bg-white" />
                                        </span>
                                    </div>
                                    <div className="col-span-3">{value}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};