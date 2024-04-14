import type { Config as RippleUIConfig } from "rippleui";
import type { Config as TailwindCSSConfig } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,md,mdx,js,jsx,ts,tsx,astro,svelte,vue}"],

	theme: {
		extend: {},
	},

	plugins: [require("rippleui")],

	rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				// @ts-ignore
				colors: {
					content1: "#EEEEEE",
					content2: "#333333",
					content3: "#333333",
					backgroundPrimary: "#111111",
					backgroundSecondary: "#333333",
					border: "#333333",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				// @ts-ignore
				colors: {
					content1: "#EEEEEE",
					content2: "#333333",
					content3: "#333333",
					backgroundPrimary: "#111111",
					backgroundSecondary: "#333333",
					border: "#333333",
				},
			},
		],
	} satisfies RippleUIConfig,
} satisfies TailwindCSSConfig;
