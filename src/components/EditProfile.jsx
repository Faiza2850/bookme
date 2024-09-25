import React, { useState } from 'react';
import { IoIosCloudDone } from "react-icons/io";
import { FaRegArrowAltCircleDown} from "react-icons/fa";


const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    billingAddress: '',
    city: '',
    postCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 relative">
      <div className="container mx-auto px-0">
      <div className="bg-white rounded-3xl -mt-6 md:-mt-16 shadow-lg  p-12 w-full lg:w-[100%] mx-auto ">
      <h2 className="text-4xl font-bold mb-2 text-[#333333]">Bookmee</h2>

        <p className="text-lg mb-6">Edit Profile</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit Mobile Number *</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+44 123456789"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold">Edit E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email@yahoo.com"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit Billing Address *</label>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                placeholder="1234 Elm St"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit Post Code *</label>
              <input
                type="text"
                name="postCode"
                value={formData.postCode}
                onChange={handleChange}
                placeholder="12345"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-3 text-[#FFCA09] font-bold ">Edit Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="United Kingdom"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-2">
              <div className="flex justify-center md:gap-20 mt-8">
                <button className="bg-black text-[#FEB601] p-2 text-xl rounded font-semibold flex w-[200px] md:w-[400px] max-w-md items-center justify-center mr-4">
                  Back
                   <FaRegArrowAltCircleDown className="ml-2 mr-2" />
                </button>
                <button className="bg-[#FEB601] text-black p-2 text-xl font-semibold rounded md:w-[400px] w-[400px] flex max-w-xl items-center justify-center">
                  Update 
                  <IoIosCloudDone className="ml-2 mr-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
