import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // handle form submission (API calls, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 relative">
      <div className="container mx-auto px-0">
      {/* <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-xl mx-auto">
      <div className='ml-8'> */}
        <div className="bg-white rounded-3xl -mt-6 md:-mt-16 shadow-lg  p-12 w-full lg:w-[100%] mx-auto ">
        <h2 className="text-4xl font-bold mb-2 text-[#333333]">Bookmee</h2>

          <h2 className="text-2xl  mb-2">Contact Us</h2>
          
          <p className="text-center text-[#333333] mb-8 text-md">
            Get help from the expert Onward Travel Solutions staff 24/7 using our LiveChat below.
          </p>
          
          {/* Live Chat Button */}
          <button 
        className="w-3/4 bg-[#FFCA09] hover:bg-yellow-600 text-black py-4 rounded-md font-bold justify-center flex mb-10 mx-auto  text-xl">

            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M7 14h10M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Live Chat With An Operator Now
          </button>

          <p className="text-centerr text-[#333333] mx-24 mb-12 text-md">
            If you have a query relating to your booking, account, or need support then submit an enquiry below. A member of the Customer Service team will investigate and get back to you as soon as possible. For security purposes please do not enter any credit card information into the boxes below.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-3 text-[#FFCA09] font-bold text-xl">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-3 border border-lg border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
                />
              </div>
              <div>
                <label className="block mb-3 text-[#FFCA09] font-bold text-xl">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-[#FFCA09] font-bold text-xl">Mobile Number *</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+44 12345679"
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-[#FFCA09] font-bold text-xl">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email@example.com"
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-[#FFCA09] font-bold text-xl">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message..."
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-48 text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-[300px] bg-[#FFCA09] hover:bg-yellow-600 text-black py-3 rounded-md font-bold mb-8 mx-auto block text-xl"
            >
              Send Message
            </button>

            {/* Bottom section - Write Us and Call Us */}
            <div className="flex justify-between text-md text-[#515151] mt-6">
              {/* Left - Write Us */}
              <div>
                <h4 className="font-bold text-black">Write Us</h4>
                <p>Airport Taxi Travel Solutions Ltd</p>
                <p>3, Viking House, Cheddar Business Park</p>
                <p>Wedmore Road, Cheddar</p>
                <p>BS27 3EB</p>
              </div>
              {/* Right - Call Us */}
              <div>
                <h4 className="font-bold text-black ">Call Us</h4>
                <p>United Kingdom: 0203 4788892</p>
                <p>International: 0044 203 4788892</p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



