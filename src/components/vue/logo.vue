<script setup lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.vue";

const LOGO = "zedsols.";

useSideEffect(() => {
	const logoTL = gsap.timeline({ defaults: { stagger: 0.25 } });

	logoTL.fromTo("h1 > span", { opacity: 0 }, { opacity: 1 });
});
</script>

<template>
  <h1 class="lg:mb-10 lg:-mx-12 lg:-rotate-90 text-xl">
    <span v-for="letter in LOGO.split('')">
      {{ `${letter} ` }}
    </span>
  </h1>
</template>