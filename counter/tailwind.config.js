/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode:"class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors:{
        "SoftRed": "hsl(345, 95%, 68%)",
        "White": "hsl(0, 0%, 100%)",
        "GrayishBlue":"hsl(237, 18%, 59%)",
        "DarkDesaturatedBlue": "hsl(236, 21%, 26%)",
        "VeryDarkBlue":"hsl(235, 16%, 14%)",
        "VeryDark": "hsl(234, 17%, 12%)"
      },
      extend: {
        fontFamily:{
          burtons:"burtons",
        }
      },
    },
    plugins: [],
}