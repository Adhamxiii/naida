import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          0: "#F8F5FF",
          25: "#D3C4FC",
          50: "#B59CFA",
          100: "#9774F7",
          200: "#7A4DF5",
          300: "#E730CA",
        },
        greyScale: {
          0: "#F8F9FB",
          25: "#F6F8FA",
          50: "#ECEFF3",
          100: "#DFE1E6",
          200: "#C1C7CF",
          300: "#A4ABB8",
          400: "#808897",
          500: "#666D80",
          600: "#353849",
          700: "#272835",
          800: "#1A1B25",
          900: "#0D0D12",
        },
        warning: {
          0: "#FFF6E0",
          25: "#F9ECCB",
          50: "#FBD982",
          100: "#FFBD4C",
          200: "#956321",
          300: "#5B3D1E",
        },
        error: {
          0: "#FEEFF2",
          25: "#FADAE1",
          50: "#ED8296",
          100: "#DF1C41",
          200: "#95122B",
          300: "#710E21",
        },
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
