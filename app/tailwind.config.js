/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			transitionProperty: {
				height: 'max-height'
			},
			colors: {
				primary: '#010101'
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
