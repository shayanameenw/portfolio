<script lang="ts">
import { default as gsap } from "gsap";
import { useEffect } from "~/hooks/core.svelte";
import { contactSection } from "~/content/contact-page.ts";
import { socialLinks } from "~/content/common.ts";

useEffect(() => {
	gsap.to(["#contact-heading", "#contact-info", "#contact-paragraph"], {
    duration: 0.35,
    stagger: 0.15,
		opacity: 1,
		y: 0,
	});
});
</script>

<section class="overflow-hidden">
  <div class="p-2 lg:p-16">
    <h3
      id="contact-heading"
      class="opacity-0 translate-y-full px-2 lg:px-0 py-8 text-7xl md:text-[8rem]"
    >
      Contact
    </h3>
    <div
      id="contact-info"
      class="opacity-0 translate-y-full px-4 mb-12 flex flex-col lg:flex-row gap-8"
    >
      <div class="flex-1 space-y-4 text-xl md:text-3xl">
        <h4>{contactSection.address.country}</h4>
        <ul class="flex gap-4 items-center px-1">
          {#each socialLinks as {url, SvelteIcon}}
            <li>
              <a href={url}>
                <SvelteIcon />
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex-1 text-sm md:text-xl">
        <h4>{contactSection.address.line1}</h4>
        <h4>{contactSection.address.line2}</h4>
        <p>
          <span> T: </span>
          <span>{contactSection.telephoneNumber}</span>
        </p>
        <p>
          <span> E: </span>
          <span>{contactSection.emailAddress}</span>
        </p>
      </div>
    </div>
    <p
      id="contact-paragraph"
      class="opacity-0 translate-y-full px-4 py-8 text-lg lg:text-2xl leading-loose lg:leading-loose"
      >
      {contactSection.para}
    </p>
  </div>
</section>
