/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#F1EFE7ff",
        bgbase: "#FDFDFCff",
        textblack: "#0E121Dff",
      },
      fontFamily: {
        hero: ['"Space Grotesk"'],
      },
    },
  },
  plugins: [],
};
