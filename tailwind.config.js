/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔹 Ensure dark mode works
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
