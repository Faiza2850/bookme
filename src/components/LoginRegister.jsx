import React from "react";
import { FaLock, FaSignInAlt,FaUserPlus } from "react-icons/fa";

export  const LoginRegister = () => {
  return (
    <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-7xl mx-auto">
      <div className="w-full max-w-7xl bg-white rounded-lg p-8">
        <h1 className="md:text-5xl  text-3xl font-bold text-black mb-4">Bookmee</h1>
        <p className="text-lg"> Login/Register</p>
        <p className="text-sm text-center mb-4 text-[#BDBDBD] max-w-xl mx-auto mt-6">
  If you have booked before, an account will have been created for you.
  If you are unsure of this account's credentials, select Reset Password below.
</p>


        {/* Login Section */}
        <div className="mb-8">
        <div className="max-w-md mx-auto ">
          <div className="mb-4 ">
            <label className="text-[#FEB601] block font-bold mb-2 ">
              E-mail*
            </label>
            <input
              type="email"
              placeholder="Email@yahoo.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="text-[#FEB601] block  font-bold mb-2">
              Password*
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          </div>
          <div className="flex justify-center  md:gap-20 mt-8">
            <button className="bg-black text-[#FEB601] text-xl p-2 rounded flex w-[200px] md:w-[400px] max-w-md items-center justify-center mr-4">
              Reset Password 
              <FaLock className="mr-2 ml-3" />
            </button>
            <button className="bg-[#FEB601] text-black p-2 text-xl rounded md:w-[400px] w-[400px] flex max-w-xl items-center justify-center">
              
              Log In
              <FaSignInAlt className="ml-2 mr-2" />
            </button>
          </div>
        </div>

        {/* <hr className="my-8" /> */}

        {/* Registration Section */}
        <p className="text-sm mb-4 text-[#BDBDBD] flex justify-center">
          If you are a <strong>New User/Customer</strong>, fill all the details and an account will be created for you.
        </p>
        <div className="flex flex-wrap md:ml-[70px] gap-4">
          <div className="w-[450px] ">
            <label className="block text-[#FEB601] font-bold mb-2">
              First Name *
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px] md:ml-[70px] sm:ml-[10px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px] ">
            <label className="block text-[#FEB601] font-bold mb-2">
              Mobile Number*
            </label>
            <input
              type="text"
              placeholder="+44 12345679"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px] md:ml-[70px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              E-mail*
            </label>
            <input
              type="email"
              placeholder="Email@yahoo.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              Password*
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px] md:ml-[70px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="col-span-2 w-[990px] ">
            <label className="block text-[#FEB601] font-bold mb-2">
              Billing Address
            </label>
            <input
              type="text"
              placeholder="Billing Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px]">
            <label className="block text-[#FEB601] font-bold mb-2">City</label>
            <input
              type="text"
              placeholder="ABC"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px] md:ml-[70px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              Postcode
            </label>
            <input
              type="text"
              placeholder="***"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[450px]">
            <label className="block text-[#FEB601] font-bold mb-2">
              Country
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
            Book A Ride
          </button>
          <button className="bg-[#FEB601] text-black p-2 text-xl font-semibold  rounded md:w-[400px] w-[400px] flex max-w-xl items-center justify-center">
            Register
            <FaUserPlus  className="ml-2 mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginRegister;
