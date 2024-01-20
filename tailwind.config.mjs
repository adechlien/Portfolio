/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
      'dosis': ['Dosis', 'ui-sans-serif', 'system-ui']
    },
		boxShadow: {
			'barShadow': '#121212 2px 2px 5px 0px',
			'barHardShadow': '#121212 4px 4px 5px 0px',
		}
	},
	plugins: [],
}
