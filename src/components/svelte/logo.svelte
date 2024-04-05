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
  <span class="font-bold text-3xl text-teal-700">
    .
  </span>
</h1>