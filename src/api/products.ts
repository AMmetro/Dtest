import { data } from "react-router-dom";

export const getProducts = () =>
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => data);

export const searchProducts = async (searchTerm: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${searchTerm}`
  );
  return res.json();
};

// export const addProduct = async (product: any)=> fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)
// })
//   .then(res => res.json())
//   .then(data => data)