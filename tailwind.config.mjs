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
      // Boulevard
      'boulevard4': '#8FB1F0',
      'boulevard3': '#A1C4FF',
      'boulevard2': '#B4D0FF',
      'boulevard1': '#C7DCFF',

      // Venomous
      'venomous5': '#C7AFD7',
      'venomous4': '#DBCCE8',
      'venomous3': '#F6F8FE',
      'venomous2': '#D9EEDB',
      'venomous1': '#B0D8BE',

      // Swamp
      'swamp3': '#091A2B',
      'swamp2': '#142039',
      'swamp1': '#1E2646',
    }
	},
	plugins: [],
}
