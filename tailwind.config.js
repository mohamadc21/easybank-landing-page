/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Public Sans', ['sans-serif']]
      },
      colors: {
        darkblue: 'hsl(233,26%,24%)',
        limegreen: 'hsl(136,65%,51%)',
        brightcyan: 'hsl(192,70%,51%)',
        grayishblue: 'hsl(233,8%,62%)',
        lightgrayishblue: 'hsl(220,16%,96%)',
        verylightgray: 'hsl(0,0%,98%)',
      }
    },
  },
  plugins: [],
}

// ### Primary

// - Grayish Blue: hsl(233, 8%, 62%)
// - Light Grayish Blue: hsl(220, 16%, 96%)
// - Very Light Gray: hsl(0, 0%, 98%)
// - White: hsl(0, 0%, 100%)