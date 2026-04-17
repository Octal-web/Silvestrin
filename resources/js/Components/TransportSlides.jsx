import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TransportSlides = ({ content, slides }) => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const leftImgRef = useRef(null);
    const rightImgRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
            swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
            swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [slides]);

    useEffect(() => {
        if (leftImgRef.current && sectionRef.current) {
            gsap.fromTo(leftImgRef.current, 
                {
                    backgroundPosition: "60% center"
                },
                {
                    backgroundPosition: "80% center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        }

        if (rightImgRef.current && sectionRef.current) {
            gsap.fromTo(rightImgRef.current, 
                {
                    backgroundPosition: "70% center"
                },
                {
                    backgroundPosition: "50% center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [content.imagem, content.imagem_mobile]);

    return (
        <section ref={sectionRef} className="relative pb-24 bg-tertiary">
            <div className="container max-w-[92em]">
                <h4 className="font-secondary text-2xl text-white text-center font-black tracking-wider uppercase mb-12">{content.titulo}</h4>
            </div>

            <div className="relative">
                <div
                    ref={leftImgRef}
                    className="absolute left-0 top-1/2 h-[530px] aspect-[4/6] bg-[length:auto_100%] bg-red-500 -translate-y-1/2"
                    style={{
                        backgroundImage: `url(${content.imagem})`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tl from-black to-transparent opacity-80" />    
                </div>
                
                <div
                    ref={rightImgRef}
                    className="absolute right-0 top-1/2 h-[530px] aspect-[4/6] bg-[length:auto_100%] bg-red-500 -translate-y-1/2"
                    style={{
                        backgroundImage: `url(${content.imagem_mobile})`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-80" />    
                </div>

                <div className="container max-w-[92em]">
                    <div className="relative shadow-2xl">
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            modules={[Navigation]}
                            autoplay={{ delay: 12000 }}
                            loop={true}
                            navigation={{
                                prevEl: prevButtonRef.current,
                                nextEl: nextButtonRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                                swiper.params.navigation.prevEl = prevButtonRef.current;
                                swiper.params.navigation.nextEl = nextButtonRef.current;
                            }}
                        >
                            {slides.map((slide, index) => 
                                <SwiperSlide key={index}>
                                    <div className="">
                                        <img src={slide.imagem} className="transition-all" />
                                    </div>
                                </SwiperSlide>
                            )}
                            {slides.map((slide, index) => 
                                <SwiperSlide key={index}>
                                    <div className="">
                                        <img src={slide.imagem} className="transition-all" />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>

                        <div className="absolute top-1/2 -translate-y-1/2 -left-10 -right-10 z-[10] flex justify-between">
                            <button
                                ref={prevButtonRef}
                                className="group w-16 2xl:w-20 h-16 2xl:h-20 flex items-center justify-center bg-white rounded-full shadow-md transition ease-out duration-200 disabled:opacity-60 hover:bg-primary"
                            >
                                <ArrowIcon className="fill-primary opacity-80 rotate-180 transition-all group-hover:opacity-100 group-hover:fill-white" />
                            </button>
                            <button
                                ref={nextButtonRef}
                                className="group w-16 2xl:w-20 h-16 2xl:h-20 flex items-center justify-center bg-white rounded-full shadow-md transition ease-out duration-200 disabled:opacity-60 hover:bg-primary"
                            >
                                <ArrowIcon className="fill-primary opacity-80 transition-all group-hover:opacity-100 group-hover:fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container max-w-[92em]">
                <h4 className="text-2xl 2xl:text-[25px] text-white text-center font-bold tracking-tight mt-20 mb-6">{content.subtitulo}</h4>
                <p className="text-white text-center max-w-[940px] mx-auto">{content.texto}</p>
            </div>
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
    )
};