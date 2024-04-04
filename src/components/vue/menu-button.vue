<script setup lang='ts'>
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-vue-next";
import { useReactiveStore, useSideEffect } from "~/hooks/core.vue";
import { isMenuOpenStore } from "~/stores/menu-store";

const isMenuOpen = useReactiveStore(isMenuOpenStore);

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
}

useSideEffect(() => {
	const menuBtnTL = gsap.timeline({ defaults: { duration: 0.75 } });

	menuBtnTL.fromTo(
		"#menu-btn",
		{ opacity: 0, rotateZ: isMenuOpen.value ? 90 : -90 },
		{ opacity: 1, rotateZ: 0 },
	);
});
</script>

<template>
  <button id="menu-btn" class="opacity-0" v-on:click="toggleMenu">
    <XIcon v-if="isMenuOpen.value" />
		<MenuIcon v-else/>
  </button>
</template>