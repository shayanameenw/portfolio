<script lang='ts'>
const { class: className }: { class?: string } = $props();

const LOGO = "zedsols";
</script>

<h1 class={className}>
  {#each LOGO.split("") as letter}  
    <span>
      { `${letter} ` }
    </span>
  {/each}
  <span class="font-black text-[1em] text-teal-700">
    .
  </span>
</h1>