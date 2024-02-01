/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: "JetBrains Mono",
      },
      colors: {
        accent: "#e62441",
        code: {
          pink: "#d767c2",
          blue: "#3badf1",
          darkBlue: "#5193cc",
          green: "#41c19e",
          light: "#a1e1fa",
          yellow: "#d7ad07",
          orange: "#d38762",
          brown: "#ded081",
        },
      },
    },
  },
  plugins: [],
};
