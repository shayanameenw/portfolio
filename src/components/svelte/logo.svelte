<script lang='ts'>
import { gsap } from "gsap";
import { useSideEffect } from "~/hooks/core.svelte";

const LOGO = "zedsols";

useSideEffect(() => {
	const logoTL = gsap.timeline({ defaults: { stagger: 0.25 } });

	logoTL.fromTo("#logo", { opacity: 0 }, { opacity: 1 });
});
</script>

<h1 id="logo" class="opacity-0 font-medium text-xl">
  {#each LOGO.split("") as letter}  
    <span>
      { `${letter} ` }
    </span>
  {/each}
  <span class="font-bold text-3xl text-teal-700">
    .
  </span>
</h1>