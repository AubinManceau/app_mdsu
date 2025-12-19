/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FFFFFF",
          black: "#000000",
          beige: "#FFF7EA",
          blue: "#3B64A0",
          red: "#ED6B6A",
          pink: "#F4ACBE",
          yellow: "#F8B100",
          green: "#BDE0D7",
        },
        secondary: {
          darkGrey: "#3C3C3B",
          mediumGrey: "#878787",
          lightGrey: "#DADADA",
        },
      },
      fontFamily: {
        kindHeart: "KindHeart",
        poppinsThin: "PoppinsThin",
        poppinsExtraLight: "PoppinsExtraLight",
        poppinsLight: "PoppinsLight",
        poppinsRegular: "PoppinsRegular",
        poppinsMedium: "PoppinsMedium",
        poppinsSemiBold: "PoppinsSemiBold",
        poppinsBold: "PoppinsBold",
        poppinsExtraBold: "PoppinsExtraBold",
        poppinsBlack: "PoppinsBlack",
      },
    },
  },
  plugins: [],
}

