import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SwiperButton } from "./SwiperButton";

export const TransportSlides = ({ content, slides }) => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <section className="relative py-10 lg:py-32 bg-tertiary">
            <div className="container max-w-[92em]">
                <h4 className="font-secondary text-lg md:text-xl 2xl:text-2xl text-white text-center font-black tracking-wider uppercase mb-12">
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
                                <Image imagem={slide.imagem} />
                            </SwiperSlide>
                        ))}
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Image imagem={slide.imagem} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="hidden lg:flex lg:justify-center absolute top-1/2 -translate-y-1/2 z-[10] justify-between w-full lg:gap-[54%] 2xl:gap-[57%]">
                        <SwiperButton
                            ref={prevButtonRef}
                            isPrev={true}
                            onClick={() =>
                                swiperRef.current?.swiper.slidePrev()
                            }
                        />

                        <SwiperButton
                            onClick={() =>
                                swiperRef.current?.swiper.slideNext()
                            }
                            ref={nextButtonRef}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

const Image = ({ imagem }) => {
    return (
        <div className="flex justify-center scale-75 [.swiper-slide-active_&]:scale-100 container md:block">
            <img
                src={imagem}
                className="aspect-video rounded-3xl object-cover block w-full"
                alt="imagens carrossel"
                aria-hidden="true"
            />
        </div>
    );
};
