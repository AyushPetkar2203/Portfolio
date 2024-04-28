/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: { max: "640px" },
        // md: { max: "768px" },
        // lg: { max: "1024px" },
        xs: { max: "640px" },
        // => @media (min-width: 576px) { ... }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Define other custom animations if needed
      },
    },
  },
  plugins: [],
};
