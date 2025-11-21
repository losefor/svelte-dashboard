import { request } from "./client";

interface LoginDto {
  username: string;
  password: string;
}

const login = ({ username, password }: LoginDto) => {
  return request("/auth/login", "POST", { username, password });
};

export const authService = {
  login,
};
