<script setup lang='ts'>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "~/hooks/core.vue";

useEffect(() => {
	gsap.registerPlugin(ScrollTrigger);

	const ctaSectionTL = gsap.timeline({
		defaults: { duration: 0.5 },
		scrollTrigger: {
			trigger: "#cta-section",
			start: "top center",
		},
	});

	ctaSectionTL.fromTo(
		"#text-1",
		{ opacity: 0, yPercent: 100 },
		{ opacity: 1, yPercent: 0 },
	);

	ctaSectionTL.fromTo(
		"#text-2",
		{ opacity: 0, yPercent: 100 },
		{ opacity: 1, yPercent: 0 },
	);

	ctaSectionTL.fromTo("#cta-btn", { opacity: 0 }, { opacity: 1 }, "<");
});
</script>

<template>
  <section id="cta-section" class="py-16 px-8 lg:px-16 lg:grid grid-rows-[1fr_auto_1fr]">
    <div class="grid place-items-center overflow-hidden">
      <h2 id="text-1" class="text-3xl lg:text-5xl leading-loose lg:leading-loose">Zed solutions brings life immersive events and experiences through quality design, production and end-to-end project management.</h2>
    </div>
    <div class="divider"></div>
    <div class="grid gap-12 lg:grid-cols-6 place-items-center overflow-hidden">
      <p id="text-2" class="lg:col-span-4 text-lg lg:text-2xl leading-loose lg:leading-loose">Trust us to elevate your visitors' experience through memorable and immersive experiential design. With over 100 years of experience across 40 countries, we are experts in designing and building world-class interior and museum fit-outs, large events, brand experiences and exhibitions.</p>
      <button id="cta-btn" class="lg:col-span-2 p-12 border border-teal-700 rounded-full h-64 w-64 flex justify-center items-center uppercase text-sm transition duration-300 hover:bg-teal-500 hover:text-white">Check our Projects</button>
    </div>
  </section>
</template>