<script lang="ts">
  import { routes } from "../../routes";
  import { navigationStore } from "../../store/navigation";

  


</script>

<main>
  {#each routes as item}
    {#if item.path === $navigationStore.page}
    {console.log($navigationStore.page)}
      <svelte:component this={item.component} />
    {/if}
  {/each}
</main>
