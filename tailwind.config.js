/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      backgroundImage: {
        bulb: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 0, 0.60) 0%, rgba(253, 253, 137, 0.00) 100%)",
        bg_2: "linear-gradient(180deg, #FFFF7A 0%, #FAE04C 50%, #FFFD76 100%)",
        phase: "linear-gradient(180deg, #FFFFA8 0%, #FF0 100%)",
      },
      fontFamily: {
        comic: ["ComicSansMS", "sans-serif"],
        comicBold: ["ComicSansMSBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
