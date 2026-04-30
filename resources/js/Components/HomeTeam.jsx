import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

export const HomeTeam = ({ content }) => {
    const titulo = content.titulo;
    const partes = titulo.split(" ");

    const inicio = partes.slice(0, -1).join(" ");
    const fim = partes[partes.length - 1];
    
    return (
        <section className="relative pb-16 md:py-16 xl:py-24">
            <div className="relative container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Reveal direction="left" className="">
                        <div className="ml-auto max-w-[772px] mt-8">
                            <LetterReveal className="font-secondary text-primary text-7xl font-black leading-tight uppercase" text={inicio} element="h1" />
                            <LetterReveal className="font-secondary text-secondary text-7xl font-black  uppercase" text={fim} element="h1" />
                            <div className="max-w-[30em] text-neutral-600 text-balance my-10" dangerouslySetInnerHTML={{ __html: content.texto }} /> 
                        </div>
                    </Reveal>
                    
                    <Reveal direction="right">
                        <div className="-ml-10 -translate-x-20">
                            <svg className="absolute w-0 h-auto" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="custom-shape-1" clipPathUnits="objectBoundingBox">
                                        <path
                                            d="M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7"
                                            transform="scale(0.00105, 0.0014)"
                                        >
                                            <animate
                                                attributeName="d"
                                                dur="30s"
                                                repeatCount="indefinite"
                                                values="
                                                M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7;M928.4,259.7c0,229.6-207.8,426.8-464.2,426.8S0,489.3,0,259.7c0-200.9,223.2-136,389.1-181.5c4.1-1.1,8.1-2.3,12.4-3.6c10.8-3.3,21.3-7,31.3-11.1c9.2-3.8,18.1-7.8,26.6-12.1C675.2-58,928.4,6.9,928.4,248.7;M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7"
                                                keyTimes="0;0.5;1"
                                                calcMode="spline"
                                                keySplines="0 0 0.58 1;0 0 0.58 1"
                                            />
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="w-full" style={{ clipPath: 'url(#custom-shape-1)' }}>
                                <img src={content.imagem} className="w-full" alt="" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
