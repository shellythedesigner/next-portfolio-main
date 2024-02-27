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
        light: {
          primary: {
            base: "#555555",
            onBase: "#FFFFFF",
            container: "#DBD7D2",
            onContainer: "#555555",
          },
          secondary: {
            base: "#B4B4B8",
            onBase: "#FFFFFF",
            container: "#F2EFE5",
            onContainer: "#2b2b2b",
          },
          tertiary: {
            base: "#7D5260",
            onBase: "#FFFFFF",
            container: "#FFD8E4",
            onContainer: "#31111D",
          },
          error: {
            base: "#B3261E",
            onBase: "#FFFFFF",
            container: "#F9DEDC",
            onContainer: "#410E0B",
          },
          bg: {
            base: "#F5F5F5",
            onBase: "#F5F5F5",
          },
          outline: {
            base: "#696969",
            container: "#E5E4E2",
            onContainer: "#555555",
          },
        },
        dark: {
          primary: {
            base: "#F2EFE5",
            onBase: "#555555",
            container: "#B4B4B8",
            onContainer: "#C0C0C0",
          },
          secondary: {
            base: "#F5F5F5",
            onBase: "#555555",
            container: "#696969",
            onContainer: "#E5E4E2",
          },
          tertiary: {
            base: "#EFB8C8",
            onBase: "#492532",
            container: "#633B48",
            onContainer: "#FFD8E4",
          },
          error: {
            base: "#F2B8B5",
            onBase: "#601410",
            container: "#8C1D18",
            onContainer: "#F9DEDC",
          },
          bg: {
            base: "#1C1B1F",
            onBase: "#E5E4E2",
          },
          outline: {
            base: "#848482",
            container: "#696969",
            onContainer: "#E5E4E2",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
