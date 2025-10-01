/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables Tailwind dark mode using class strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace'],
      },
      // You can extend other themes here if needed, e.g., colors, spacing etc.
    },
  },
  plugins: [],
};
