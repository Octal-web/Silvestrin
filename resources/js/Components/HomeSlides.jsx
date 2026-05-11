import { useRef } from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SwiperButton } from "./SwiperButton";

export const HomeSlides = ({ slides }) => {
    const swiperRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const getBackgroundGradient = () => {
        if (typeof window !== "undefined") {
            return window.innerWidth >= 768
                ? "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)"
                : "linear-gradient(2deg, rgb(0 0 0 / 67%) 0%, rgba(84, 84, 84, 0) 102%)";
        }
        return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)";
    };

    return (
        <div className="relative -mt-10 lg:-mt-2.5">
            <Swiper
                slidesPerView={1}
                allowTouchMove={false}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 10000 }}
                loop
                modules={[Navigation, Autoplay, EffectFade]}
                ref={swiperRef}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide className="overflow-hidden" key={slide.id}>
                        <div className="relative z-[1] h-[calc(100vh_-_118px)] flex items-center">
                            {slide.tipo === "imagem" && (
                                <div className="absolute inset-0 bg-cover bg-center">
                                    <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={slide.imagem_mobile}
                                        />
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Slide"
                                            src={slide.imagem}
                                        />
                                    </picture>
                                </div>
                            )}
                            {slide.tipo === "video" && (
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        media="(min-width: 768px)"
                                        src={slide.video}
                                        type="video/mp4"
                                    />
                                    <source
                                        media="(max-width: 767px)"
                                        src={slide.video_mobile ?? slide.video}
                                        type="video/mp4"
                                    />
                                    <p>
                                        Your browser does not support the video
                                        tag.
                                    </p>
                                </video>
                            )}

                            <div
                                className="absolute inset-0"
                                style={{
                                    background: getBackgroundGradient(),
                                }}
                            />

                            <div className="absolute inset-0 bg-eng-primary mix-blend-color-dodge opacity-40" />

                            <div className="container max-w-large h-full mt-24">
                                <div
                                    className={`flex flex-col relative w-full h-full md:w-[70%] xl:w-1/2 max-w-[550px] justify-end pb-36 transition-opacity duration-1000 ease-in-out z-[1] [.swiper-slide-active_&]:animate-fade-in-down`}
                                >
                                    {slide.titulo && (
                                        <h2
                                            className="font-secondary text-5xl md:text-6xl 2xl:text-7xl font-black text-white text-balance uppercase leading-[1.1] mb-5"
                                            dangerouslySetInnerHTML={{
                                                __html: slide.titulo,
                                            }}
                                        />
                                    )}
                                    {slide.descricao && (
                                        <div className="text-sm lg:text-base text-custom-gray text-balance max-w-sm mb-8">
                                            <p>{slide.descricao}</p>
                                        </div>
                                    )}
                                    {slide.link && (
                                        <a
                                            href={slide.link}
                                            className="block px-6 2xl:px-8 py-3 gap-2 rounded-full bg-primary text-white text-base md:text-lg 2xl:text-xl font-normal transition-all hover:bg-secondary hover:shadow w-fit cursor-pointer"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {slide.texto_botao}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {slides.length > 1 && (
                <div className="relative hidden md:block">
                    <div className="absolute bottom-16 md:bottom-24 right-0 z-10 container max-w-fit">
                        <div className="flex gap-10 items-center md:justify-between">
                            <SwiperButton
                                ref={prevButtonRef}
                                isPrev={true}
                                className="max-w-16 max-h-16 p-5"
                                onClick={() =>
                                    swiperRef.current?.swiper.slidePrev()
                                }
                            />

                            <SwiperButton
                                onClick={() =>
                                    swiperRef.current?.swiper.slideNext()
                                }
                                className="max-w-16 max-h-16 p-5"
                                ref={nextButtonRef}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
