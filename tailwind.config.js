/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F5F0E8',
        ocean: '#1E6B7B',
        'ocean-dark': '#154B56',
        coral: '#E07A5F',
        palm: '#3D5A45',
        gold: '#C9A227',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        brand: ['Delmon Delicate', 'serif'],
      },
    },
  },
  plugins: [],
}
