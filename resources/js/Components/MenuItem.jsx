import { useEffect, useState, useRef } from "react";
import { Link } from "@inertiajs/react";

import { BrandsSubmenu } from "./BrandsSubmenu";

export const MenuItem = ({ item, controller, isHeaderVisible }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleSubmenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <li className="relative">
            {item.external ? (
                <a
                    href={item.route}
                    className="relative block text-white font-semibold transition-opacity hover:opacity-70 p-2 max-sm:text-xl 2xl:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.name}
                </a>
            ) : Array.isArray(item.submenu) && item.submenu.length > 0 ? (
                <button
                    ref={toggleRef}
                    onClick={toggleSubmenu}
                    className="relative block text-white font-semibold transition-opacity hover:opacity-70 p-2 max-sm:text-xl 2xl:text-lg"
                >
                    {item.name}
                    <span className="ml-2 text-base">{isOpen ? "▲" : "▼"}</span>
                </button>
            ) : typeof item.submenu === "string" && item.submenu === "Produtos" ? (
                <button
                    ref={toggleRef}
                    onClick={toggleSubmenu}
                    className="relative block text-white font-semibold transition-opacity hover:opacity-70 p-2 max-sm:text-xl 2xl:text-lg"
                >
                    {item.name}
                </button>
            ) : (
                <Link href={route(item.route)} className="relative block text-white font-semibold transition-opacity hover:opacity-70 p-2 max-sm:text-xl 2xl:text-lg">
                    {item.name}
                </Link>
            )}

            {item.submenu && (
                typeof item.submenu === "string" && item.submenu === "Produtos" ? (
                    <BrandsSubmenu menuRef={menuRef} isMenuOpen={isOpen} isHeaderVisible={isHeaderVisible} />
                ) : Array.isArray(item.submenu) && item.submenu.length > 0 ? (
                    <ul
                        ref={menuRef}
                        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all z-[1] ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        {item.submenu.map((subItem, index) => (
                            <li key={index} className="border-b border-gray-200 last:border-0">
                                <Link
                                    href={`${route(item.route)}#${subItem.slug}`} 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {subItem.nome ?? subItem.slug}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null
            )}
        </li>
    );
};
