export const userSignup = (credentials: any)=> fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: credentials.username,
    password: credentials.password, 
    expiresInMins: 30,
  }),
  credentials: 'include'
})
  .then(res => res.json())
  .then(data => {
    return data;
  });