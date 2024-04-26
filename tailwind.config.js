/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            dropShadow: {
                "3xl": "0 0px 5px rgba(239, 68, 68, .5)",
            },
        },
    },
    plugins: [],
};
