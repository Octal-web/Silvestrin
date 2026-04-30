import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['gotham-narrow', ...defaultTheme.fontFamily.sans],
                admin: ['Inter', 'sans-serif'],
                secondary: ['museo-sans-display', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '5%',
                screens: {
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                },
            },
            maxWidth: {
                'small': '58rem',
                'medium': '86rem',
                'large': '116rem',
            },
            spacing: {
                '15': '3.75rem',
                '30': '7rem',
                '40': '9.375rem',
                '50': '12.5rem',
            },
            colors: {
                'primary': '#01A259',
                'secondary': '#A7CC71',
                'tertiary': '#037240',
                'custom-green': '#3D7B5F',
                'custom-blue': '#2381C8',
                'custom-red': '#B52C47',
                'custom-orange': '#F68200',
                'custom-gray': '#828281'
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            keyframes: {
                'slide-in-bottom': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'fade-in-down': {
                    '0%': { opacity: '0', transform: 'translate3d(0,-100px,0)' },
                    '100%': { opacity: '1', transform: 'none' },
                },
                'fade-out-down': {
                    '0%': { opacity: '1', transform: 'none' },
                    '100%': { opacity: '0', transform: 'translate3d(0, 100px,0)' },
                }
            },
            animation: {
                'slide-in-bottom': 'slide-in-bottom 300ms ease-out',
                'fade-in-down': 'fade-in-down 200ms linear',
                'fade-out-down': 'fade-out-down 200ms linear'
            },
        },
    },

    plugins: [
        forms,
        function({ addComponents }) {
            addComponents({
                'p + p': {
                    marginTop: '1rem',
                },
                'ul > li > p': {
                    display: 'contents',
                },
                'strong, b': {
                    fontWeight: 'bold'
                }
            })
        }
    ],
};