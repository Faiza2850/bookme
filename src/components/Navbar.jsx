import React from "react";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black w-full h-[74px] px-[28px] py-[16px]">
      <div className="w-[150px] h-[37.5px] top-4 left-7">
        <img src={logo} alt="Logo" className="object-contain" />
      </div>
      <div className="flex justify-between items-center w-[841px]">
        <ul className="flex space-x-8 list-none m-0 p-0 ">
          <li>
            <a href="#" className="text-white text-base hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-base hover:text-orange-500">
              Q&A
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-base hover:text-orange-500">
              T&C
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-base hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Live Chat
          </button>
          <button className="bg-white text-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition duration-300">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;
