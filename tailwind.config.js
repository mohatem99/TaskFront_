/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue900: "#10197A",
        customBlue800: "#1A2793",
        customBlue700: "#2A3BB7",
        customBlue600: "#3D53DB",
        customBlue500: "#546FFF",
        customBlue400: "#9F84FD",
        customBlue300: "#98ABFF",
        customBlue200: "#BAC8FF",
        customBlue100: "#DCE4FF",
        customlight: "#EFF4FF",
        customGray: "#F5F5F7",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
