import LetterReveal from "./LetterReveal";
import { Reveal } from "./Reveal";

export const ContactData = ({ data, content }) => {
    const emails = data.emails
        .split("\n")
        .map(line => {
            const [label, value] = line.split(":").map(s => s.trim()); 
            return { label, value };
        });
    
    const filiais = data.filiais
        .split("\n")
        .map(line => {
            const [label, value] = line.split(":").map(s => s.trim());
            return { label, value };
        })
        .filter(item => !item.label.toLowerCase().includes("matriz"));

    return (
        <section className="relative z-[1]">
            <div className="container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Reveal className="py-20">
                        <LetterReveal className="font-secondary text-primary text-6xl font-black leading-tight uppercase max-w-[700px] mb-10" text={content.titulo} element="h1" />
                        <div className="max-w-[687px]">
                            <div className="text-neutral-600 text-sm font-light leading-tight"><span className="block font-bold">Matriz</span>{data.endereco}</div>

                            <div className="my-6 bg-neutral-600 h-px" />

                            <div className="text-neutral-600 text-sm font-light leading-tight">
                                <ul className="flex max-sm:flex-wrap max-sm:gap-y-4 md:gap-8 2xl:gap-16 text-neutral-600 text-sm">
                                    <li>
                                        <div className="leading-tight font-bold">Telefone</div><div className="font-light">{data.telefone}</div>
                                    </li>

                                    {emails.slice(0, 2).map((item, index) => (
                                        <li key={index}>
                                            <div className="leading-tight font-bold">{item.label}</div><div className="font-light">{item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="my-6 bg-neutral-600 h-px" />
                            
                            <div className="text-neutral-600 text-sm font-light leading-tight">
                                <ul className="flex max-sm:flex-wrap max-sm:gap-y-4 md:gap-8 2xl:gap-9 text-neutral-600 text-sm">
                                    {emails.slice(2).map((item, index) => (
                                        <li key={index}>
                                            <div className="leading-tight font-bold">{item.label}</div><div className="font-light">{item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="my-6 bg-neutral-600 h-px" />
                        </div>

                        <div className="max-w-[650px]">
                            <div className="bg-primary rounded-full px-5 py-1 w-fit text-white font-bold mt-8 mb-6">Outras Unidades:</div>
                            <ul className="grid grid-cols-2 sm:gap-y-4 md:gap-x-8 2xl:gap-x-16 text-neutral-600 text-sm">
                                {filiais.map((item, index) => (
                                    <li key={index}>
                                        <span className="leading-tight font-bold">{item.label}:</span> <span className="font-light">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    
                    <Reveal className="absolute w-[calc(50%_+_5em)] -right-10 -top-10 -bottom-10" direction="right">
                        <div className="">
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
