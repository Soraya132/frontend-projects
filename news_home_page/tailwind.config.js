/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode:"class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

      extend: {
        fontFamily:{
          interBold:"interBold",
        },
        colors:{
          OffWhite: "hsl(36, 100%, 99%)",
          GrayishBlue: "hsl(233, 8%, 79%)",
          DarkGrayishBlue:"hsl(236, 13%, 42%)",
          VeryDarkBlue:"hsl(240, 100%, 5%)",
          SoftOrange: "hsl(35, 77%, 62%)",
          SoftRed: "hsl(5, 85%, 63%)",
          "backgroundColor": "rgba(0,0,0,0.4)"

        }
      },
    },
    plugins: [],
}
