<script setup lang='ts'>
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-vue-next";
import { useReactiveStore, useSideEffect } from "~/hooks/core.vue";
import { menuStore } from "~/stores/menu-store";

const menu = useReactiveStore(menuStore);

function toggleMenu() {
	menu.value.open = !menu.value.open;
}

useSideEffect(() => {
	const menuBtnTL = gsap.timeline({ defaults: { duration: 0.75 } });

	menuBtnTL.fromTo(
		"#menu-btn",
		{ opacity: 0, rotateZ: menu.value.open ? 90 : -90 },
		{ opacity: 1, rotateZ: 0 },
	);
});
</script>

<template>
  <button id="menu-btn" class="opacity-0" v-on:click="toggleMenu">
    <XIcon v-if="menu.value.open" />
		<MenuIcon v-else/>
  </button>
</template>