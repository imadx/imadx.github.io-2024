import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        shark: {
          "50": "#f4f6f7",
          "100": "#e3e7ea",
          "200": "#cbd3d6",
          "300": "#a6b4ba",
          "400": "#7a8c96",
          "500": "#5f717b",
          "600": "#515f69",
          "700": "#465058",
          "800": "#3e454c",
          "900": "#373d42",
          "950": "#212529",
        },
      },
    },
  },
  plugins: [],
};
export default config;
