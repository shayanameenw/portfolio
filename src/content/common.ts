import { default as contactPageLink } from "~/content/contact-page.ts";
import { default as homePageLink } from "~/content/home-page.ts";
import { default as projectsPageLink } from "~/content/projects-page.ts";
import { default as servicesPageLink } from "~/content/services-page.ts";

import * as lucideSvelte from "lucide-svelte";

import * as lucideVue from "lucide-vue-next";

export const logoSpelling = "zedsols.";

export const tagline = "Crafting future businesses";

export const highlightProjectsLinks = [
	{
		url: "/",
		label: "Bringing delight to Bento Design System\n",
	},
	{
		url: "/",
		label: "Leading the IxD & Motion guild\n",
	},
	{
		url: "/",
		label: "Envisioning the future of a platform\n",
	},
	{
		url: "/",
		label: "Highlights from the past\n",
	},
];

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
