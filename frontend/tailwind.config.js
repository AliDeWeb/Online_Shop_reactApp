/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/components/*/*.{js,jsx}",
    "./src/pages/*/*.{js,jsx}",
    "./src/App.jsx",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        dana: "dana",
        danaBold: "danaBold",
        danaThin: "danaThin",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
