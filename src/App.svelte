<script>
  import { onMount } from "svelte";
  import Router from "./utils/router/router.svelte";
  import { getToken } from "./storage/token";
  import { navigate } from "./utils/router/helper";
  import { navigationStore } from "./store/navigation";

  onMount(() => {
    const token = getToken();

    navigationStore.set({
      page: window.location.pathname,
    });

    if (!token) {
      navigate("/auth");
    }
  });
</script>

<main>
  <Router />
</main>
