/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["'Space Grotesk', sans-serif"],
      },
      backgroundImage: {
        "main-desktop": "url(/src/resources/assets/images/bg-main-desktop.png)",
        "card-front": "url(/src/resources/assets/images/bg-card-front.png)",
        "card-back": "url(/src/resources/assets/images/bg-card-back.png)",
      },
      backgroundSize: {
        "1/2": "50%",
        "1/3": "33% 100%",
      },
    },
  },
  plugins: [],
};
