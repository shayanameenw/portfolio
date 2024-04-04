<script setup lang='ts'>
import gsap from "gsap";
import { MenuIcon } from "lucide-vue-next";
import { useSideEffect } from "~/hooks/core.vue";

useSideEffect(() => {
	const sidebarTL = gsap.timeline({ defaults: { duration: 0.75 } });

	console.log(document.querySelector("#sidebar > svg:first-child"));

	sidebarTL.fromTo(
		"#sidebar > svg:first-child",
		{ opacity: 0, rotateZ: -90 },
		{ opacity: 1, rotateZ: 0 },
	);
});
</script>

<template>
  <aside id="sidebar" class="py-4 px-8 lg:py-8 flex flex-row-reverse lg:flex-col justify-between items-center">
    <MenuIcon class="opacity-0" />
    <h1 class="lg:mb-8 lg:-mx-12 lg:-rotate-90 text-xl">
      <span>
        z
      </span>
      <span>
        e
      </span>
      <span>
        d
      </span>
      <span>
        s
      </span>
      <span>
        o
      </span>
      <span>
        l
        <span>
      </span>
        s
      </span>
      <span>
        .
      </span>
    </h1>
  </aside>
</template>