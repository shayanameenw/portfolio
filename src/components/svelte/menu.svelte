<script lang="ts">
import gsap from "gsap";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-svelte";
import { Logo } from "~/components/svelte";
import { useEffect, useStore } from "~/hooks/core.svelte";
import { isMenuOpenStore } from "~/stores/menu";

const isMenuOpen = useStore(isMenuOpenStore);

useEffect(() => {
	const menuTl = gsap.timeline({ defaults: { duration: 0.5 } });

	if (isMenuOpen.value) {
		menuTl.fromTo(
			"#menu",
			{ opacity: 0, yPercent: -100 },
			{ opacity: 1, yPercent: 0 },
		);

		menuTl.fromTo(
			"#menu-logo",
			{ opacity: 0, yPercent: 25 },
			{ opacity: 1, yPercent: 0 },
		);

		menuTl.fromTo(
			"#menu-tag-line",
			{ opacity: 0, yPercent: 25 },
			{ opacity: 1, yPercent: 0 },
		);

		menuTl.fromTo(
			"#menu-social-links > li",
			{ opacity: 0, yPercent: 25 },
			{ opacity: 1, yPercent: 0, stagger: 0.25 },
			"-=.25",
		);

		menuTl.fromTo(
			"#menu-pages-links > li",
			{ opacity: 0, yPercent: 25 },
			{ opacity: 1, yPercent: 0, stagger: 0.25 },
			"<",
		);
	}
});
</script>

{#if isMenuOpen.value}
  <section
    id="menu"
    class="absolute z-50 top-0 left-0 right-0 py-28 px-8 lg:px-28 h-[calc(100vh_-_69px)] lg:h-screen flex flex-col-reverse lg:flex-row gap-20 lg:gap-4 bg-backgroundPrimary"
  >
    <div class="flex-1 flex flex-col justify-between gap-12">
      <div class="flex flex-col gap-4 lg:gap-8">
        <h3 id="menu-tag-line" class="overflow-hidden text-xl lg:text-3xl">
          <span class="block"> Crafting future </span>
          <span class="block"> businesses </span>
        </h3>
        <ul id="menu-social-links" class="flex gap-4 items-center">
          <li class="overflow-hidden">
            <LinkedinIcon />
          </li>
          <li class="overflow-hidden">
            <TwitterIcon />
          </li>
          <li class="overflow-hidden">
            <FacebookIcon />
          </li>
          <li class="overflow-hidden">
            <InstagramIcon />
          </li>
        </ul>
      </div>
      <div>
        <Logo id="menu-logo" class="text-5xl lg:text-9xl" />
      </div>
    </div>
    <div>
      <ul id="menu-pages-links" class="flex flex-col gap-8 lg:gap-12 text-5xl">
        <li class="overflow-hidden flex gap-2 lg:justify-end">
          <a
            on:click={() => {
              isMenuOpen.value = false;
            }}
            href="/"
          >
            Home
          </a>
        </li>
        <li class="overflow-hidden flex gap-2 lg:justify-end">
          <a
            on:click={() => {
              isMenuOpen.value = false;
            }}
            href="/services"
          >
            Services
          </a>
        </li>
        <li class="overflow-hidden flex gap-2 lg:justify-end">
          <a
            on:click={() => {
              isMenuOpen.value = false;
            }}
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li class="overflow-hidden flex gap-2 lg:justify-end">
          <a
            on:click={() => {
              isMenuOpen.value = false;
            }}
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </section>
{/if}
