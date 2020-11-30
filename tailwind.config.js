const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
      colors: {
        lime: colors.lime,
        gray: colors.trueGray,
        green: colors.green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
