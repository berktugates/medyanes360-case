/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#C8102E",
        "text-gray": "#333333",
        "background-gray": "#F4F4F4", 
        "message-pink" : "#D4C2CF",
        "table-gray" : "#F4F4F4",
      },
    },
  },
  plugins: [],
};
