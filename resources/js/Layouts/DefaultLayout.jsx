import React, { useState, useEffect, useRef } from 'react';
import { usePage, Link, Head } from '@inertiajs/react';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CookieModal } from '@/Components/CookieModal';
import { MenuItem } from '@/Components/MenuItem';

const DefaultLayout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);
    const { controller, action, pagina, dadosGerais, conteudo, notifyCookie, rejectCookie } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);    
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            setIsAtTop(currentScrollY <= 20);
            
            if (!isMenuOpen) {
                if (currentScrollY > 200) {
                    setIsVisible(currentScrollY < lastScrollY);
                } else {
                    setIsVisible(true);
                }
            }
            
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const acceptCookies = () => {
        setTrackingEnabled(true);
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (notifyCookie || trackingEnabled) {
    //             const script = document.createElement('script');
    //             script.innerHTML = '
    //                 (function(w,d,s,l,i){
    //                     w[l]=w[l]||[];
    //                     w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    //                     var f=d.getElementsByTagName(s)[0],
    //                         j=d.createElement(s),
    //                         dl=l!='dataLayer'?'&l='+l:'';
    //                     j.async=true;
    //                     j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    //                     f.parentNode.insertBefore(j,f);
    //                 })(window,document,'script','dataLayer','GTM-NPCZ3MTX');
    //             ';
    //             document.head.appendChild(script);

    //             const noscript = document.createElement('noscript');
    //             noscript.innerHTML = '
    //                 <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPCZ3MTX" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    //             ';
    //             document.body.appendChild(noscript);
    //         }
    //     }, 100);
    // }, [notifyCookie, trackingEnabled]);

    const menuItems = [
        { name: "Quem Somos", route: "Institucional.index", controller: "Institucional", external: false },
        { name: "Produtos e Serviços", route: "Produtos.marcas", controller: "Produtos", external: false, submenu: 'Produtos'},
        { name: "EuroCompany", route: "https://google.com", external: true },
        { name: "Transportadora", route: "Transportadora.index", controller: "Contato", external: false },
        { name: "Contato", route: "Contato.index", controller: "Contato", external: false },
    ];

    const companyData = dadosGerais.emails
        .split("\n")
        .map(line => {
            const [label, value] = line.split(":").map(s => s.trim()); 
            return { label, value };
        });

    const branches = dadosGerais.filiais
        .split("\n")
        .map(line => {
            const [label, value] = line.split(":").map(s => s.trim()); 
            return { label, value };
        });

    return (
        <>
            <Head>
                <title>{pagina.titulo}</title>
                <meta name="description" content={pagina.descricao} />

                <meta name="twitter:card" content="summary"/>

                <meta property="og:url" content={window.location.pathname} />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={pagina.tituloCompartilhamento} />
                <meta property="og:description" content={pagina.descricaoCompartilhamento} />
                <meta property="og:image" content={pagina.imagem.endereco} />
                <meta property="og:image:type" content={pagina.imagem.tipo} />
                <meta property="og:image:width" content={pagina.imagem.largura} />
                <meta property="og:image:height" content={pagina.imagem.altura} />

                <meta name="robots" content="index, follow"/>

                <link rel="icon" href={`/favicon.ico`} type="image/x-icon" />
            </Head>
            <header className={`header fixed top-0 left-0 right-0 bg-primary shadow-sm md:shadow-none z-[5] transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'} ${!isAtTop && isVisible ? 'shadow-md' : ''} after:absolute after:top-full after:left-0 after:right-0 after:h-1.5 after:bg-secondary`}>
                <div className={`fixed inset-0 bg-black md:hidden duration-300 ease-out ${isMenuOpen ? 'opacity-50' : 'opacity-0 h-0'}`} onClick={() => {setIsMenuOpen(false)}}></div>
                <div className="container max-w-large">
                    <div className="flex items-center justify-between">
                        <div className="relative z-[1] flex items-center justify-between w-full my-3 md:my-5 2xl:my-7">
                            <h1 className="flex items-center">
                                <Link href={route('Home.index')} className="flex items-center">
                                    <img src={`/site/img/logo.png`} alt="Logo" className="block max-sm:max-w-40 max-w-[100%] -mb-16 -mt-6" />
                                </Link>
                            </h1>

                            <div className={`fixed md:relative bg-secondary md:bg-transparent left-0 top-0 ${!isMenuOpen && 'max-md:-translate-y-full'} md:left-auto md:top-auto flex flex-col md:flex-row md:items-center justify-center md:justify-end w-full h-5/6 md:h-auto md:my-0.5 2xl:my-1.5 transition-all ease-out duration-500`}>
                                <nav className="relative">
                                    <ul className="flex flex-col md:flex-row items-center md:justify-center gap-5 md:gap-2 xl:gap-8 relative">
                                        {menuItems.map((item, index) => (
                                            <MenuItem key={index} item={item} controller={controller} isHeaderVisible={isVisible} />
                                        ))}

                                        <li>
                                            <Link
                                                href={route('Home.index', { orcamento: true }) + '#contato'}
                                                className="block px-8 py-2 gap-2 rounded-full bg-secondary text-white max-sm:text-lg 2xl:text-xl font-bold ring-1 ring-white transition-all hover:bg-white hover:text-tertiary hover:ring-secondary hover:shadow"
                                            >
                                                Trabalhe Conosco
                                            </Link>

                                        </li>

                                        <li className="-ml-2">
                                            <a
                                                href="htpps://google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-8 py-2 gap-2 rounded-full bg-secondary text-white max-sm:text-lg 2xl:text-xl font-bold ring-1 ring-white transition-all hover:bg-white hover:text-tertiary hover:ring-secondary hover:shadow"
                                            >
                                                Rastreamento
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <button className="md:hidden relative z-[2]" onClick={toggleMenu}>
                                <div className="flex items-center">
                                    <div className="relative w-7 h-[21px]">
                                        <div
                                            className={`absolute top-0 bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? 'rotate-45 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute top-[9px] bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? 'scale-x-0 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute bottom-0 bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-[8px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'bottom, transform'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="overflow-hidden pt-[95px] sm:pt-[109px] md:pt-[90px] 2xl:pt-[118px]">
                {children}
            </main>

            <footer className="relative bg-primary">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-tertiary" />
                <div className="container max-w-large">
                    <div className="flex max-sm:items-center max-sm:flex-col justify-between items-start sm:gap-8 pt-9 pb-12">
                        <div className="w-1/5">
                            <img src={`/site/img/logo.png`} alt="Logo" className="" />
                            <ul className="mt-6">
                                <li>
                                    <div className="text-white text-sm font-light leading-tight">
                                        <span className="block font-bold ">Matriz</span>
                                        VRS 813 - Km 2 - São Luiz, 3º Distrito - Farroupilha - RS
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="w-4/5">
                            <div className="flex justify-between border-b pt-10 pb-4">
                                <nav className="">
                                    <ul className="flex max-sm:flex-wrap max-sm:gap-y-4 gap-8 md:gap-16">
                                        <li>
                                            <Link href={route('Home.index')} className="text-white text-sm font-medium transition-all hover:opacity-70">Home</Link>
                                        </li>

                                        <li>
                                            <Link href={route('Institucional.index')} className="text-white text-sm font-medium transition-all hover:opacity-70">Quem somos</Link>
                                        </li>

                                        <li>
                                            <Link href={route('Home.index')} className="text-white text-sm font-medium transition-all hover:opacity-70">Nossas Marcas</Link>
                                        </li>

                                        <li>
                                            <Link href={route('Home.index')} className="text-white text-sm font-medium transition-all hover:opacity-70">Contato</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <nav className="flex items-center">
                                    <p className="text-xs text-white font-light mr-4">Nossas redes:</p>
                                    <ul className="flex items-center gap-3">
                                        <li>
                                            <a href="https://www.facebook.com/silvestrin.frutas" className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                                <img src="/site/img/facebook-icon.png" alt="Facebook icon" className="block" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/silvestrin.frutas/" className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                                <img src="/site/img/instagram-icon.png" alt="Instagram icon" className="block" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.linkedin.com/company/empresas-silvestrin" className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                                <img src="/site/img/linkedin-icon.png" alt="Linkedin icon" className="block" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="border-b pt-3 pb-4">
                                <nav className="">
                                    <ul className="flex max-sm:flex-wrap justify-between max-sm:gap-y-4 md:gap-8 2xl:gap-16 text-white text-sm">
                                        <li>
                                            <div className="leading-tight">Telefone</div>
                                            <div className="font-light">{dadosGerais.telefone}</div>
                                        </li>

                                        {companyData.map((item, index) => (
                                            <li key={index}>
                                                <div className="leading-tight">{item.label}</div>
                                                <div className="font-light">{item.value}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className="pt-4">
                                <nav className="">
                                    <ul className="flex max-sm:flex-wrap justify-between max-sm:gap-y-4 md:gap-4 text-white text-xs 2xl:text-sm max-2xl:tracking-tight">
                                        {branches.map((branch, index) => (
                                            <li key={index} className="tracking-tight">
                                                <span className="leading-tight font-bold">
                                                    {branch.label}:
                                                </span>
                                                <span className="font-light"> {branch.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-tertiary py-6">
                    <div className="container max-w-large">
                        <div className="xl:grid xl:grid-cols-3 gap-16 items-center">
                            <Link href={route('Politicas.privacidade')} className="text-white text-sm font-medium transition-all opacity-70 hover:opacity-100">Política de Privacidade</Link>

                            <span className="text-white text-xs sm:text-sm text-center opacity-70 mb-5 md:mb-0">
                                © {new Date().getFullYear()} Silvestrin | Todos os direitos reservados.
                            </span>

                            <div className="flex justify-end items-center gap-4">
                                <span className="text-white text-xs sm:text-sm opacity-70">Desenvolvido por: </span>
                                <img src={`/site/img/8poroito-logo.png`} className="opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {!notifyCookie || !rejectCookie ? (
                <CookieModal acceptCookies={acceptCookies} visible={notifyCookie ? false : true} />
            ) : null}
        </>
    );
};

export default DefaultLayout;