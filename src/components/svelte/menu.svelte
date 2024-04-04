<script lang='ts'>
import { gsap } from "gsap";
import { useReactiveStore, useSideEffect } from "~/hooks/core.svelte";
import { menuStore } from "~/stores/menu-store";

const menu = useReactiveStore(menuStore);

useSideEffect(() => {
	const menuTl = gsap.timeline({ defaults: { duration: 1 } });

	if (menu.value.open) {
		menuTl.fromTo(
			"#menu",
			{ opacity: 0, yPercent: -100 },
			{ opacity: 1, yPercent: 0 },
		);
	}
});
</script>

{#if menu.value.open}
  <section id="menu" class="grid place-items-center absolute z-10 top-0 left-0 right-0 h-screen bg-backgroundPrimary">
    Hello, World!
  </section>
{/if}