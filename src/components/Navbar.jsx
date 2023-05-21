import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <header className="fixed absolute left-0 top-0 w-full bg-[#20232A] p-8 flex justify-end">
      <ul className="flex items-center gap-4">
        <li>
          <Link
            to="home"
            className="text-[#949DB2] text-lg hover:text-[#E6E5E8]"
          >
            <IoNotifications />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-[#949DB2] flex items-center gap-2 hover:text-[#E6E5E8] font-medium"
          >
            <p>Luciano Gauna</p>
            <img src="https://elcomercio.pe/resizer/FEchEMY9S5a6xZZtG43Nhp7_R50=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3TC7KWNTGVEN3K7SPO4ZUUEMMU.webp" alt="Avatar" className="w-8 h-8 rounded-full" />
            <RiArrowDownSLine />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
