import adech from "@adech/themes/superior/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [adech],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bellota: ["Bellota Text", "sans-serif"],
      bebas: ["Bebas Neue", "ui-sans-serif", "system-ui"],
    },
    boxShadow: {
      barShadow: "#121212 2px 2px 5px 0px",
      barHardShadow: "#121212 4px 4px 5px 0px",
    },
  },
  plugins: [],
};
