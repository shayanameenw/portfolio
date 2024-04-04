<script setup lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.vue";

useSideEffect(() => {
	const logoTL = gsap.timeline({ defaults: {} });

	const logoLetters = document.querySelectorAll("h1 > span");

	for (const letter of logoLetters) {
		logoTL.fromTo(letter, { opacity: 0 }, { opacity: 1 });
	}
});
</script>

<template>
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
</template>