/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-error": "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        "space-grotesk": ["'Space Grotesk', sans-serif"],
      },
      backgroundImage: {
        "main-desktop": "url(/src/resources/assets/images/bg-main-desktop.png)",
        "main-mobile": "url(/src/resources/assets/images/bg-main-mobile.png)",
        "card-front": "url(/src/resources/assets/images/bg-card-front.png)",
        "card-back": "url(/src/resources/assets/images/bg-card-back.png)",
      },
      backgroundSize: {
        "1/2": "50%",
        "1/3": "33% 100%",
        "invert-1/4": "100% 25%",
      },
      letterSpacing: {
        "widest-2x": "0.25em",
      },
      screens: {
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
