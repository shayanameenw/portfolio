<script lang="ts">
import gsap from "gsap";
import Logo from "~/components/svelte/logo.svelte";
import { pagesLinks, socialLinks, tagline } from "~/content/common.ts";
import { useEffect, useStore } from "~/hooks/core.svelte";
import { isMenuOpenStore } from "~/stores/menu";

const isMenuOpen = useStore(isMenuOpenStore);

useEffect(() => {
	const menuTl = gsap.timeline({ defaults: { duration: 0.25 } });

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
			{ opacity: 1, yPercent: 0, stagger: 0.15 },
			"-=0.25",
		);

		menuTl.fromTo(
			"#menu-pages-links > li",
			{ opacity: 0, yPercent: 25 },
			{ opacity: 1, yPercent: 0, stagger: 0.15 },
			"<",
		);
	}
});
</script>

{#if isMenuOpen.value}
  <section
    id="menu"
    class="absolute z-50 top-0 left-0 right-0 py-28 px-8 lg:px-28 h-[calc(100vh_-_69px)] lg:h-screen flex flex-col-reverse lg:flex-row gap-20 lg:gap-4 bg-black"
  >
    <div class="flex-1 flex flex-col justify-between gap-12">
      <div class="flex flex-col gap-4 lg:gap-8">
        <h3 id="menu-tag-line" class="overflow-hidden text-xl lg:text-3xl">
          <span class="block">
            {#each tagline.split(" ").slice(0,2) as word }
               {word} {" "}
            {/each}
          </span>
          <span class="block"> {tagline.split(" ")[tagline.split(" ").length - 1]} </span>
        </h3>
        <ul id="menu-social-links" class="flex gap-4 items-center">
          {#each socialLinks as {url, SvelteIcon}}
            <li class="overflow-hidden">
              <a href={url}>
                <SvelteIcon />
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <Logo id="menu-logo" class="text-5xl lg:text-9xl" />
      </div>
    </div>
    <div>
      <ul id="menu-pages-links" class="flex flex-col gap-8 lg:gap-12 text-5xl">
        {#each pagesLinks as page}
          <li class="overflow-hidden flex gap-2 lg:justify-end">
            <a
                    on:click={() => {
                isMenuOpen.value = false;
              }}
                    href={page.url}
            >
              {page.label}
            </a>
          </li>
          {/each}
      </ul>
    </div>
  </section>
{/if}
