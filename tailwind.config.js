/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "function-main": "#9495A5",
        "function-main-hover": "#9495a56c",
        "functional-actve": "#3A7CFD",
        "todo-main": "#494C6B",
        "todo-completed": "#D1D2DA",
      },
    },
  },
  plugins: [],
}
