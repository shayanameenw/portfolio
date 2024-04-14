<script lang="ts">
import gsap from "gsap";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-svelte";
import { useEffect } from "~/hooks/core.svelte";

useEffect(() => {
	gsap.to(
		["#contact-heading", "#contact-info", ".divider", "#contact-paragraph"],
		{
			ease: "power3.inOut",
			duration: 0.75,
			stagger: 0.25,
			opacity: 1,
			y: 0,
		},
	);
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
        <h4>The Netherlands</h4>
        <ul class="flex gap-4 items-center px-1">
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>
      </div>
      <div class="flex-1 text-sm md:text-xl">
        <h4>Centurionbaan 220</h4>
        <h4>3769 AV Soesterberg, The Netherlands</h4>
        <p>
          <span> T: </span>
          <span> +31 346 35 75 00 </span>
        </p>
        <p>
          <span> E: </span>
          <span> info@hypsos.museumstudio.com </span>
        </p>
      </div>
    </div>
    <div class="divider opacity-0 mx-6 lg:mx-2"></div>
    <p
      id="contact-paragraph"
      class="opacity-0 translate-y-full px-4 py-8 text-lg lg:text-2xl leading-loose lg:leading-loose"
      >
      Please, do reach out to us. Together we can craft future memories. We love
      to be your sparring partner and show you how we can bring your ideas to
      life.
    </p>
  </div>
</section>
