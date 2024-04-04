<script lang='ts'>
import gsap from "gsap";
import { useSideEffect } from "~/hooks/core.svelte";

useSideEffect(() => {
	const headingTL = gsap.timeline({
		defaults: { duration: 0.75, ease: "power3.inOut" },
	});

	headingTL.fromTo(
		"#heading > span:first-child",
		{
			opacity: 0,
			y: "100vh",
		},
		{
			opacity: 1,
			y: 0,
		},
	);
	headingTL.fromTo(
		"#heading > span:last-child",
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

<section class="px-8 h-screen grid grid-cols-1 xl:grid-cols-3">
  <article class="col-span-2 grid place-items-center">
    <h3 id="heading" class="overflow-hidden text-7xl md:text-9xl">
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