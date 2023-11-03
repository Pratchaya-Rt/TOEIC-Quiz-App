/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      spacing: {
        '150': '600px',
      },
      colors: {
        'purpleY' : '#E5CFF7'
      },
    },
  },
  plugins: [],
}