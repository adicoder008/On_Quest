/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',  // Custom breakpoint for extra small screens
        '2xl': '1440px', // Override or add larger breakpoints
      },
      fontFamily: {
        arsenal: ['Arsenal', 'sans-serif'], // Add your Google Font here
      },
    },
  },
  plugins: [],
}

