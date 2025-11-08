<script>
  import { removeToken } from "../storage/token";
  import { navigate } from "../utils/router/helper";
</script>

<main>
  <p>Dashboard</p>
  <button
    on:click={() => {
      navigate("/auth");
      removeToken();
    }}
  >
    logout
  </button>
</main>
