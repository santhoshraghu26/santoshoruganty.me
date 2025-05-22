import CONFIG from './gitprofile.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    darkTheme: 'black', // 👈 tells DaisyUI which theme is considered 'dark'
    themes: [
      ...CONFIG.themeConfig.themes,
      { procyon: CONFIG.themeConfig.customTheme },
    ],
  },
};
