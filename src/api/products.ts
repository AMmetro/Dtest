export const getProducts = () =>
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      return data;
    });