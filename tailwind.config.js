/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{'darkest': '#10197A',
            'whiteblue' : '#DCE4FF',
            'lightyellow': '#FEFB96'
    },
    borderRadius: {'lg': '10px'},
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
      },
    },
    
  },
  plugins: [require('flowbite/plugin')],
}
