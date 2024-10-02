/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['Sofia Sans', 'sans-serif'],  
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        one: '#808080', 
        two: '#FFFFFF', 
        three: '#F5F5F5',
        four:'#E2E5DE',
        five: '#B2BEB5',
      },
    },
   
    
  },
  plugins: [],
}

