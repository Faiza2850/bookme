import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineApple, AiOutlineAndroid } from "react-icons/ai";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";



const Footer = () => {
  return (
    <>
    <div className="p-6 ">
    <footer className="bg-black text-white max-w-full flex items-center justify-center ">
      <div className="container  grid grid-cols-1 md:grid-cols-3 gap-9 md:shrink-0">
        <div className="text-center xl:text-left">
          <h5 className="font-semibold text-lg mb-3 text-[#FEB601]  ">Passengers</h5>
          <ul>
            <li className="mb-2">
              <a href="#">Flights</a>
            </li>
            <li className="mb-2">
              <a href="#">Airlines</a>
            </li>
            <li className="mb-2">
              <a href="#">Park</a>
            </li>
            <li className="mb-2">
              <a href="#">Security Wait Times</a>
            </li>
            <li className="mb-2">
              <a href="#">Map</a>
            </li>
            <li className="mb-2">
              <a href="#">Shop & Dine</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-lg text-center mb-3 text-[#FEB601] ">
            Business and Community
          </h5>
          <ul className="text-center">
            <li className="mb-2">
              <a href="#">About us</a>
            </li>
            <li className="mb-2">
              <a href="#">Career</a>
            </li>
          </ul>
          <div className="mt-36">
            <h5 className="font-semibold text-center text-lg mb-3 text-[#FEB601]">Follow us</h5>
            <div className="flex space-x-4 justify-center">
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
        <div className="xl:text-right text-center ">
          <h5 className="font-semibold text-lg mb-3 text-[#FEB601] ">General</h5>
          <ul>
            <li className="mb-2">
              <a href="#">Report Property</a>
            </li>
            <li className="mb-2">
              <a href="#">Sign Up</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact us</a>
            </li>
            <li className="mb-2">
              <a href="#">Newsroom</a>
            </li>
          </ul>
          <div className="mt-20">
            <h5 className="font-semibold text-lg mb-3 text-[#FEB601]">
              Download the Utravel app
            </h5>
            
              <div className="w-[150px] h-[37.5px] xl:ml-48 flex ml-16 ">
        <img src={img7} alt="Logo" className="object-contain " />
        <img src={img8} alt="Logo" className="object-contain " />
      </div>
            
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};
export default Footer;