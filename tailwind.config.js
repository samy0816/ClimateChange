import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
import daisyui from "daisyui";
import tailwindForms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbarHide, daisyui, tailwindForms],
}

