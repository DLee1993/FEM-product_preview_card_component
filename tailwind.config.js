/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "Fraunces": ['Fraunces', "serif"],
                "Montserrat": ['Montserrat', "sans-serif"]
            },
            colors: {
                darkCyan: "hsl(158, 36%, 37%)",
                cream: "hsl(30, 38%, 92%)",
                darkBlue: "hsl(212, 21%, 14%)",
                greyBlue: "hsl(228, 12%, 48%)",
                white: "hsl(0, 0%, 100%)",
            },
            backgroundImage: {
                'desktop': "url('./images/image-product-desktop.jpg')",
                'mobile': "url('./images/image-product-mobile.jpg')",
              }
        },
    },
    plugins: [],
};
