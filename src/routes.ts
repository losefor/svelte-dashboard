import type { Component } from "svelte";
import DashboardPage from "./pages/dashboard-page.svelte";
import LoginPage from "./lib/components/login-01/login-page.svelte";
import BlogPage from "./pages/blog-page.svelte";

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
    title: "Blog",
    path: "/blogs",
    component: BlogPage,
  },
  {
    title: "Auth",
    path: "/auth",
    component: LoginPage,
  },
];
