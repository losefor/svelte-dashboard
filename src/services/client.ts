import { getToken } from "../storage/token";

export const request = async (path: string, method: string, body: any) => {
  const res = await fetch(`http://localhost:9000${path}`, {
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
};
