<script setup lang='ts'>
import { gsap } from "gsap";
import { MenuIcon } from "lucide-vue-next";
import { useSideEffect } from "~/hooks/core.vue";
import { Logo } from "~/components/vue";

useSideEffect(() => {
	const menuBtnTL = gsap.timeline({ defaults: { duration: 0.75 } });

	menuBtnTL.fromTo(
		"#sidebar > svg:first-child",
		{ opacity: 0, rotateZ: -90 },
		{ opacity: 1, rotateZ: 0 },
	);
});
</script>

<template>
  <aside id="sidebar" class="py-4 px-8 lg:py-8 flex flex-row-reverse lg:flex-col justify-between items-center">
    <MenuIcon class="opacity-0" />
    <Logo />
  </aside>
</template>