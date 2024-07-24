const customColors = {
  forest: {
    DEFAULT: "#58a06e",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: customColors.forest,
      },
    },
    fontFamily: {
      Bungee: ["Bungee", "sansSerif"],
    },
  },
  plugins: [],
};
