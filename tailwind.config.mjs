import adech from "@adech/themes/superior/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [adech],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bellota: ["Bellota Text", "sans-serif"],
    },
  },
  plugins: [],
};
