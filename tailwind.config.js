/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      screens: {
      'Ltablet': '1105px',
    },
      fontFamily: {
        primary:['Dancing Script', "cursive"],
        secondary:['Prompt', 'sans-serif']
      },
      fontSize:{
        xxs: ['0.5rem', '1rem'],
      },
      animation: {
        fadein: "fadein 2s ease-in-out",
        fadein3: "fadein 2s ease-in-out animation-delay:1",
        fadein5sec: "fadein5sec 2s ease-in",
        translateyoval: "translateyoval 1s ease-out",
        translateyoval2: "translateyoval2 1s ease-out",
        wipedown:"wipedown 1s ease-out",
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadein5sec: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        translateyoval: {
          "0%": { transform: 'translateY(-45rem) rotate(-12deg)' },
          "100%": { transform: 'translateY(-16rem) rotate(-12deg)' }
        },
        translateyoval2: {
          "0%": { transform: 'translateY(-45rem) ' },
          "100%": { transform: 'translateY(-14.5rem) ' }
        },
        wipedown:{
          '0%': {
            height:'0'
          },
          '100%': {
            height:'100%'
          }
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}