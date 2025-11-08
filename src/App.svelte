<script>
  import { onMount } from "svelte";
  import Router from "./utils/router/router.svelte";
  import { getToken } from "./storage/token";
  import { navigate } from "./utils/router/helper";

  onMount(() => {
    const token = getToken();

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  });
</script>

<main>
  <Router />
</main>
