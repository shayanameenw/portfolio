import type { Config as TailwindCSSConfig } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,md,mdx,js,jsx,ts,tsx,astro,svelte,vue}"],
	theme: {
		extend: {},
	},
} satisfies TailwindCSSConfig;
