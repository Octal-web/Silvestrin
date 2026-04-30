import React, { useState, useEffect, useRef } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { InputMask } from '@react-input/mask';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnimatedCheckMark from './AnimatedCheckMark';
import LetterReveal from './LetterReveal';

gsap.registerPlugin(ScrollTrigger);

export const HomeContact = ({ isHome = true, content }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    const { message } = usePage().props;

    const [loading, setLoading] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        politica: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
        clearErrors(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        post(route('Contato.enviar'), {
            preserveScroll: true,
            onSuccess: (page) => {
                setLoading(false);
            },
            onError: () => {
                setLoading(false);
            }
        });
    };

    useEffect(() => {  
        if (message && message.type === 'success') {
            setIsSuccessful(true);

            setTimeout(() => {
                setData({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: '',
                    politica: false,
                });

                setIsSuccessful(false);
            }, 3000);
        }
    }, [message]);
    
    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { 
                x: "20%"
            },
            {
                x: "3%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(imageRef.current, 
        {
            rotation: 16
        },
        {
            rotation: 21,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative pt-10 mb-20 md:mb-30">
            {isHome && (
                <img ref={imageRef} src={content.imagem_mobile} alt={content.titulo} className="absolute -top-50 -left-50 w-[24em] drop-shadow-2xl" />
            )}

            <div className="container max-w-large">
                <LetterReveal className="font-secondary text-custom-orange text-center text-5xl font-black leading-tight uppercase" text={content.titulo} element="h2" />
                <h4 className="text-5xl text-center mb-20">{content.subtitulo}</h4>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="nome" className="inline-block 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2">Nome completo</label>
                            <input type="text" name="nome" value={data.nome} onChange={handleChange} placeholder="Seu nome" className="w-full h-12 px-0 2xl:text-xl border-0 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"  />
                            {errors.nome && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.nome}</p>}
                        </div>

                        <div className="w-full lg:w-1/2">
                            <label htmlFor="email" className="inline-block 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2">Email</label>
                            <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Seu e-mail" className="w-full h-12 px-0 2xl:text-xl border-0 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70" />
                            {errors.email && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="telefone" className="inline-block 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2">Telefone</label>
                            <InputMask type="text" name="telefone" mask="(__) _____-____" replacement={{ _: /\d/ }} value={data.telefone} onChange={handleChange} placeholder="(DDD) + número" className="w-full h-12 px-0 2xl:text-xl border-0 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70" />
                            {errors.telefone && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.telefone}</p>}
                        </div>

                        <div className="w-full lg:w-1/2">
                            <label htmlFor="assunto" className="inline-block 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2">Assunto</label>
                            <input type="text" name="assunto" value={data.assunto} onChange={handleChange} placeholder="Sobre o que quer falar" className="w-full h-12 px-0 2xl:text-xl border-0 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"  />
                            {errors.assunto && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.assunto}</p>}
                        </div>
                    </div>
                    
                    <div className="mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="mensagem" className="inline-block 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2">Mensagem</label>
                            <textarea name="mensagem" value={data.mensagem} onChange={handleChange} placeholder="Escreva aqui..." className="w-full h-40 2xl:h-48 resize-none px-0 2xl:text-xl border-0 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70" />
                            {errors.mensagem && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.mensagem}</p>}
                        </div>
                    </div>

                    <div className="mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row justify-center">
                        <div className="">
                            <label className="flex items-center">
                                <label className="relative flex">
                                    <input type="checkbox" name="politica" checked={data.politica} onChange={handleChange} className="peer w-5 h-5 rounded-full bg-white border-neutral-600 checked:bg-white checked:border-neutral-600 checked:bg-[length:0_0] checked:hover:bg-white checked:hover:border-neutral-600 checked:focus:bg-white checked:focus:border-neutral-600 !outline-0 !ring-0 !ring-offset-0" />
                                    <span className="peer-checked:content-[''] peer-checked:absolute peer-checked:inset-1 rounded-full peer-checked:bg-primary" />
                                </label>

                                <span className="text-neutral-600 ml-2">Li e concordo com a <Link href={route('Politicas.privacidade')} className="underline" target="_blank" rel="noopener noreferrer">Política de Privacidade</Link></span>
                            </label>
                            {errors.politica && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.politica}</p>}
                        </div>
                    </div>

                    <div className="mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row">
                        <button
                            type="submit"
                            className="relative px-8 py-3 w-fit mx-auto lg:text-xl 2xl:text-2xl bg-primary text-white text-center font-semibold rounded-full whitespace-nowrap transition-all hover:bg-secondary"
                        >
                            {!loading ? (
                                'Enviar mensagem'
                            ) : (
                                <>
                                    <div role="status" className="absolute inset-0 flex justify-center items-center">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <span className="opacity-0">Enviar mensagem</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {isSuccessful && (
                <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white pointer-events-none animate-fade-in-down`}>
                    <AnimatedCheckMark />

                    <h2 className="text-primary text-4xl text-center font-semibold mt-4 mb-2">Sucesso!</h2>
                    <h4 className="font-secondary text-tertiary text-2xl text-center">Sua mensagem foi enviada.</h4>
                </div>
            )}
        </section>
    );
};