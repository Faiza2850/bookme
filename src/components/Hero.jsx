import React from "react";
import hero from "../images/hero.png";

export const Hero = () => {
  return (
    <>
      {/* <div className='main-text'>
<h2 className="text-2xl font-bold mb-4 text-gray-800">Your Ride At One Call</h2>
        <h3 className="text-xl mb-4 text-gray-600">ALL IN ONE TRAVEL SOLUTIONS</h3>
        
</div>
     */}
     <div
          className="min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
      <section className="absolute flex inset-0 bg-black bg-opacity-50">
        <div className="m-auto">
          <div className="flex flex-col justify-center items-center text-center z-10">
            <h1 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-[69] [text-shadow:_2px_10px_4.8px_rgb(0_0_0_/_44%)]">
              Your Ride At One Call
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 leading-9 font-inter text-center font-medium drop-shadow-custom [text-shadow:_3px_2px_4.1px_rgb(0_0_0_/_57%)]">
              ALL IN ONE TRAVEL SOLUTIONS
            </p>
          </div>
        </div>
        
      </section>
      </div>
    </>
  );
};
