import React from 'react'
import { TbArrowBack } from "react-icons/tb";
import { IoIosCloudDone } from "react-icons/io";

export const ManageCards = () => {
  return (
    <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-7xl mx-auto">
          <div className="w-full max-w-7xl bg-white rounded-lg p-8">
            <h1 className="md:text-5xl  text-3xl font-bold text-black mb-4">Bookmee</h1>
            <p className="text-lg"> Manage Cards</p>
            <p className="text-sm text-center mb-4 text-[#BDBDBD] max-w-xl mx-auto mt-6">
            Update or Add Your Card Details 
    </p>
           
            <div className="flex flex-wrap md:ml-[70px] gap-4 lg:gap-8">
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                First Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
               Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                 Mobile Number*
                </label>
                <input
                  type="text"
                  placeholder="+44 12345679"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                 E-mail*
                </label>
                <input
                  type="email"
                  placeholder="Email@yahoo.com"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px]">
                <label className="block text-[#FEB601] font-bold mb-2">
                Name on Card*
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                  Card Number*
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="  w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2 ">
                Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              <div className="w-[450px]">
                <label className="block text-[#FEB601] font-bold mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="5555"
                  className="w-full p-2 border border-gray-300 rounded italic"
                />
              </div>
              
            </div>
            <div className="flex justify-center  md:gap-20 mt-8">
              <button className="bg-black text-[#FEB601] p-2 text-xl rounded font-semibold flex w-[200px] md:w-[400px] max-w-md items-center justify-center mr-4">
               Back
               <TbArrowBack className="ml-2 mr-2" />
              </button>
              <button className="bg-[#FEB601] text-black p-2 text-xl font-semibold  rounded md:w-[400px] w-[400px] flex max-w-xl items-center justify-center">
                Update
                <IoIosCloudDone className="ml-2 mr-2" />
               
              </button>
            </div>
          </div>
        </div>
      
  )
}
