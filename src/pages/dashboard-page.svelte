<script>
  let isNavOpen = $state(true);
  import { fly } from "svelte/transition";
  import { bounceInOut, linear } from "svelte/easing";
  import { userService } from "../services/users";
  import { onMount } from "svelte";

  let users = $state([]);

  const handleFetchAllUsers = async () => {
    const res = await userService.fetchAllUsers();
    users = res.data;
  };

  onMount(() => {
    handleFetchAllUsers();
  });
</script>

<main>
  <div class="grid grid-cols-12">
    {#if isNavOpen}
      <nav
        transition:fly={{ x: -197, duration: 100, easing: linear }}
        class="bg-gray-200 col-span-3 h-screen border border-gray-300"
      >
        <div class="p-5">
          <h1 class="text-2xl">Application</h1>
          <div
            class="animate-pulse transition-all duration-300 w-full h-px bg-linear-to-r from-gray-50 via-gray-500 to-gray-50 my-2"
          ></div>
        </div>
      </nav>
    {/if}

    <main class={isNavOpen ? "col-span-9" : "col-span-12"}>
      <header
      style="font-family: 'CustomFont', sans-serif;"
        class="bg-gray-200 py-4 px-2 border border-gray-300 flex items-center gap-4"
      >
        <button
          aria-label="test"
          onclick={() => {
            isNavOpen = !isNavOpen;
          }}
          class="hover:bg-black/10 p-1 transition-all duration-300 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-panel-left-open-icon lucide-panel-left-open"
            ><rect width="18" height="18" x="3" y="3" rx="2" /><path
              d="M9 3v18"
            /><path d="m14 9 3 3-3 3" /></svg
          >
        </button>

        Statistics
      </header>

      <section class="p-5">
        <div class="overflow-hidden rounded-xl border shadow">
          <table
            class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2"
          >
            <thead class="hidden border-b lg:table-header-group">
              <tr class="">
                <td
                  width="50%"
                  class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >username</td
                >

                <td
                  class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >createdAt</td
                >

                <td
                  class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >status</td
                >

                <td
                  class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >wallet</td
                >
              </tr>
            </thead>

            <tbody class="lg:border-gray-300">
              {#each users as user}
                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    {user.username}
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">07 February, 2022</p>
                    </div>
                  </td>

                  <td
                    class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"
                    >{user.createdAt}</td
                  >

                  <td
                    class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left"
                  >
                    {user.isActive ? "Active" : "Not Active"}
                    <div
                      class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden"
                    >
                      Complete
                    </div>
                  </td>

                  <td
                    class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"
                  >
                    <div
                      class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white"
                    >
                      {user.wallet.balanceIQD.toLocaleString()}
                    </div>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
  <!-- <button
    on:click={() => {
      navigate("/auth");
      removeToken();
    }}
  >
    logout
  </button> -->
</main>
