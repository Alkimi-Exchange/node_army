/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: 12,
      screens: {
        xs: "100%",
        sm: "536px",
        md: "688px",
        lg: "930px",
        xl: "1290px",
        "2xl": "1290px",
      },
    },
  },
  plugins: [],
}
