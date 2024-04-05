<script lang='ts'>
import { ArrowDownLeftIcon } from "lucide-svelte";
import { Logo } from "~/components/svelte";
</script>

<footer class="pt-24 px-24 border-t border-gray-7 h-screen grid grid-rows-[1fr_auto] grid-cols-3">
  <article class="flex flex-col gap-4">
    <Logo class="font-medium text-5xl" />
    <p class="text-xl hidden">
      <span class="block">Crafting future</span>
      <span class="block">businesses</span>
    </p>
  </article>
  <article class="grid justify-items-end items-center">
    <ul class="flex flex-col gap-12 text-3xl">
      <li class="flex gap-2">
        Home
        <!-- <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span> -->
      </li>
      <li class="flex gap-2">
        Projects
        <!-- <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span> -->
      </li>
      <li class="flex gap-2">
        About us
        <!-- <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span> -->
      </li>
      <li class="flex gap-2">
        Contact
        <!-- <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span> -->
      </li>
    </ul>
  </article>
  <article class="grid justify-items-end items-center">
    <ul class="flex flex-col gap-12 text-3xl">
      <li class="flex gap-2">
        <span>
          Linkedin
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Twitter
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Facebook
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span>
      </li>
      <li class="flex gap-2">
        <span>
          Instagram
        </span>
        <span>
          <ArrowDownLeftIcon class="rotate-180" size={36} />
        </span>
      </li>
    </ul>
  </article>
  <article class="col-span-3 border-t border-gray-7 mt-6 py-6 flex justify-between items-center">
    <ul class="flex gap-4 items-center">
      <li>
        &copy; 2024
      </li>
      <li>
        -
      </li>
      <li class="-mt-3">
        <Logo />
      </li>
    </ul>
    <ul class="flex gap-4 items-center">
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </article>
</footer>