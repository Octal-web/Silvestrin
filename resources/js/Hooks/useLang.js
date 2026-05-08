import { usePage } from "@inertiajs/react";

const translations = {
    pt: {
        503: "Desculpe, estamos em manutenção. Volte em breve.",
        500: "Ops, algo deu errado em nossos servidores.",
        404: (url) =>
            `Desculpe, a página que você está procurando "<strong>${url}</strong>" não foi encontrada.`,
        403: (url) =>
            `Você não tem permissão para acessar esta página: <strong>${url}</strong>.`,
        back: "Voltar",
    },

    en: {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Oops, something went wrong on our servers.",
        404: (url) =>
            `Sorry, the page you are looking for "<strong>${url}</strong>" could not be found.`,
        403: (url) =>
            `Sorry, you are forbidden from accessing this page: <strong>${url}</strong>.`,
        back: "Back",
    },

    es: {
        503: "Lo sentimos, estamos en mantenimiento. Vuelve pronto.",
        500: "Ups, algo salió mal en nuestros servidores.",
        404: (url) =>
            `Lo sentimos, la página que buscas "<strong>${url}</strong>" no fue encontrada.`,
        403: (url) =>
            `No tienes permiso para acceder a esta página: <strong>${url}</strong>.`,
        back: "Volver",
    },
};

export function useLang() {
    const { language } = usePage().props;

    return (key, value = null) => {
        const translation = translations[language]?.[String(key)];

        if (typeof translation === "function") {
            return translation(value);
        }

        return translation || key;
    };
}
