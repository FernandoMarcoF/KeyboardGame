/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#2c2e34",
        mainColor: "#9ed072",
        cursorColor: "#f38c71",
        subColor: "#e7c664",
        subAltColor: "#232429",
        textColor: "#e2e2e3",
        errorColor: "#fc5d7c",
        errorExtraColor: "#ecac6a",
        colorfulErrorColor: "#fc5d7c",
        colorfulErrorExtraColor: "#ecac6a",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
