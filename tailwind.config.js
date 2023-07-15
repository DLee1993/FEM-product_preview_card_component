/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "Hanken-Grotesk": ["Hanken Grotesk", "Sans-serif"],
            },
            colors: {
                lightRed: "hsl(0, 100%, 67%)",
                orangeYellow: "hsl(39, 100%, 56%)",
                greenTeal: "hsl(166, 100%, 37%)",
            },
        },
    },
    plugins: [],
};
