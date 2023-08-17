const starlightPlugin = require('@astrojs/starlight-tailwind');
const colors = require('tailwindcss/colors');

// Generated color palettes
const accent = { 200: '#e6c389', 600: '#8d6300', 900: '#442d00', 950: '#322000' };
const gray = { 100: '#f2f6ff', 200: '#e6eeff', 300: '#b8c2d7', 400: '#798bb2', 500: '#47577b', 700: '#283758', 800: '#182545', 900: '#111826' };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
