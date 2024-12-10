/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      },
      colors:{
        primary:'#003865'
      },
      screens:{
        sm: '760px', 
        md: '880px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
      
    },

  },
  plugins: [
    require('preline/plugin'),
  ],
};
