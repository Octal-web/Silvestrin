import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const ProductsList = ({
    hasAside = false,
    brand = null,
    loading = false,
}) => {
    const { produtos } = usePage().props;
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 2;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = produtos.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(produtos.length / itemsPerPage);

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const isFilteringByCategory =
        urlParams.get("categoria") && !urlParams.get("marca");

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % produtos.length;
        setItemOffset(newOffset);
        window.scrollTo({ top: 10, behavior: "smooth" });
    };

    const baseItem =
        "w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-sm font-medium";

    const activeItem = "bg-primary text-white border-none rounded-full";

    const navItem = "bg-primary text-white rounded-full border-none";

    return (
        <section
            className={`container max-w-large py-20 ${hasAside ? "flex-1" : "w-full"}`}
        >
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                </div>
            )}

            {!loading && (
                <>
                    {brand.parceiro !== 1 &&
                        brand &&
                        !isFilteringByCategory && (
                            <div className="p-8 mb-8 relative flex gap-30">
                                <img src={brand.logo} alt={brand.nome} />
                                <p className="text-lg opacity-90 leading-relaxed max-w-xl">
                                    {brand.descricao ||
                                        "Cresça especialmente para as crianças e também para quem precisa frutas mais doces, e fáceis de descascar e comer, pois não tem semente nem caroço. As frutas são cuidadosamente selecionadas e embaladas na ponta certo para consumir e estão disponíveis o ano inteiro."}
                                </p>
                            </div>
                        )}

                    {produtos && produtos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-12">
                            {currentItems.map((produto) => (
                                <div
                                    key={produto.id}
                                    className="relative bg-white rounded-[30px] shadow-xl overflow-hidden transition-shadow"
                                >
                                    <div className="absolute top-4 left-6 z-[1]">
                                        <div className="w-16 h-12">
                                            <img
                                                src={produto.marca_logo}
                                                className="w-full h-full object-contain"
                                            />
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

                                        <p className="text-sm text-neutral-600 whitespace-pre-line mt-1">
                                            Sazonalidade:
                                        </p>
                                        <div className="flex flex-wrap gap-1 mt-3">
                                            {produto.sazonalidade.map(
                                                (item) => (
                                                    <span
                                                        key={item}
                                                        className="w-6 h-6 text-xs flex items-center justify-center rounded border border-gray-300 bg-gray-100"
                                                    >
                                                        {item}
                                                    </span>
                                                ),
                                            )}
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

                    {pageCount > 1 && (
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                            containerClassName="flex gap-2 ml-60 mt-20 items-center"
                            pageClassName="text-gray-400"
                            pageLinkClassName={baseItem}
                            activeLinkClassName={activeItem}
                            previousClassName={`mr-15 ${navItem}`}
                            previousLinkClassName={`${baseItem} border-none`}
                            nextLinkClassName={`${baseItem} border-none`}
                            nextClassName={`ml-15 ${navItem}`}
                            disabledClassName="bg-neutral-300"
                            disabledLinkClassName="text-white hover:cursor-not-allowed max-w-12 "
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={
                                <FontAwesomeIcon icon={faArrowLeft} />
                            }
                            renderOnZeroPageCount={null}
                        />
                    )}
                </>
            )}
        </section>
    );
};
