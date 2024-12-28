import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { COLORS } from "./src/utils/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [
    nextui({
      themes: {
        light: {
          colors: COLORS,
        },
      },
    }),
  ],
};
export default config;
