<script lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMount } from "~/hooks/core.svelte";

const { item }: { item: { id: number; label: string; image: string } } =
	$props();

useMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	const projectTimeline = gsap.timeline({
		defaults: {
			duration: 0.5,
		},
		scrollTrigger: {
			trigger: `#project-${item.id}`,
			start: "top 95%",
		},
	});

	projectTimeline.to(`#project-${item.id}`, {
		opacity: 1,
	});

	projectTimeline.to(`#project-${item.id} > div`, {
		bottom: "100%",
	});

	projectTimeline.to(`#project-${item.id} > p`, {
		opacity: 1,
	});
});
</script>

<article id={`project-${item.id}`} class={`opacity-0 relative w-full h-[50vh] md:h-[80vh] ${item.id % 2 === 0 ? "md:justify-self-end" : "md:justify-self-start"}`}>
  <img class="w-full h-full object-cover object-center opacity-50" src={item.image} alt={`${item.label}`}>
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-black"></div>
  <p class="opacity-0 absolute top-8 left-8 right-8 lg:top-12 lg:left-12 lg:right-12 text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
</article>