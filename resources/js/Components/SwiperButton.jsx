import { forwardRef } from "react";

export const SwiperButton = forwardRef(({ isPrev = false, onClick, className = '' }, ref) => {
    return (
        <button
            ref={ref}
            onClick={onClick}
            className={`group size-16 2xl:size-20 flex items-center justify-center bg-white rounded-full shadow-md transition ease-out duration-200 disabled:opacity-60 hover:bg-primary ${className}`}
        >
            <ArrowIcon
                className={`fill-primary opacity-80 ${isPrev && "rotate-180"} transition-all group-hover:opacity-100 group-hover:fill-white`}
            />
        </button>
    );
});

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
