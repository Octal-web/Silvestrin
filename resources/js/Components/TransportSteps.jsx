import { Reveal } from './Reveal';

export const TransportSteps = ({ steps }) => {
    if (!steps.length) return null;

    return (
        <section className="bg-tertiary pb-2 md:pt-16 xl:pt-24">
            <div className="container max-w-large">
                <div className={`grid grid-cols-1 grid-cols-4 gap-10 md:gap-6 mr-16 mb-30 px-5`}>
                    {steps.map((value, index) => (
                        <Reveal
                            key={index}
                            className={`flex flex-col px-5 pt-4 pb-8 ${
                                index !== steps.length - 1 ? "md:border-r md:border-gray-300" : ""
                            }`}
                            direction="left"
                            delay={index * 1}
                        >
                            <img src={value.imagem} className="mb-8 self-start" />
                            
                            <h3 className="text-2xl text-white font-bold max-w-60 text-balance leading-none mb-8">{value.titulo}</h3>
                            <p className="text-white max-w-80 text-balance">{value.texto}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
