/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        400: "hsl(235, 18%, 26%)",
        500: "hsl(234, 29%, 20%)",
      },
      grey: {
        DEFAULT: "hsl(231, 7%, 60%)",
      },
      white: {
        DEFAULT: "hsl(0, 0%, 100%)",
      },
      secondary: {
        500: "hsla(14, 100%, 62%, 1.00)",
        DEFAULT: "hsla(346, 100%, 66%, 1.00)",
      },
    },
    extend: {
      dropShadow: {
        app: "0px 10px 10px hsla(14, 100%, 62%, .50)",
      },
    },
  },
  plugins: [],
};
