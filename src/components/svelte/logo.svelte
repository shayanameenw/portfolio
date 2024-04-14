<script lang="ts">
const { class: className, id }: { class?: string; id?: string } = $props();

const LOGO = "zedsols.";
</script>

<h1 {id} class={`${className} tracking-widest`}>
  {#each LOGO.split("") as letter}
    <span class={`${letter === "." ? "font-bold text-[1em] text-teal-700" : ""}`}>
      {letter}
    </span>
  {/each}
</h1>
