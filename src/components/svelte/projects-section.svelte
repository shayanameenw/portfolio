<script lang="ts">
import gsap from "gsap";
import { useEffect } from "~/hooks/core.svelte";

useEffect(() => {
	gsap.to(["#projects-heading", "#projects-paragraph", ".divider"], {
		ease: "power3.inOut",
		duration: 1,
		stagger: 0.5,
		opacity: 1,
		y: 0,
	});
});
</script>
  
  <section class="min-h-[calc(100vh_-_69px)] lg:min-h-screen overflow-hidden">
    <div class="p-8 lg:p-16">
      <h3 id="projects-heading" class="opacity-0 translate-y-[100vh] px-2 lg:px-0 py-8 text-7xl md:text-[8rem]">
        Our projects
      </h3>
      <p id="projects-paragraph" class="opacity-0 translate-y-[100vh] px-4 py-12 text-2xl md:text-4xl">
        A production company with a difference. From museum and interior fit-out to immersive brand experiences, we bring your story to life through bespoke design and build projects. A complete turnkey offering from concept to delivery, led by values in sustainability, quality and proactive project management
      </p>
      <div class="divider opacity-0"></div>
    </div>
  </section>