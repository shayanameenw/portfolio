<script lang="ts">
import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import gsap from "gsap";
import { useEffect, useMount } from "~/hooks/core.svelte";

useMount(() => {
	const emblaNode = document.querySelector(".embla");
	const viewportNode = emblaNode?.querySelector(".embla__viewport") as
		| HTMLElement
		| null
		| undefined;

	const options: EmblaOptionsType = {
		axis: "y",
		loop: true,
		duration: 60,
	};
	const plugins = [Autoplay({ delay: 6000 }), ClassNames()];

	if (viewportNode) {
		EmblaCarousel(viewportNode, options, plugins);
	}
});

useEffect(() => {
	const headingTL = gsap.timeline({
		defaults: { duration: 0.75, stagger: 0.25, ease: "power3.inOut" },
	});

	headingTL.fromTo(
		"#heading > span",
		{
			opacity: 0,
			yPercent: 25,
		},
		{
			opacity: 1,
			yPercent: 0,
		},
	);

	headingTL.fromTo(
		"#embla",
		{
			opacity: 0,
			yPercent: 25,
		},
		{
			opacity: 1,
			yPercent: 0,
		},
		"<",
	);
});
</script>

<section
  class="h-[calc(100vh_-_69px)] lg:h-screen overflow-hidden grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1"
>
  <div class="p-2 lg:p-16 row-span-3 col-span-3 grid place-items-center">
    <h3 id="heading" class="relative z-10 py-8 text-7xl md:text-[8rem]">
      <span class="block opacity-0 neonTextType1"> Crafting </span>
      <span class="block opacity-0 neonTextType1"> future </span>
      <span class="block opacity-0 neonTextType3"> businesses </span>
    </h3>
  </div>
  <div id="embla" class="opacity-0 embla row-span-2 col-span-2">
    <div class="embla__viewport">
      <div class="embla__container">
        <div class="embla__slide opacity-0">
          <img
            class="embla__slide__img"
            src="https://picsum.photos/600/350?v=1"
            alt=""
          />
        </div>
        <div class="embla__slide opacity-0">
          <img
            class="embla__slide__img"
            src="https://picsum.photos/600/350?v=2"
            alt=""
          />
        </div>
        <div class="embla__slide opacity-0">
          <img
            class="embla__slide__img"
            src="https://picsum.photos/600/350?v=3"
            alt=""
          />
        </div>
        <div class="embla__slide opacity-0">
          <img
            class="embla__slide__img"
            src="https://picsum.photos/600/350?v=4"
            alt=""
          />
        </div>
        <div class="embla__slide opacity-0">
          <img
            class="embla__slide__img"
            src="https://picsum.photos/600/350?v=5"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style scoped>
  .embla {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: auto;
    --slide-height: 100%;
    --slide-spacing: 0rem;
    --slide-size: 100%;
  }

  .embla__viewport {
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .embla__container {
    backface-visibility: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    touch-action: pan-x;
    margin-left: calc(var(--slide-spacing) * -1);
  }

  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
  }

  .embla__slide {
    opacity: 1;
    transition: 0.5s opacity 0.25s ease-in-out;
  }

  .embla__slide:not(.is-snapped) {
    opacity: 0.5;
  }

  .embla__slide__img {
    display: block;
    height: var(--slide-height);
    width: 100%;
    object-fit: cover;
  }

  .neonTextType1 {
      color: #fff;
      text-shadow:
        0 0 7px #fff,
        /* 0 0 10px #fff,
        0 0 21px #fff, */
        0 0 42px #fe4164; 
        /* 0 0 82px #fe4164,
        0 0 92px #fe4164,
        0 0 102px #fe4164, */
        /* 0 0 151px #fe4164; */
  }  
  .neonTextType2 {
    color: #fe4164;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      /* 0 0 21px #fff, */
      /* 0 0 42px #fe4164, */
      /* 0 0 82px #fe4164, */
      0 0 92px #fe4164;
      /* 0 0 102px #fe4164, */
      /* 0 0 151px #fe4164; */
  }

  .neonTextType3 {
    color: #fff;
    text-shadow:
      /* 0 0 7px #fff, */
      /* 0 0 10px #fff, */
      /* 0 0 21px #fff, */
      0 0 42px #fe4164,
      /* 0 0 82px #fe4164, */
      0 0 92px #fe4164,
      /* 0 0 102px #fe4164, */
      0 0 151px #fe4164;
  } 
</style>