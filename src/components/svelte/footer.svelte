<script lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
	ArrowDownLeftIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-svelte";
import { Logo } from "~/components/svelte";
import { useEffect } from "~/hooks/core.svelte";

useEffect(() => {
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

	const mm = gsap.matchMedia();

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
			"#footer-social-links:last-child > li",
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
  class="lg:pt-16 px-0 lg:px-16 lg:border-t border-zinc-900 grid grid-rows-[auto_1fr_auto] grid-cols-4"
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
      <li class="flex gap-2">Bringing delight to Bento Design System</li>
      <li class="flex gap-2">Leading the IxD & Motion guild</li>
      <li class="flex gap-2">Envisioning the future of a platform</li>
      <li class="flex gap-2">Highlights from the past</li>
    </ul>
  </div>
  <div
    class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center"
  >
    <ul id="footer-pages-links" class="flex flex-col gap-6 text-xl">
      <li class="flex gap-2">
        <a href="/"> Home </a>
      </li>
      <li class="flex gap-2">
        <a href="/services"> Services </a>
      </li>
      <li class="flex gap-2">
        <a href="/projects"> Projects </a>
      </li>
      <li class="flex gap-2">
        <a href="/contact"> Contact </a>
      </li>
    </ul>
  </div>
  <div
    class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center"
  >
    <ul id="footer-social-links" class="flex flex-col gap-6 text-xl">
      <li>
        <a class="flex gap-2" href="/">
          <span> Linkedin </span>
          <span>
            <ArrowDownLeftIcon class="rotate-180" size={24} />
          </span>
        </a>
      </li>
      <li>
        <a class="flex gap-2" href="/">
          <span> Twitter </span>
          <span>
            <ArrowDownLeftIcon class="rotate-180" size={24} />
          </span>
        </a>
      </li>
      <li>
        <a class="flex gap-2" href="/">
          <span> Facebook </span>
          <span>
            <ArrowDownLeftIcon class="rotate-180" size={24} />
          </span>
        </a>
      </li>
      <li>
        <a class="flex gap-2" href="/">
          <span> Instagram </span>
          <span>
            <ArrowDownLeftIcon class="rotate-180" size={24} />
          </span>
        </a>
      </li>
    </ul>
  </div>
  <div class="col-span-4">
    <ul id="footer-social-links" class="flex lg:hidden gap-4 justify-center items-center">
      <li>
        <LinkedinIcon />
      </li>
      <li>
        <TwitterIcon />
      </li>
      <li>
        <FacebookIcon />
      </li>
      <li>
        <InstagramIcon />
      </li>
    </ul>
  </div>
  <div
    class="col-span-4 border-t border-zinc-900 mt-6 lg:mt-16 py-6 flex justify-center lg:justify-between items-center"
  >
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
