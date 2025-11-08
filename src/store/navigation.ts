import { writable } from "svelte/store";

export const navigationStore = writable({
  page: "/dashboard",
});
