<script setup lang='ts'>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Logo, MenuButton } from "~/components/vue";
import { useSideEffect } from "~/hooks/core.vue";

useSideEffect(() => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.timeline({
		defaults: {},
		scrollTrigger: {
			trigger: "#sidebar",
			pin: true,
		},
	});
});
</script>

<template>
  <aside id="sidebar" class="border-r-0 lg:border-r border-b lg:border-b-0 border-gray-7 py-4 px-8 lg:py-8 lg:h-screen flex flex-row-reverse lg:flex-col justify-between items-center">
    <MenuButton />
    <Logo />
  </aside>
</template>