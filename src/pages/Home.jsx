import React from 'react';
import { Link, Routes } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaShoppingBasket,
  FaCalendarAlt,
} from 'react-icons/fa';
import { RiArrowDownSLine, RiSettings5Fill } from 'react-icons/ri';
import { useEffect,useState } from 'react';

const Home = () => {
  const [product, setProduct] = useState(null);
  
  const getProducts = async(url) => {
    
      const data = await fetch(url)
      const response = await data.json();
      
      console.log(response)  
      setProduct(response.products)
  }

  useEffect(() => {
    getProducts("http://localhost:3003/api/products")
  }, [])
  return (
    <div className="">
      <div className="bg-[#1E1F24] fixed left-0 top-0 w-72 h-full p-8">
        <div>
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-white font-bold text-2xl tracking-[4px]">
              LOGO
            </h1>
          </div>
          {/* Nav */}
          <nav>
            <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
              <FaHome />
              Inicio
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
              <FaUser />
              <span className="flex-1 flex items-center gap-4 justify-between">
                Perfiles
                <RiArrowDownSLine />
              </span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
              <FaShoppingBasket />
              <span className="flex-1 flex items-center gap-4 justify-between">
                Productos
                <RiArrowDownSLine />
              </span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
              <FaCalendarAlt />
              Calendario
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
              <RiSettings5Fill />
              Configuración
            </a>
          </nav>
        </div>
      </div>
      <div className='text-end text-3xl'>
        <h1>Holaaaaaaaaa</h1>
        {product?.length > 0 &&
        product.map( (pr) => <p key={pr.id}>{pr.name}</p>)}
      </div>
      <div className='text-end'>

      </div>
    </div>
  );
};

export default Home;
