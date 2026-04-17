import React from 'react';
import { usePage } from '@inertiajs/react';

export const ProductsList = ({ hasAside = false, brand = null, loading = false }) => {
    const { produtos } = usePage().props;
    
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const isFilteringByCategory = urlParams.get('categoria') && !urlParams.get('marca');

    return (
        <section className={hasAside ? 'flex-1' : 'w-full'}>
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                </div>
            )}

            {!loading && (
                <>
                    {brand && !isFilteringByCategory && (
                        <div className="bg-gradient-to-r from-red-800 to-red-600 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
                                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-400 rounded-full flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">
                                        {brand.nome?.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            <div className="relative max-w-2xl">
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                    {brand.nome}
                                </h1>
                                <p className="text-lg opacity-90 leading-relaxed">
                                    {brand.descricao || 'Cresça especialmente para as crianças e também para quem precisa frutas mais doces, e fáceis de descascar e comer, pois não tem semente nem caroço. As frutas são cuidadosamente selecionadas e embaladas na ponta certo para consumir e estão disponíveis o ano inteiro.'}
                                </p>
                            </div>
                        </div>
                    )}

                    {produtos && produtos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-12">
                            {produtos.map((produto) => (
                                <div key={produto.id} className="relative bg-white rounded-[30px] shadow-xl overflow-hidden transition-shadow">
                                    <div className="absolute top-4 left-6 z-[1]">
                                        <div className="w-16 h-12">
                                            <img src={produto.marca_logo} className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    
                                    <div className="relative aspect-square bg-white px-12 pt-24 pb-4">
                                        {produto.imagem ? (
                                            <img
                                                src={produto.imagem}
                                                alt={produto.nome}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <div className="max-w-full max-h-full flex items-center justify-center text-neutral-400">
                                                Sem imagem
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-0 p-8">
                                        <h3 className="font-semibold text-lg text-primary mb-2 line-clamp-2">
                                            {produto.nome}
                                        </h3>
                                        
                                        {produto.descricao && (
                                            <p className="text-sm text-neutral-600 whitespace-pre-line">
                                                {produto.descricao}
                                            </p>
                                        )}
                                        
                                        <p className="text-sm text-neutral-600 whitespace-pre-line mt-1">Sazonalidade:</p>
                                        <div className="flex flex-wrap gap-1 mt-3">
                                            {produto.sazonalidade.map((item) => (
                                                <span
                                                    key={item}
                                                    className="w-6 h-6 text-xs flex items-center justify-center rounded border border-gray-300 bg-gray-100"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        !loading && (
                            <div className="text-center py-20">
                                <p className="text-neutral-500 text-lg">
                                    Nenhum produto encontrado.
                                </p>
                            </div>
                        )
                    )}
                </>
            )}
        </section>
    );
};