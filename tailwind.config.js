module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto' , serif",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
