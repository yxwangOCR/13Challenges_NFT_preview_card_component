/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      Softblue: "hsl(215, 51%, 70%)",
      Cyan: "hsl(178, 100%, 50%)",
      Verydarkblue: "hsl(217, 54%, 11%)",
      VerydarkblueBG: "hsl(216, 50%, 16%)",
      VerydarkblueLine: "hsl(215, 32%, 27%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
