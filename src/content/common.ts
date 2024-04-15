import { default as homePageLink } from "~/content/home-page.ts";
import { default as projectsPageLink } from "~/content/projects-page.ts";
import { default as servicesPageLink } from "~/content/services-page.ts";
import { default as contactPageLink } from "~/content/contact-page.ts";

import * as lucideSvelte from "lucide-svelte";

import * as lucideVue from "lucide-vue-next";

export const logoSpelling = "zedsols.";

export const tagline = "Crafting future businesses";

export const pagesLinks = [
	homePageLink,
	projectsPageLink,
	servicesPageLink,
	contactPageLink,
];

export const socialLinks = [
	{
		url: "https://facebook.com",
		label: "Facebook",
		SvelteIcon: lucideSvelte.FacebookIcon,
		VueIcon: lucideVue.FacebookIcon,
	},
	{
		url: "https://instagram.com",
		label: "Instagram",
		SvelteIcon: lucideSvelte.InstagramIcon,
		VueIcon: lucideVue.InstagramIcon,
	},
	{
		url: "https://linkedIn.com",
		label: "LinkedIn",
		SvelteIcon: lucideSvelte.LinkedinIcon,
		VueIcon: lucideVue.LinkedinIcon,
	},
	{
		url: "https://twitter.com",
		label: "Twitter",
		SvelteIcon: lucideSvelte.TwitterIcon,
		VueIcon: lucideVue.TwitterIcon,
	},
];
