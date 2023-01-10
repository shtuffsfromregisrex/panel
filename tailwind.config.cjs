/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
