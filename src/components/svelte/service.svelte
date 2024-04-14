<script lang='ts'>
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useMount } from "~/hooks/core.svelte";

const { item }: { item: number } = $props();

useMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	const projectTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: `#service-${item + 1}`,
			start: "top 85%",
		},
	});

	projectTimeline.to(`#service-${item + 1}-img-1 > div`, {
		bottom: "100%",
	});

	projectTimeline.to(
		`#service-${item + 1}-img-2 > div`,
		{
			bottom: "100%",
		},
		"-=0.25",
	);
});
</script>

<div id={`service-${item + 1}`} class="my-16 px-4 grid grid-cols-3 place-items-center">
  <article id={`service-${item + 1}-img-1`} class={`${item % 2 === 0 ? "col-span-2" : "col-span-1"} relative w-full h-[30vh] md:h-[80vh]`}>
		<div class="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black"></div>
    <img class="w-full h-full object-cover object-center opacity-75" src="https://picsum.photos/600/350?v=1" alt={`${item + 1}`}>
  </article>
  <article id={`service-${item + 1}-img-2`} class={`${item % 2 === 0 ? "col-span-1" : "col-span-2"} relative w-full h-[30vh] md:h-[80vh]`}>
		<div class="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black"></div>
    <img class="w-full h-full object-cover object-center opacity-75" src="https://picsum.photos/600/350?v=2" alt={`${item + 1}`}>
  </article>
</div>