import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [products, setProducts] = useState(null);
  const [info, setInfo] = useState(null); // Nuevo estado para almacenar el objeto info

  const getProducts = async url => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setProducts(response.results);
      setInfo(response.info); // Actualizar el estado con el objeto info
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts(url);
  }, []);

  return [products, info]; // Devuelve el array de productos y el objeto info como una matriz
};