/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        // This sets Manrope as the default sans/body font
        sans: ['Manrope', 'sans-serif'],
        // This creates a custom utility: font-heading
        heading: ["'GC North Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
