/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary-color': '#28ffef',
        'secondary-color': '#45A29E',
        'tertiary-color': '#C5C6C7',
        'quartery-color': '#1F2833',
        'gray': '#999',
        'black': '#000',
        'background-color': '#0B0C10',
      },
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  plugins: [],
}

