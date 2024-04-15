<script lang="ts">
import { useStore } from "~/hooks/core.svelte";
import { isMenuOpenStore } from "~/stores/menu";
import { logoSpelling } from "~/content/common.ts";

const { class: className, id }: { class?: string; id?: string } = $props();

const isMenuOpen = useStore(isMenuOpenStore);
</script>

<a {id} class={`${className} tracking-widest`} href="/" on:click={() => {
  isMenuOpen.value = false
}}>
  {#each logoSpelling.split("") as letter}
    <span class={`${letter === "." ? "font-bold text-[1em] text-[#fe4164]" : ""}`}>
      {letter}
    </span>
  {/each}
</a>
