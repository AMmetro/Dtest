import { LoginCredentials } from "../auth/AuthTypes";

export const userSignup = async (credentials: LoginCredentials) => {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
      expiresInMins: 30,
    }),
    credentials: 'include'
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
};


export const getMe = (token: string) => fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
  credentials: 'include'
})
  .then(res => res.json())
  .then(data => data );
