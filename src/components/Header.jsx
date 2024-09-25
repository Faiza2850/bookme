import React from 'react'
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>

<header className="bg-black text-white py-4 px-6 flex justify-between items-center">
  {/* Left Section: Logo */}
  <div className="flex items-center">
    <img src={logo} alt="Bookmee Logo" className="h-8 mr-4" />
  </div>

  {/* Middle Section: Navigation */}
  <div className="flex-1">
    <nav>
      <ul className="md:flex hidden md:justify-center space-x-20">
        <li>
          <Link to="/" className="hover:text-[#FFAE00]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/qa" className="hover:text-[#FFAE00]">
            Q&A
          </Link>
        </li>
        <li>
          <Link to="/tc" className="hover:text-[#FFAE00]">
            T&C
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#FFAE00]">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </div>

  {/* Right Section: Buttons */}
  <div className="flex items-center">
    <button className="bg-[#FFAE00] text-black px-4 py-1 rounded-3xl hover:bg-[#FFB92E]">
      Live Chat
    </button>
    <button className="ml-4 text-[#FE9901] px-6 font-bold font- py-1.5 poppins text-sm rounded-3xl bg-white hover:text-[#FFB92E]">
      Log In
    </button>
  </div>
</header>

    </div>
  )
}

export default Header