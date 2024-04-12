<script setup lang='ts'>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Logo, MenuButton } from "~/components/vue";
import { useEffect } from "~/hooks/core.vue";

useEffect(() => {
	gsap.registerPlugin(ScrollTrigger);

	const mm = gsap.matchMedia();

	mm.add("(min-width: 1024px)", () => {
		gsap.timeline({
			defaults: {},
			scrollTrigger: {
				trigger: "#sidebar",
				pin: true,
				end: () => {
					const main = document.querySelector("main");
					const sidebar = document.querySelector("#sidebar");

					if (main && sidebar) {
						return `+=${main.clientHeight - sidebar.clientHeight}`;
					}

					return 0;
				},
			},
		});
	});
});
</script>

<template>
  <aside id="sidebar"
    class="relative z-50 border-r-0 lg:border-r border-b lg:border-b-0 border-gray-7 py-4 px-8 lg:py-8 lg:h-screen flex flex-row-reverse lg:flex-col justify-between items-center">
    <MenuButton />
    <Logo />
  </aside>
</template>