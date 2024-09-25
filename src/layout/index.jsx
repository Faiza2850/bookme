import React from 'react';
import Hero from '../assets/HeroSection.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

import InfoSection from '../components/InfoSection';


const Layout = ({  children, backURL }) => {


  return (
    <div>
      <Header />
      
      <div className="relative w-full h-[60vh] md:h-[700px] overflow-hidden">
        <img src={Hero} alt="Hero" className="w-full h-full  bg-cover  object-cover" />
        <div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black bg-opacity-40  transform -translate-y-0 ">
        <div className="absolute inset-0 flex flex-col items-center justify-center  transform -translate-y-12 mt-40 md:mt-36">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FFCA09] [text-shadow:_2px_10px_4.8px_rgb(0_0_0_/_44%)] mb-4 text-center drop-shadow-lg shadow-black poppins-semibold">
            Your Ride At One Call
          </h1>
          <p className="text-xl md:text-3xl text-white text-center inter [text-shadow:_2px_10px_4.8px_rgb(0_0_0_/_44%)] font-medium">
            ALL IN ONE TRAVEL SOLUTIONS
          </p>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-[#000000]">
        <div className="relative z-10 w-full max-w-7xl mx-auto p-4 -mt-48 md:-mt-20 lg:-mt-48">
        {children}
        </div>

        <div className="flex flex-grow text-white py-2 px-6">
          <div className="mt-0 md:mt-2 lg:mt-4">
            <InfoSection />
          </div>
        </div>
        <div >
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
