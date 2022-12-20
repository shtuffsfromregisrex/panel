/** @type {import('tailwindcss').Config} */
const defaultTheme  =  require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
			'msm' : '0px',
			'xs': '475px',
			...defaultTheme.screens,
		},
  },
  plugins: [],
};
