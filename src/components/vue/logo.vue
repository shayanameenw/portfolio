<script setup lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.vue";

const LOGO = "zedsols";

useSideEffect(() => {
	const logoTL = gsap.timeline({ defaults: { stagger: 0.25 } });

	logoTL.fromTo("h1 > span", { opacity: 0 }, { opacity: 1 });
});
</script>

<template>
  <h1 id="logo" class="lg:mb-10 lg:-mx-12 lg:-rotate-90 text-xl">
    <span v-for="letter in LOGO.split('')">
      {{ `${letter} ` }}
    </span>
    <span class="font-bold text-3xl text-teal-700">
      .
    </span>
  </h1>
</template>