<script lang='ts'>
import gsap from "gsap";
import { useSideEffect } from "~/hooks/core.svelte";

useSideEffect(() => {
	const headingTL = gsap.timeline({ defaults: { duration: 0.5 } });

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

<section class="h-screen grid grid-cols-3">
  <article class="col-span-2 grid place-items-center">
    <h3 id="heading" class="overflow-hidden text-9xl">
      <span class="block">
        Crafting
      </span>
      <span class="block">
        future.
      </span>
    </h3>
  </article>
  <article>
  </article>
</section>