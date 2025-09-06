/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Neutral_900: `hsl(227, 75%, 14%)`,
      Neutral_800: `hsl(226, 25%, 17%)`,
      Neutral_700: `hsl(225, 23%, 24%)`,
      Neutral_600: `hsl(226, 11%, 37%)`,
      Neutral_300: `hsl(0, 0%, 78%)`,
      Neutral_200: `hsl(217, 61%, 90%)`,
      Neutral_100: `hsl(0, 0%, 93%)`,
      Neutral_0: `hsl(200, 60%, 99%)`,

      Red_400: `hsl(3, 86%, 64%)`,
      Red_500: `hsl(3, 71%, 56%)`,
      Red_700: `hsl(3, 77%, 44%)`,

      From_Dark_Gradient: `hsl(226deg 72.49% 6.11%)`,
      To_Dark_Gradient: `hsl(226.91deg 3.53% 74.9%)`,
      From_Light_Gradient: `hsl(215.29deg 73.91% 95.49%)`,
      To_Light_Gradient: `hsl(185.45deg 47.83% 95.49%)`,
    },
    fontFamily:{
     'noto': ['Noto Sans'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
