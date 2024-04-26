/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "rgb(10, 12, 16)", secondary: "rgb(99 ,102 ,241)" },
    },
  },
  plugins: [],
};
