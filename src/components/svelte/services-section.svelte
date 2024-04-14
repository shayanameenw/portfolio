<script lang="ts">
import gsap from "gsap";
import { useEffect } from "~/hooks/core.svelte";
import Service from "./service.svelte";

useEffect(() => {
	gsap.to(["#services-heading", "#services-paragraph"], {
		ease: "power3.inOut",
		duration: 0.75,
		stagger: 0.25,
		opacity: 1,
		y: 0,
	});
});
</script>

<section class="min-h-[calc(100vh_-_69px)] lg:min-h-screen overflow-hidden">
  <div class="p-2 lg:px-16">
    <h3
      id="services-heading"
      class="opacity-0 translate-y-1/4 px-2 lg:px-0 py-8 text-7xl md:text-[8rem]"
    >
      Our Services
    </h3>
    <p
      id="services-paragraph"
      class="opacity-0 translate-y-1/4 px-4 pb-12 text-lg lg:text-2xl leading-loose lg:leading-loose"
    >
      A production company with a difference. From museum and interior fit-out
      to immersive brand experiences, we bring your story to life through
      bespoke design and build services. A complete turnkey offering from
      concept to delivery, led by values in sustainability, quality and
      proactive project management
    </p>
    <div class="opacity-0 mx-4 mb-16"></div>
    {#each [0, 1, 2] as item, index}
      <Service item={index} />
    {/each}
  </div>
</section>
