<script lang="ts">
import gsap from "gsap";
import { useEffect } from "~/hooks/core.svelte";
import { default as Service } from "./service.svelte";
import { servicesSection } from "~/content/services-page.ts";

useEffect(() => {
	gsap.to(["#services-heading", "#services-paragraph"], {
		duration: 0.35,
		stagger: 0.15,
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
      {servicesSection.para}
    </p>
    <div class="opacity-0 mx-4 mb-16"></div>
    {#each servicesSection.services as item}
      <Service {item} />
    {/each}
  </div>
</section>
