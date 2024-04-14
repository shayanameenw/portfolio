<script lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMount } from "~/hooks/core.svelte";

const { item }: { item: number } = $props();

useMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	const projectTimeline = gsap.timeline({
		defaults: {
			duration: 0.5,
		},
		scrollTrigger: {
			trigger: `#project-${item + 1}`,
			start: "top 95%",
		},
	});

	projectTimeline.to(`#project-${item + 1}`, {
		opacity: 1,
	});

	projectTimeline.to(`#project-${item + 1} > div`, {
		bottom: "100%",
	});

	projectTimeline.to(`#project-${item + 1} > p`, {
		opacity: 1,
	});
});
</script>

<article id={`project-${item + 1}`} class={`opacity-0 relative w-full h-[50vh] md:h-[80vh] ${item % 2 === 0 ? "md:justify-self-end" : "md:justify-self-start"}`}>
  <img class="w-full h-full object-cover object-center opacity-50" src={`https://picsum.photos/600/350?v=${item + 1}`} alt={`${item} + 1`}>
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-backgroundPrimary"></div>
  <p class="opacity-0 absolute top-8 left-8 right-8 lg:top-12 lg:left-12 lg:right-12 text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
</article>