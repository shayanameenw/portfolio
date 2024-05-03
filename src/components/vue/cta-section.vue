<script setup lang='ts'>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ctaSection } from "~/content/home-page.ts";
import { default as projectsPage } from "~/content/projects-page.ts";
import { useEffect } from "~/hooks/core.vue";

useEffect(() => {
	// @ts-ignore
	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(
		"#text-1",
		{ opacity: 0, yPercent: 25 },
		{
			opacity: 1,
			yPercent: 0,
			scrollTrigger: "#text-1",
		},
	);

	gsap.fromTo(
		"#text-2",
		{ opacity: 0, yPercent: 25 },
		{
			opacity: 1,
			yPercent: 0,
			scrollTrigger: "#text-2",
		},
	);

	gsap.fromTo(
		"#cta-btn",
		{ opacity: 0 },
		{
			opacity: 1,
			scrollTrigger: "#cta-btn",
		},
	);
});
</script>

<template>
  <section id="cta-section" class="py-16 px-8 lg:px-16 lg:grid grid-rows-[1fr_auto_1fr]">
    <div class="grid place-items-center overflow-hidden">
      <h2 id="text-1" class="text-3xl lg:text-5xl leading-loose lg:leading-loose">
        {{ ctaSection.quote }}
      </h2>
			</div>
			<div class="border my-8 border-zinc-900"></div>
    <div class="grid gap-12 lg:grid-cols-6 place-items-center overflow-hidden">
      <p id="text-2" class="lg:col-span-4 text-lg lg:text-2xl leading-loose lg:leading-loose">
        {{ ctaSection.para }}
      </p>
      <a id="cta-btn" 
        class="lg:col-span-2 p-12 border border-teal-700 rounded-full h-64 w-64 flex justify-center items-center uppercase text-sm transition duration-300 hover:bg-teal-500 hover:text-white"
				:href="projectsPage.url"
				>
        {{ projectsPage.labelForCTA }}
      </a>
    </div>
  </section>
</template>