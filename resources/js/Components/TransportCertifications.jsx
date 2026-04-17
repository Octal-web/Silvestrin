import { Reveal } from "./Reveal";

export const TransportCertifications = ({ certifications }) => {
    const numCertifications = certifications.length;
    let gridColsClass = "grid-cols-3";

    if (numCertifications > 3) {
        if (numCertifications >= 6) {
            gridColsClass = "lg:grid-cols-6";
        } else if (numCertifications === 5) {
            gridColsClass = "lg:grid-cols-5";
        } else if (numCertifications === 4) {
            gridColsClass = "lg:grid-cols-4";
        }
    }
    
    return (
        <section className="-mt-44 bg-secondary">
            <div className="container max-w-large">
                <div className={`relative grid ${gridColsClass} gap-6 pb-20`}>
                    {certifications.map((item, index) => (
                        <Reveal key={index} delay={index * 0.6} className="relative bg-white rounded-xl border-[3px] border-secondary px-6 xl:px-8 py-10 shadow-md min-h-80">
                            <div className="flex h-36 items-center justify-center">
                                <img src={item.logo} alt={item.nome} className="block mx-auto my-3 sm:my-5" />
                            </div>
                            
                            <p className="2xl:text-lg text-neutral-500 text-center max-w-sm mx-auto mt-8">{item.descricao}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};