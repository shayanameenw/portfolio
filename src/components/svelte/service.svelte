<script lang='ts'>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMount } from "~/hooks/core.svelte";

const { item }: { item: number } = $props();

useMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	const projectTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: `#service-${item + 1}`,
			start: "top 80%",
			markers: true,
		},
	});

	projectTimeline.to(`#service-${item + 1}-img-1`, {
		opacity: 1,
	});

	projectTimeline.to(`#service-${item + 1}-img-2`, {
		opacity: 1,
	});
});
</script>

<div id={`service-${item + 1}`} class="my-16 px-4 grid grid-cols-3 place-items-center">
  <article id={`service-${item + 1}-img-1`} class="col-span-1 opacity-0 relative w-full h-[30vh] md:h-[80vh] bg-white text-black">
    <img class="w-full h-full object-cover object-center" src="https://picsum.photos/600/350?v=1" alt={`${item + 1}`}>
  </article>
  <article id={`service-${item + 1}-img-2`} class="col-span-2 opacity-0 relative w-full h-[30vh] md:h-[80vh] bg-white text-black">
    <img class="w-full h-full object-cover object-center" src="https://picsum.photos/600/350?v=2" alt={`${item + 1}`}>
  </article>
</div>