<script>
  import { fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";

  export let toastState;

  const _handleToastColor = (status) => {
    switch (status) {
      case "INFO":
        return "bg-gray-200 border-gray-300";

      case "ERROR":
        return "bg-red-200 border-red-300";

      case "SUCCESS":
        return "bg-green-200 border-green-300";

      case "WARNING":
        return "bg-yellow-200 border-yellow-300";

      default:
        return "bg-gray-200 border-gray-300";
    }
  };
</script>

{#if toastState.isOpen}
  <div
    transition:fly={{ y: 100, duration: 1000, easing: bounceInOut }}
    class="fixed bottom-5 hover:scale-105 transition-all duration-300 right-5 border p-5 py-3 {_handleToastColor(
      toastState.type
    )} rounded-lg"
  >
    {toastState.title}
  </div>
{/if}
