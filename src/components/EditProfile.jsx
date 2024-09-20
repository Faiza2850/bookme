import React from 'react'
import { TbArrowBack } from "react-icons/tb";
import { IoIosCloudDone } from "react-icons/io";

const EditProfile = () => {
    return (
        <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-7xl mx-auto">
          <div className="w-full max-w-7xl bg-white rounded-lg p-8">
            <h1 className="md:text-5xl  text-3xl font-bold text-black mb-4">Bookmee</h1>
            <p className="text-lg"> Edit Profile</p>
            <p className="text-sm text-center mb-4 text-[#BDBDBD] max-w-xl mx-auto mt-6">
            Update Your Details Like Name, Email, Address, City etc.
    </p>
           
            <div className="flex flex-wrap md:ml-[70px] gap-4">
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                Edit First Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                Edit Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                 Edit Mobile Number*
                </label>
                <input
                  type="text"
                  placeholder="+44 12345679"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                 Edit E-mail*
                </label>
                <input
                  type="email"
                  placeholder="Email@yahoo.com"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px]">
                <label className="block text-[#FEB601] font-bold mb-2">
                Set New  Password*
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="col-span-2 lg:w-[920px] w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                Edit Billing Address
                </label>
                <input
                  type="text"
                  placeholder="Billing Address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px]">
                <label className="block text-[#FEB601] font-bold mb-2">Edit City</label>
                <input
                  type="text"
                  placeholder="ABC"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px] ">
                <label className="block text-[#FEB601] font-bold mb-2">
                Edit  Postcode
                </label>
                <input
                  type="text"
                  placeholder="***"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-[450px]">
                <label className="block text-[#FEB601] font-bold mb-2">
                Edit Country
                </label>
                <input
                  type="text"
                  placeholder="ABC"
                  className="w-full p-2 border border-gray-300 rounded"
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
      );
}

export default EditProfile