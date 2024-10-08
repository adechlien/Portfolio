/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
      'dosis': ['Dosis', 'ui-sans-serif', 'system-ui'],
			'overpass': ['Overpass', 'ui-sans-serif', 'system-ui'],
			'barlow': ['Barlow', 'ui-sans-serif', 'system-ui']
    },
		boxShadow: {
			'barShadow': '#121212 2px 2px 5px 0px',
			'barHardShadow': '#121212 4px 4px 5px 0px',
		},
    colors: {
      'white': '#FFFFFF',
      'dark-bg': '#121B32',
      'dark-text': '#98CCF3',
      'card': '#343467',
    }
	},
	plugins: [],
}
