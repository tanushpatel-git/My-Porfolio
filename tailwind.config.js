/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'anton': ['Anton', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'hero-bg': '#0e0e0e',
                'hero-text': '#b0b0b0',
            }
        },
    },
    plugins: [],
}
