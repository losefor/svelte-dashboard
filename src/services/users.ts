import { request } from "./client";

const fetchAllUsers = async () => {
  return request("/users", "GET", null);
};

export const userService = {
  fetchAllUsers,
};
