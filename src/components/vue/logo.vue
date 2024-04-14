<script setup lang='ts'>
import gsap from "gsap";
import { useEffect, useStore } from "~/hooks/core.vue";
import { isMenuOpenStore } from "~/stores/menu";

const LOGO = "zedsols";

const isMenuOpen = useStore(isMenuOpenStore);

useEffect(() => {
	const logoTL = gsap.timeline({ defaults: { stagger: 0.25 } });

	logoTL.fromTo("#logo > span", { opacity: 0 }, { opacity: 1 });
});
</script>

<template>
  <a id="logo" class="lg:mb-10 lg:-mx-12 lg:-rotate-90 font-medium text-xl" href="/" @click="() => {
  isMenuOpen.value = false
}">
    <span class="opacity-0" v-for="letter in LOGO.split('')">
      {{ `${letter} ` }}
    </span>
    <span class="opacity-0 font-bold text-3xl text-teal-700">
      .
    </span>
  </a>
</template>