<script setup lang='ts'>
import { gsap } from "gsap";
import { MenuIcon } from "lucide-vue-next";
import { useSideEffect } from "~/hooks/core.vue";

useSideEffect(() => {
	const menuBtnTL = gsap.timeline({ defaults: { duration: 0.75 } });

	menuBtnTL.fromTo(
		"#menu-btn",
		{ opacity: 0, rotateZ: -90 },
		{ opacity: 1, rotateZ: 0 },
	);
});
</script>

<template>
  <button id="menu-btn" class="opacity-0">
    <MenuIcon />
  </button>
</template>