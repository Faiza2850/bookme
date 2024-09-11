import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineApple, AiOutlineAndroid } from 'react-icons/ai';


export const Footer = () => {
  return (
   
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="font-bold text-lg mb-3 text-[#FEB601] ">Passengers</h5>
          <ul>
            <li className="mb-2"><a href="#">Flights</a></li>
            <li className="mb-2"><a href="#">Park</a></li>
            <li className="mb-2"><a href="#">Security Wait Times</a></li>
            <li className="mb-2"><a href="#">Map</a></li>
            <li className="mb-2"><a href="#">Shop & Dine</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb- text-[#FEB601] ">Business and Community</h5>
          <ul>
            <li className="mb-2"><a href="#">About us</a></li>
            <li className="mb-2"><a href="#">Career</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3 text-[#FEB601] ">General</h5>
          <ul>
            <li className="mb-2"><a href="#">Report Property</a></li>
            <li className="mb-2"><a href="#">Sign Up</a></li>
            <li className="mb-2"><a href="#">Contact us</a></li>
            <li className="mb-2"><a href="#">Newsroom</a></li>
          </ul>
          <div className="mt-4" >
            <h5 className="font-bold text-lg mb-3 text-[#FEB601]  ">Follow us</h5>
            <div className="flex space-x-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="mt-4">
            <h5 className="font-bold text-lg mb-3 text-[#FEB601] ">Download the Utravel app</h5>
            <div className="flex space-x-4">
              <AiOutlineApple />
              <AiOutlineAndroid />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

