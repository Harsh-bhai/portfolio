/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 2s ease-in-out",
        fadein5sec: "fadein5sec 2s ease-in",
        translateyoval: "translateyoval 1s ease-in-out"
      },

      keyframes: {
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
        }
      }
    },
  },
  plugins: [],
}