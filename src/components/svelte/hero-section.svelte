<script lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.svelte";

useSideEffect(() => {
	const headingTL = gsap.timeline({
		defaults: { duration: 1.5, stagger: 0.25, ease: "power3.inOut" },
	});

	headingTL.fromTo(
		"#heading > span",
		{
			opacity: 0,
			y: "100vh",
		},
		{
			opacity: 1,
			y: 0,
		},
	);
});
</script>

<section class="px-8 h-[calc(100vh_-_69px)] lg:h-screen overflow-hidden grid grid-cols-1 xl:grid-cols-3">
  <article class="col-span-2 grid place-items-center">
    <h3 id="heading" class="text-7xl md:text-[10rem]">
      <span class="block opacity-0">
        Crafting
      </span>
      <span class="block opacity-0">
        future
      </span>
    </h3>
  </article>
  <article>
  </article>
</section>