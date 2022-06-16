const { Container } = require('postcss');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/views/layouts/default.blade.php',
        './resources/views/menu.blade.php',
    ],

    theme:{
        colors: {
            "light_pink": "#fee2e2",
            "pink":"#fda4af",
            "grey":"#2C2828",
            "menu_background":"#fef2f2",
            "purple":"#831843",
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {

            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

        },
        container:{
            center: true,
            padding: "1rem",

        },

        fontFamily:{
            Lobster: ["Lobster, sans-serif"],
            'Patrick Hand': ["Patrick Hand, sans-serif"],
            Caveat: ["Caveat, sans-serif"],
            Pacifico: ['Pacifico, sans-serif'],
            Hurricane:['Hurricane, sans-serif']
        }
    },








    plugins: [require('@tailwindcss/forms')],

    };

