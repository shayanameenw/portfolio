/** @type {import('tailwind').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {},
	},

	plugins: [require("rippleui")],

	/** @type {import('rippleui').Config} */

	rippleui: {
		themes: [],
	},
};
