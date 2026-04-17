import { Link } from '@inertiajs/react';

import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

export const HomeBrands = ({ brands }) => {
    return (
        <section className="relative bg-white pb-16 md:py-16 xl:py-30">
            <div className="relative container max-w-large">
                <div className="flex justify-between items-center">
                    <LetterReveal className="font-secondary text-primary text-7xl font-black uppercase mb-3" text="Linha de produtos:" element="h1" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-x-8 gap-y-20 my-16">
                    {brands.map((item, index) => (
                        <Reveal key={index} delay={index}>
                            <Link href={route('Produtos.marcas', { marca: item.slug })} className="group">
                                <img src={item.logo} alt={item.nome} className="m-auto transition-all group-hover:scale-95 group-hover:opacity-90" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
