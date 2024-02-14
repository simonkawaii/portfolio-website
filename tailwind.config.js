/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: "JetBrains Mono",
      },
      colors: {
        accent: {
          DEFAULT: "#e62441",
          opposite: "#11EE9F",
        },
        primary: "#3011EE",
        secondary: "#CFEE11",
        black: "#111111",
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
    animation: {
      sidetoside: "slide 0.5s ease-in-out  ",
    },
    keyframes: {
      slide: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%,75%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
      },
    },
  },
  plugins: [],
};
