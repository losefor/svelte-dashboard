import type { Component } from "svelte";
import DashboardPage from "./pages/dashboard-page.svelte";
import LoginPage from "./lib/components/login-01/login-page.svelte";

interface Route {
  title: string;
  path: string;
  component: Component;
}

export const routes: Route[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    title: "Auth",
    path: "/auth",
    component: LoginPage,
  },
];
