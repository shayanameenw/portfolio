<script lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.svelte";

const LOGO = "zedsols";

useSideEffect(() => {
	const logoTL = gsap.timeline({ defaults: { stagger: 0.25 } });

	logoTL.fromTo("h1 > span", { opacity: 0 }, { opacity: 1 });
});
</script>

<h1 id="logo" class="font-medium text-xl">
  {#each LOGO.split("") as letter}  
    <span class="opacity-0">
      { `${letter} ` }
    </span>
  {/each}
  <span class="opacity-0 font-bold text-3xl text-teal-700">
    .
  </span>
</h1>
