<script lang='ts'>
import { gsap } from "gsap";
import { useReactiveStore, useSideEffect } from "~/hooks/core.svelte";
import { isMenuOpenStore } from "~/stores/menu-store";
import { Logo } from "~/components/svelte";

const isMenuOpen = useReactiveStore(isMenuOpenStore);

useSideEffect(() => {
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
  <section id="menu" class="grid place-items-center absolute z-10 top-0 left-0 right-0 h-screen bg-backgroundPrimary">
    <Logo />
  </section>
{/if}