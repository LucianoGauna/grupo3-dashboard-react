import { Link, Routes } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaShoppingBasket,
  FaCalendarAlt,
} from 'react-icons/fa';
import { RiArrowDownSLine, RiSettings5Fill } from 'react-icons/ri';
import { IoLogOutSharp, IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react'


const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    // bg-[#1E1F24]
    <div>
      <div
        className={`bg-[#282C34] shadow-lg shadow-[#16222a] fixed ${
          showMenu ? '-left-0' : '-left-full'
        } lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between tranisiton-all z-50`}
      >
        {/* Menu */}
        <div>
          <div className="mb-8">
            <h1 className="text-white font-bold text-2xl tracking-[4px]">
              DASHBOARD
            </h1>
          </div>
          {/* Nav */}
          <nav>
            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 hover:text-gray-400 transition-colors"
            >
              <FaHome />
              Inicio
            </Link>
            <Link
              to="users"
              className="flex items-center gap-4 text-white py-2 hover:text-gray-400 transition-colors"
            >
              <FaUser />
              <span className="flex-1 flex items-center gap-4 justify-between">
                Perfiles
                <RiArrowDownSLine />
              </span>
            </Link>
            <Link
              to="products"
              className="flex items-center gap-4 text-white py-2 hover:text-gray-400 transition-colors"
            >
              <FaShoppingBasket />
              <span className="flex-1 flex items-center gap-4 justify-between">
                Productos
                <RiArrowDownSLine />
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 hover:text-gray-400 transition-colors"
            >
              <FaCalendarAlt />
              Calendario
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 hover:text-gray-400 transition-colors"
            >
              <RiSettings5Fill />
              Configuración
            </Link>
          </nav>
        </div>
        {/* Btn menú mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed right-4 bottom-4 bg-[#282C34] border text-lg text-[#03C9D7] p-3 rounded-full z-50"
        >
          {showMenu ? <IoClose /> : <IoMenu />}
        </button>
        {/* Logout */}
        <div>
          <Link
            to="home"
            className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <IoLogOutSharp />
            Logout
          </Link>
        </div>
      </div>
      {/* <div className='text-end text-3xl'>
        <h1>Holaaaaaaaaa</h1>
        {product?.length > 0 &&
        product.map( (pr) => <p key={pr.id}>{pr.name}</p>)}
      </div> */}
    </div>
  );
};

export default Sidebar;
