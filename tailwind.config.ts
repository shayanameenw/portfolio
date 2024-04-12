import type { Config as RippleUIConfig } from "rippleui";
import type { Config as TailwindCSSConfig } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,md,mdx,js,jsx,ts,tsx,astro,svelte,vue}"],

	theme: {
		extend: {},
	},

	plugins: [require("rippleui")],

	rippleui: {
		themes: [],
	} satisfies RippleUIConfig,
} satisfies TailwindCSSConfig;
