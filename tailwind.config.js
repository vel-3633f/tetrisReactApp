const customColors = {
  forest: {
    DEFAULT: "#58a06e",
  },
  border: {
    DEFAULT: "#302e2b",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: customColors.forest,
        border:customColors.border,
      },
    },
    fontFamily: {
      Bungee: ["Bungee", "sansSerif"],
    },
  },
  plugins: [],
};
