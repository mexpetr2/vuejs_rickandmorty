/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //body color
        color0: '#0f172a',
        //dark-grey
        color1: '#1e293b',
        // very-light-blue
        color2: '#67E8F9',
        // light-blue
        color3: '#1F4B5F',
        // light-black
        color4: '#0F172A'
      }
    }
  },
  plugins: []
}
