/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md:"30px",
        lg: "60px",
      },
      // screens: {
      //   sm: "100%",
      //   md: "100%",
      //   lg: "100%",
      //   xl: "1280px",
      // },
    },
    extend: {
      colors: {
        blackColor: "#222222",
      },
      
      borderRadius: {
        defaultRadius: "16px",
      },
    },
  },
  plugins: [
    
  ]
};
