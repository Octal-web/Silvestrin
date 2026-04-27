import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

import Lenis from "@studio-freight/lenis";

import { CookieModal } from "@/Components/CookieModal";
import { MenuItem } from "@/Components/MenuItem";

const DefaultLayout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const {
        controller,
        action,
        pagina,
        dadosGerais,
        conteudo,
        notifyCookie,
        rejectCookie,
    } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
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

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
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
        {
            name: "Sobre",
            route: "Institucional.index",
            controller: "Institucional",
            external: false,
        },
        {
            name: "Produtos",
            route: "Produtos.marcas",
            controller: "Produtos",
            external: false,
            submenu: "Produtos",
        },
        {
            name: "Cultivo",
            route: "https://google.com",
            controller: "Cultivos",
            external: true,
        },
        { name: "Euro Company", route: "https://google.com", external: true },
        {
            name: "Transportadora",
            route: "Transportadora.index",
            controller: "Transportadora",
            external: false,
        },
        {
            name: "Contato",
            route: "Contato.index",
            controller: "Contato",
            external: false,
        },
    ];

    const emails = dadosGerais.emails.split("\n").map((line) => {
        const [label, value] = line.split(":").map((s) => s.trim());
        return { label, value };
    });

    return (
        <>
            <Head>
                <title>{pagina.titulo}</title>
                <meta name="description" content={pagina.descricao} />

                <meta name="twitter:card" content="summary" />

                <meta property="og:url" content={window.location.pathname} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={pagina.tituloCompartilhamento}
                />
                <meta
                    property="og:description"
                    content={pagina.descricaoCompartilhamento}
                />
                <meta property="og:image" content={pagina.imagem.endereco} />
                <meta property="og:image:type" content={pagina.imagem.tipo} />
                <meta
                    property="og:image:width"
                    content={pagina.imagem.largura}
                />
                <meta
                    property="og:image:height"
                    content={pagina.imagem.altura}
                />

                <meta name="robots" content="index, follow" />

                <link rel="icon" href={`/favicon.ico`} type="image/x-icon" />
            </Head>
            <header
                className={`header fixed top-0 left-0 right-0 bg-primary shadow-sm lg:shadow-none transition-all duration-300 ease-in-out z-20 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"} ${!isAtTop && isVisible ? "shadow-md" : ""} after:absolute after:top-full after:left-0 after:right-0 after:h-1.5 after:bg-secondary`}
            >
                <div
                    className={`fixed inset-0 bg-black md:hidden duration-300 ease-out ${isMenuOpen ? "opacity-50" : "opacity-0 h-0"}`}
                    onClick={() => {
                        setIsMenuOpen(false);
                    }}
                ></div>
                <div className="container max-w-large">
                    <div className="flex items-center justify-between">
                        <div className="relative z-[1] flex items-center justify-between w-full my-3 md:my-5 2xl:my-7">
                            <h1 className="flex items-center">
                                <Link
                                    href={route("Home.index")}
                                    className="flex items-center"
                                >
                                    <img
                                        src={`/site/img/logo.png`}
                                        alt="Logo"
                                        className="block max-xl:max-w-40 max-w-[100%] -mb-16 -mt-6"
                                    />
                                </Link>
                            </h1>

                            <div
                                className={`fixed lg:relative bg-secondary lg:bg-transparent left-0 top-0 py-10 z-20 lg:py-0 ${!isMenuOpen && "max-lg:-translate-y-full"} lg:left-auto lg:top-auto flex flex-col lg:flex-row lg:items-center justify-center lg:justify-end w-full min-h-screen lg:min-h-fit lg:my-0.5 2xl:my-1.5 transition-all ease-out duration-500`}
                            >
                                <nav className="relative">
                                    <ul className="flex flex-col lg:flex-row items-center lg:justify-center gap-5 lg:gap-2 2xl:gap-8 relative">
                                        {menuItems.map((item, index) => (
                                            <MenuItem
                                                key={index}
                                                item={item}
                                                controller={controller}
                                                isHeaderVisible={isVisible}
                                            />
                                        ))}

                                        <li>
                                            <Link
                                                href={
                                                    route("Home.index", {
                                                        orcamento: true,
                                                    }) + "#contato"
                                                }
                                                className="block px-8 py-2 gap-2 rounded-full bg-secondary text-white text-sm md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-bold ring-1 ring-white transition-all hover:bg-white hover:text-tertiary hover:ring-secondary hover:shadow truncate"
                                            >
                                                Trabalhe Conosco
                                            </Link>
                                        </li>

                                        <li className="ml-2">
                                            <a
                                                href="htpps://google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-8 py-2 gap-2 rounded-full bg-white text-secondary text-sm md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-bold ring-1 ring-white transition-all hover:bg-white hover:text-tertiary hover:ring-secondary hover:shadow"
                                            >
                                                Rastreamento
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <button
                                className="lg:hidden relative z-30"
                                onClick={toggleMenu}
                            >
                                <div className="flex items-center">
                                    <div className="relative w-7 h-[21px]">
                                        <div
                                            className={`absolute top-0 bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? "rotate-45 !top-[10px]" : ""}`}
                                            style={{
                                                transitionDelay: isMenuOpen
                                                    ? "0ms, 400ms"
                                                    : "0ms",
                                                transitionProperty:
                                                    "top, transform",
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute top-[9px] bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? "scale-x-0 !top-[10px]" : ""}`}
                                            style={{
                                                transitionDelay: isMenuOpen
                                                    ? "0ms, 400ms"
                                                    : "0ms",
                                                transitionProperty:
                                                    "top, transform",
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute bottom-0 bg-white h-[3px] w-7 transition-all duration-300 ${isMenuOpen ? "-rotate-45 bottom-[8px]" : ""}`}
                                            style={{
                                                transitionDelay: isMenuOpen
                                                    ? "0ms, 400ms"
                                                    : "0ms",
                                                transitionProperty:
                                                    "bottom, transform",
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
                <div className="container max-w-large">
                    <div className="flex items-center max-sm:flex-col justify-between lg:items-start sm:gap-8 pt-7 pb-7 sm:pt-0 lg:pt-8 lg:pb-12">
                        <div className="w-1/5">
                            <img src={`/site/img/logo.png`} alt="Logo" />
                        </div>

                        <div className="w-4/5">
                            <div className="flex flex-col-reverse lg:flex-row 2xl:ml-20 lg:justify-between lg:items-center pt-10 pb-4">
                                <nav>
                                    <ul className="flex flex-wrap max-sm:gap-y-4 gap-8 2xl:gap-16 mt-4 lg:mt-0 justify-center">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                {item.external ? (
                                                    <a
                                                        href={item.route}
                                                        className="relative block text-white font-bold transition-opacity hover:opacity-70 text-sm xl:text-base"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={route(item.route)}
                                                        className="relative block text-white font-bold transition-opacity hover:opacity-70 text-sm xl:text-base"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                <nav className="flex items-center justify-center">
                                    <p className="text-xs text-white font-light mr-4">
                                        Nossas redes:
                                    </p>
                                    <ul className="flex items-center gap-3">
                                        <li>
                                            <a
                                                href="https://www.facebook.com/silvestrin.frutas"
                                                className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="/site/img/facebook-icon.png"
                                                    alt="Facebook icon"
                                                    className="block"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.instagram.com/silvestrin.frutas/"
                                                className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="/site/img/instagram-icon.png"
                                                    alt="Instagram icon"
                                                    className="block"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/empresas-silvestrin"
                                                className="flex items-center justify-center w-8 h-8 border border-white rounded-full transition-all hover:opacity-80"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="/site/img/linkedin-icon.png"
                                                    alt="Linkedin icon"
                                                    className="block"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <ul className="flex flex-wrap text-center justify-center lg:justify-start md:gap-5 xl:gap-30 pt-4 2xl:ml-20">
                                <li>
                                    <p className="text-white text-sm font-light leading-tight">
                                        <span className="font-bold mr-3">
                                            Matriz:
                                        </span>
                                        {dadosGerais.endereco}
                                    </p>
                                </li>

                                {emails.slice(0, 2).map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-white text-sm font-light leading-tight flex"
                                    >
                                        <div className="font-bold mr-3">
                                            {item.label}:
                                        </div>
                                        <div className="font-light">
                                            {item.value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-tertiary py-3 lg:py-6">
                    <div className="container max-w-large">
                        <div className="grid xl:grid-cols-3 gap-3 xl:gap-16 items-center">
                            <div className="flex flex-wrap justify-center gap-2">
                                <Link
                                    href={route("Politicas.privacidade")}
                                    className="text-white text-sm font-medium transition-all opacity-70 hover:opacity-100 border-r-2 pr-2"
                                >
                                    Política de Privacidade
                                </Link>

                                <Link
                                    href={route("Politicas.privacidade")}
                                    className="text-white text-sm font-medium transition-all opacity-70 hover:opacity-100 border-r-2 pr-2"
                                >
                                    Política de cookies
                                </Link>

                                <a
                                    href={route("Politicas.privacidade")}
                                    className="text-white text-sm font-medium transition-all opacity-70 hover:opacity-100"
                                >
                                    Definições de cookies
                                </a>
                            </div>

                            <span className="text-white text-xs sm:text-sm text-center opacity-70 mb-5 md:mb-0">
                                © {new Date().getFullYear()} Silvestrin | Todos
                                os direitos reservados.
                            </span>

                            <div className="flex justify-center lg:justify-end items-center gap-4">
                                <span className="text-white text-xs sm:text-sm opacity-70">
                                    Desenvolvido por:{" "}
                                </span>
                                <img
                                    src={`/site/img/8poroito-logo.png`}
                                    className="opacity-50"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {!notifyCookie || !rejectCookie ? (
                <CookieModal
                    acceptCookies={acceptCookies}
                    visible={notifyCookie ? false : true}
                />
            ) : null}
        </>
    );
};

export default DefaultLayout;
