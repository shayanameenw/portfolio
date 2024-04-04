<script setup lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.vue";
import { MenuButton, Logo } from "~/components/vue";

useSideEffect(() => {
	const mm = gsap.matchMedia();

	mm.add("(min-width: 1024px)", () => {
		const sidebarTL = gsap.timeline({ defaults: {} });

		sidebarTL.fromTo("#sidebar", { xPercent: -100 }, { xPercent: 0 });
	});
});
</script>

<template>
  <aside id="sidebar" class="py-4 px-8 lg:py-8 flex flex-row-reverse lg:flex-col justify-between items-center">
    <MenuButton />
    <Logo />
  </aside>
</template>