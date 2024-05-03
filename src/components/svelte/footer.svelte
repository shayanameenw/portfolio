<script lang="ts">
import { default as gsap } from "gsap";
import { default as ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
	ArrowDownLeftIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-svelte";
import { default as Logo } from "~/components/svelte/logo.svelte";
import { pagesLinks } from "~/content/common.js";
import { highlightProjectsLinks, socialLinks } from "~/content/common.ts";
import { useEffect } from "~/hooks/core.svelte";

useEffect(() => {
	// @ts-ignore
	gsap.registerPlugin(ScrollTrigger);

	const footerTL = gsap.timeline({
		defaults: {
			duration: 0.35,
			stagger: 0.15,
		},
		scrollTrigger: {
			trigger: "footer",
			start: "top 95%",
		},
	});

	const mm = gsap.matchMedia("");

	mm.add("(min-width: 1024px)", () => {
		footerTL.fromTo(
			"footer > h2",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
		);
	});

	mm.add("(min-width: 1024px)", () => {
		footerTL.fromTo(
			"#footer-projects-links > li",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
		);
	});

	mm.add("(min-width: 1024px)", () => {
		footerTL.fromTo(
			"#footer-pages-links > li",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
			"<",
		);
	});

	mm.add("(min-width: 1024px)", () => {
		footerTL.fromTo(
			"#footer-social-links:first-child > li",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
			"<",
		);
	});

	mm.add("(max-width: 1024px)", () => {
		footerTL.fromTo(
			"#footer-social-links:first-child > li",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
			"<",
		);
	});

	footerTL.fromTo(
		"#footer-copyright",
		{
			opacity: 0,
			yPercent: 25,
		},
		{
			opacity: 1,
			yPercent: 0,
		},
	);

	mm.add("(min-width: 1024px)", () => {
		footerTL.fromTo(
			"#footer-terms-links > li",
			{
				opacity: 0,
				yPercent: 25,
			},
			{
				opacity: 1,
				yPercent: 0,
			},
			"<",
		);
	});
});
</script>

<footer
  class="mt-8 lg:pt-16 px-8 lg:px-16 border-t border-zinc-900 grid grid-cols-4"
>
  <h2
    class="col-span-2 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300"
  >
    Explore projects
  </h2>
  <h2
    class="col-span-2 lg:col-span-1 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300"
  >
    More about zed
  </h2>
  <h2
    class="col-span-2 lg:col-span-1 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300"
  >
    Connect
  </h2>
  <div
    class="col-span-2 self-start hidden lg:grid justify-items-start items-center"
  >
    <ul id="footer-projects-links" class="flex flex-col gap-6 text-xl">
      {#each highlightProjectsLinks as {url, label}}
        <li class="flex gap-2">
          <a href={url}>
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center"
  >
    <ul id="footer-pages-links" class="flex flex-col gap-6 text-xl">
      {#each socialLinks as {url, label}}
        <li class="flex gap-2">
          <a href={url}>{label}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center"
  >
    <ul id="footer-social-links" class="flex flex-col gap-6 text-xl">
      {#each pagesLinks as {url, label}}
        <li>
          <a class="flex gap-2" href={url}>
            <span>{label}</span>
            <span>
            <ArrowDownLeftIcon class="rotate-180" size={24} />
          </span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="col-span-4 lg:mt-16 py-4 lg:py-8 lg:border-t border-zinc-900 flex justify-between items-center"
  >
    <ul id="footer-social-links" class="flex lg:hidden gap-4 justify-center items-center">
      {#each socialLinks as {url, SvelteIcon}}
        <li>
          <a href={url}>
            <SvelteIcon size={12} />
          </a>
        </li>
      {/each}
    </ul>
    <ul id="footer-copyright" class="flex gap-4 items-center">
      <li>&copy; 2024</li>
      <li>-</li>
      <li>
        <Logo />
      </li>
    </ul>
    <ul id="footer-terms-links" class="hidden lg:flex gap-8 items-center">
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </div>
</footer>
