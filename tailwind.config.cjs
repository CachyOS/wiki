const starlightPlugin = require('@astrojs/starlight-tailwind');

// Generated color palettes
const accent = { 200: '#82dccc', 600: '#007d6f', 900: '#003c34', 950: '#002b25' };
const gray = {
  100: '#f2f6ff',
  200: '#e6eeff',
  300: '#b8c2d7',
  400: '#798bb2',
  500: '#47577b',
  700: '#283758',
  800: '#182545',
  900: '#111826',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: '[data-theme="dark"]',
  lightMode: '[data-theme="light"]',
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
