import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const TransportSlides = ({ content, slides }) => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <section className="relative py-10 lg:py-32 bg-tertiary">
            <div className="container max-w-[92em]">
                <h4 className="font-secondary text-lg md:text-xl 2xl:text-2xl text-white text-center font-black tracking-wider  mb-12">
                    {content.titulo}
                </h4>
            </div>

            {slides && (
                <div className="relative overflow-visible">
                    <Swiper
                        centeredSlides={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        ref={swiperRef}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            974: {
                                slidesPerView: 1.5,
                            },
                        }}
                        slidesPerView={1.5}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center scale-75 [.swiper-slide-active_&]:scale-100 container md:block">
                                    <img
                                        src={slide.imagem}
                                        className="aspect-video rounded-3xl object-cover block w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center scale-75 [.swiper-slide-active_&]:scale-100 container md:block">
                                    <img
                                        src={slide.imagem}
                                        className="aspect-video rounded-3xl object-cover block w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="hidden lg:flex lg:justify-center absolute top-1/2 -translate-y-1/2 z-[10] justify-between w-full lg:gap-[54%] 2xl:gap-[57%]">
                        <button
                            ref={prevButtonRef}
                            onClick={() =>
                                swiperRef.current?.swiper.slidePrev()
                            }
                            className="group size-16 2xl:size-20 flex items-center justify-center bg-white rounded-full shadow-md transition ease-out duration-200 disabled:opacity-60 hover:bg-primary"
                        >
                            <ArrowIcon className="fill-primary opacity-80 rotate-180 transition-all group-hover:opacity-100 group-hover:fill-white" />
                        </button>
                        <button
                            onClick={() =>
                                swiperRef.current?.swiper.slideNext()
                            }
                            ref={nextButtonRef}
                            className="group size-16 2xl:size-20 flex items-center justify-center bg-white rounded-full shadow-md transition ease-out duration-200 disabled:opacity-60 hover:bg-primary"
                        >
                            <ArrowIcon className="fill-primary opacity-80 transition-all group-hover:opacity-100 group-hover:fill-white" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

const ArrowIcon = ({ className }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 25 25"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.023 10.938 10.273 2.188 12.5 0l12.5 12.5L12.5 25l-2.227-2.188 8.75-8.75H0v-3.125h19.023z" />
        </svg>
    );
};
