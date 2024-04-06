<script lang='ts'>
import { gsap } from "gsap";
import { useStore, useEffect } from "~/hooks/core.svelte";
import { isMenuOpenStore } from "~/stores/menu-store";
import { Logo } from "~/components/svelte";
import {
	LinkedinIcon,
	TwitterIcon,
	FacebookIcon,
	InstagramIcon,
} from "lucide-svelte";

const isMenuOpen = useStore(isMenuOpenStore);

useEffect(() => {
	const menuTl = gsap.timeline({ defaults: { duration: 1 } });

	if (isMenuOpen.value) {
		menuTl.fromTo(
			"#menu",
			{ opacity: 0, yPercent: -100 },
			{ opacity: 1, yPercent: 0 },
		);
	}
});
</script>

{#if isMenuOpen.value}
  <section id="menu" class="absolute z-50 top-0 left-0 right-0 py-28 px-8 lg:px-28 h-[calc(100vh_-_69px)] lg:h-screen flex bg-backgroundPrimary">
		<div class="flex-1 flex flex-col justify-between">	
			<div class="flex flex-col gap-8">
				<h3 class="text-3xl">
					<span class="block">
						Crafting future
					</span>
					<span class="block">		
						businesses
					</span>
				</h3>
				<ul class="flex gap-4 items-center">
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
			<div>
				<Logo class="text-9xl" />
			</div>
		</div>
		<div>
			<ul class="flex flex-col gap-12 text-5xl">
				<li class="flex gap-2 justify-end">
					Home
				</li>
				<li class="flex gap-2 justify-end">
					Projects
				</li>
				<li class="flex gap-2 justify-end">
					About us
				</li>
				<li class="flex gap-2 justify-end">
					Contact
				</li>
			</ul>
		</div>
  </section>
{/if}