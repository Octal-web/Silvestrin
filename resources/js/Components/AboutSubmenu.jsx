import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export const AboutSubmenu = ({ isMenuOpen, isHeaderVisible, menuRef }) => {
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (isMenuOpen) {
            setVisible(true);
            setHeight(containerRef.current.scrollHeight);
            requestAnimationFrame(() => {
                if (containerRef.current) {
                    setHeight(containerRef.current.scrollHeight);
                }
            });
        } else {
            setHeight(0);
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isMenuOpen]);

    if (!visible && !isMenuOpen) return null;

    return (
        <div
            ref={menuRef}
            className={`w-full lg:fixed lg:right-1/2 lg:translate-x-1/2 top-244 lg:w-screen lg:bg-primary lg:shadow-md overflow-hidden transition-[height,transform] text-sm md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-bold z-10 text-white duration-300 ${isHeaderVisible ? "" : " -translate-y-full"}`}
            style={{ height: `${height}px` }}
        >
            <div
                ref={containerRef}
                className="flex flex-col text-center lg:flex-row lg:items-center lg:container lg:max-w-small lg:py-10"
            >
                <Link
                    href={route("Institucional.index")}
                    className="py-5 lg:py-0 lg:pr-12 lg:border-r lg:border-r-white"
                >
                    A Silvestrin
                </Link>

                <Link
                    href={route("Institucional.sustentabilidade")}
                    className="hover:brightness-90 lg:pl-12"
                >
                    Responsabilidade Socioambiental
                </Link>
            </div>
        </div>
    );
};
