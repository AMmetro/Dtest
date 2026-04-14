import { data } from "react-router-dom";

export const getProducts = () =>
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      return data;
    });


export const searchProducts = (searchTerm: string) => fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
  .then(res => res.json())
  .then(data => data);