/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B7280',
        skin: '#F5CBA7',
        dark: '#1F2937',
        light: '#F9FAFB',
      },
    },
  },
  plugins: [],
}

