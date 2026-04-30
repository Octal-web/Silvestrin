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

    const itemsPerPage = 9;

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
        "size-8 lg:size-12 flex items-center justify-center border border-gray-200 rounded-full text-sm font-medium";

    const activeItem = "bg-primary text-white border-none rounded-full";

    const navItem = "bg-primary text-white rounded-full border-none";

    return (
        <section
            className={`container max-w-large pt-1 pb-10 -mt-80 lg:mt-8 xl:mt-24 2xl:pb-28 ${hasAside ? "flex-1" : "w-full"}`}
        >
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                </div>
            )}

            {!loading && (
                <>
                    {brand &&
                        brand.parceiro !== 1 &&
                        !isFilteringByCategory && (
                            <div className="lg:p-8 mb-8 relative flex flex-col md:flex-row md:items-center gap-5 xl:gap-30">
                                <img
                                    src={brand.logo}
                                    alt={brand.nome}
                                    className="w-28 md:size-full md:max-w-sm mx-auto lg:mx-0"
                                />
                                <p className="text-sm md:text-base 2xl:text-lg opacity-90 leading-relaxed max-w-xl ">
                                    {brand.descricao ||
                                        "Cresça especialmente para as crianças e também para quem precisa frutas mais doces, e fáceis de descascar e comer, pois não tem semente nem caroço. As frutas são cuidadosamente selecionadas e embaladas na ponta certo para consumir e estão disponíveis o ano inteiro."}
                                </p>
                            </div>
                        )}

                    {produtos && produtos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 lg:ml-12">
                            {currentItems.map((produto) => (
                                <div
                                    key={produto.id}
                                    className="relative overflow-hidden transition-shadow mx-auto"
                                >
                                    <div className="absolute top-4 left-0 lg:left-6 z-[1]">
                                        <div className="w-16 h-12">
                                            <img
                                                src={produto.marca_logo}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative aspect-square bg-white px-12 pt-16 lg:pt-24 lg:pb-4 max-h-64 lg:max-h-80 mx-auto">
                                        {produto.imagem ? (
                                            <img
                                                src={produto.imagem}
                                                alt={produto.nome}
                                                className="w-30 mx-auto lg:w-full lg:h-full object-contain"
                                            />
                                        ) : (
                                            <div className="max-w-full max-h-full flex items-center justify-center text-neutral-400">
                                                Sem imagem
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-0 lg:p-8">
                                        <h3
                                            className="font-semibold text-base
                                         lg:text-lg text-primary mb-2 line-clamp-2"
                                        >
                                            {produto.nome}
                                        </h3>

                                        {produto.subtitulo && (
                                            <p
                                                className="font-semibold text-base
                                         lg:text-lg text-custom-gray mb-2 line-clamp-2"
                                            >
                                                {produto.subtitulo}
                                            </p>
                                        )}

                                        {produto.descricao && (
                                            <p className="text-xs lg:text-sm text-custom-gray whitespace-pre-line">
                                                {produto.descricao}
                                            </p>
                                        )}

                                        {produto.sazonalidade.length > 0 && (
                                            <>
                                                <p className="text-xs lg:text-sm text-custom-gray whitespace-pre-line mt-1">
                                                    Sazonalidade:
                                                </p>
                                                <div className="flex flex-wrap mt-3 gap-0.5">
                                                    {produto.sazonalidade.map(
                                                        (item) => (
                                                            <span
                                                                key={item}
                                                                className="size-5 lg:size-6 text-xs lg:text-sm text-gray-400 flex items-center justify-center border border-gray-400"
                                                            >
                                                                {item}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {produto.manual && (
                                            <a
                                                target="_blank"
                                                href={produto.manual}
                                                className="pt-8 flex items-center gap-1 text-xs text-custom-gray font-semibold cursor-pointer hover:brightness-90"
                                            >
                                                <svg
                                                    width="18px"
                                                    height="18px"
                                                    stroke-width="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="#828282"
                                                >
                                                    <path
                                                        d="M6 20L18 20"
                                                        stroke="#828282"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5"
                                                        stroke="#828282"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                </svg>
                                                Manual da fruta
                                            </a>
                                        )}
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
                            containerClassName="flex gap-2 xl:ml-60 mt-20 items-center justify-center xl:justify-start"
                            pageClassName="text-gray-400"
                            pageLinkClassName={baseItem}
                            activeLinkClassName={activeItem}
                            previousClassName={`mr-15 ${navItem}`}
                            previousLinkClassName={`${baseItem} border-none`}
                            nextLinkClassName={`${baseItem} border-none`}
                            nextClassName={`ml-15 ${navItem}`}
                            disabledClassName="!bg-neutral-300"
                            disabledLinkClassName="text-white hover:cursor-not-allowed max-w-12"
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
