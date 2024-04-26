<script lang='ts'>
import { default as ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { default as gsap } from "gsap";
import { useMount } from "~/hooks/core.svelte";

const {
	item,
}: { item: { id: number; name: string; images: [string, string] } } = $props();

useMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	const projectTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: `#service-${item.id}`,
			start: "top 85%",
		},
	});

  projectTimeline.to(`#service-${item.id}-name`, {
    opacity: 1,
    y: 0
  });

	projectTimeline.to(
    `#service-${item.id}-img-0 > div`,
    {
      bottom: "100%",
    },
    "-=0.25",
  );

	projectTimeline.to(
		`#service-${item.id}-img-1 > div`,
		{
			bottom: "100%",
		},
		"-=0.25",
	);
});
</script>

<div id={`service-${item.id}`} class="my-16 px-4 grid grid-cols-3 place-items-center gap-4">
  <h3 id={`service-${item.id}-name`} class="col-span-3 justify-self-start translate-y-full opacity-0 text-5xl">{item.name}</h3>
  <article id={`service-${item.id}-img-0`} class={`${item.id % 2 === 0 ? "col-span-2" : "col-span-1"} relative w-full h-[30vh] md:h-[80vh]`}>
		<div class="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black"></div>
    <img class="w-full h-full object-cover object-center opacity-75" src={item.images[0]} alt={`${item.id}`}>
  </article>
  <article id={`service-${item.id}-img-1`} class={`${item.id % 2 === 0 ? "col-span-1" : "col-span-2"} relative w-full h-[30vh] md:h-[80vh]`}>
		<div class="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black"></div>
    <img class="w-full h-full object-cover object-center opacity-75" src={item.images[1]} alt={`${item.id}`}>
  </article>
</div>