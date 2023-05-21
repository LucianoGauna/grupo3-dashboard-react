import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [products, setProducts] = useState(null);

  const getProducts = async url => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts(url);
  }, []);

  return [products?.results]; // Devuelve solo el array de productos
};
