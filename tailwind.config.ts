import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EF",
          dark: "#F3EBDF",
        },
        sand: "#EFE3D3",
        clay: {
          DEFAULT: "#D89A78",
          light: "#E7B79C",
          dark: "#C17F5C",
        },
        espresso: {
          DEFAULT: "#4B4038",
          light: "#6B5D51",
        },
        moss: "#8A9A7E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        logo: ["var(--font-montecarlo)", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
