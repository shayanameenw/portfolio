<script lang='ts'>
import {
	ArrowDownLeftIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-svelte";
import { Logo } from "~/components/svelte";
</script>

<footer class="pt-8 lg:pt-16 px-8 lg:px-16 border-t border-gray-7 grid grid-rows-[auto_1fr_auto] grid-cols-4">
  <p class="col-span-2 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300">
    Explore projects
  </p>
  <p class="col-span-2 lg:col-span-1 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300">
    More about zed
  </p>
  <p class="col-span-2 lg:col-span-1 self-end mb-4 hidden lg:block font-bold text-sm text-teal-300">
    Connect
  </p>
  <div class="col-span-2 self-start hidden lg:grid justify-items-start items-center">
    <ul class="flex flex-col gap-6 text-xl">
      <li class="flex gap-2">
        Bringing delight to Bento Design System
      </li>
      <li class="flex gap-2">
        Leading the IxD & Motion guild
      </li>
      <li class="flex gap-2">
        Envisioning the future of a platform
      </li>
      <li class="flex gap-2">
        Highlights from the past
      </li>
    </ul>
  </div>
  <div class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center">
    <ul class="flex flex-col gap-6 text-xl">
      <li class="flex gap-2">
        Home
      </li>
      <li class="flex gap-2">
        Services
      </li>
      <li class="flex gap-2">
        Projects
      </li>
      <li class="flex gap-2">
        Contact
      </li>
    </ul>
  </div>
  <div class="col-span-2 lg:col-span-1 self-start hidden lg:grid justify-items-start items-center">
    <ul class="flex flex-col gap-6 text-xl">
      <li class="flex gap-2">
        <span>
          Linkedin
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={24} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Twitter
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={24} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Facebook
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={24} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Instagram
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={24} />
        </span>
      </li>
    </ul>
  </div>
  <div class="col-span-4">
    <ul class="flex lg:hidden gap-4 justify-center items-center">
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
  <div class="col-span-4 border-t border-gray-7 mt-8 lg:mt-16 py-6 flex justify-center lg:justify-between items-center">
    <ul class="flex gap-4 items-center">
      <li>
        &copy; 2024
      </li>
      <li>
        -
      </li>
      <li>
        <Logo />
      </li>
    </ul>
    <ul class="hidden lg:flex gap-8 items-center">
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </div>
</footer>