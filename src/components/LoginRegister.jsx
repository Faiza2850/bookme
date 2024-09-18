import React from "react";
import { FaLock, FaSignInAlt } from "react-icons/fa";

export  const LoginRegister = () => {
  return (
    <div className="bg-black flex  justify-center items-center min-h-screen ">
      <div className="w-[full] max-w-8xl bg-white shadow-md rounded-lg p-8 mt-[-280px]  z-20 ">
        <h1 className="text-2xl font-bold text-black mb-4">Bookmee</h1>
        <p className="text-black"> Login/Register</p>
        <p className="text-sm text-center mb-4 text-gray-400 mt-6">
          If you have booked before, an account will have been created for you.
          If you are unsure of this account's credentials select Reset Password
          below.
        </p>

        {/* Login Section */}
        <div className="mb-8 w-full">
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
          <div className="flex justify-between mt-8">
            <button className="bg-black text-[#FEB601] p-2 rounded flex w-full items-center justify-center mr-4">
              Reset Password 
              <FaLock className="mr-2" />
            </button>
            <button className="bg-yellow-500 text-black p-2 rounded flex w-full items-center justify-center">
              <FaSignInAlt className="mr-2" />
              Log In
            </button>
          </div>
        </div>

        <hr className="my-8" />

        {/* Registration Section */}
        <p className="text-sm mb-4">
          If you are a <strong>New User/Customer</strong>, fill all the details and an account will be created for you.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              First Name *
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              Mobile Number*
            </label>
            <input
              type="text"
              placeholder="+44 12345679"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              E-mail*
            </label>
            <input
              type="email"
              placeholder="Email@yahoo.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              Password*
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[#FEB601] font-bold mb-2">
              Billing Address
            </label>
            <input
              type="text"
              placeholder="Billing Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">City</label>
            <input
              type="text"
              placeholder="ABC"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-[#FEB601] font-bold mb-2">
              Postcode
            </label>
            <input
              type="text"
              placeholder="***"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
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
        <div className="flex justify-between mt-8">
          <button className="bg-black text-[#FEB601] p-2 rounded w-full mr-4">
            Book A Ride
          </button>
          <button className="bg-yellow-500 text-black p-2 rounded w-full">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

// default LoginRegister;
