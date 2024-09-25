import React from 'react'
import { TfiBackLeft } from "react-icons/tfi";
import { HiShoppingCart } from "react-icons/hi2";

const OrderSummary = () => {
    const orderDetails = [
        { label: "Start:", value: "Manchester City" },
        { label: "End:", value: "London City" },
        { label: "Flight Arrival:", value: "September 7th, 2024" },
        { label: "Fleet:", value: "Executive Car" },
        { label: "Passengers:", value: "1 Person" },
        { label: "Suitcase:", value: "1 Suitcase" },
        { label: "Arriving Flight:", value: "PK-876 From Qatar" },
        { label: "Meet and Greet:", value: "Service Selected" },
      ];
     
        const fareDetails = [
          { label: "Standard Fare:", value: "£315" },
          { label: "Meet and Greet:", value: "+£5" },
          { label: "Total Fare:", value: "£320" },
        ];
  return (
  <>
  <div className="min-h-screen bg-gray-100 py-12 relative bg-black">
        <div className="container lg:mx-auto mx-auto">
          <div className="bg-white rounded-3xl -mt-6 md:-mt-16 shadow-lg p-12 w-full lg:w-[100%] mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-[#333333]">Bookmee</h2>
            <p className="text-lg mb-6">Your Order Summary</p>

            {/* Dynamic Order Details */}
            {orderDetails.map((detail, index) => (
              <div className="flex justify-between" key={index}>
                <h5 className="text-[#FE9901] font-bold">{detail.label}</h5>
                <h5 className="text-right font-semibold">{detail.value}</h5>
              </div>
            ))}

            {/* Fare Details */}
            {fareDetails.map((fare, index) => (
              <div
                className={`flex justify-between mt-2 p-2 rounded ${
                  index === 2 ? "bg-black" : "bg-[#111D47]"
                }`}
                key={index}
              >
                <h5 className="text-[#FE9901] font-bold">{fare.label}</h5>
                <h5 className="text-right font-semibold text-white">{fare.value}</h5>
              </div>
            ))}

            <div className="flex justify-center md:gap-20 mt-8">
              <button className="bg-black text-[#FEB601] p-2 text-xl rounded font-semibold flex w-[200px] md:w-[400px] max-w-md items-center justify-center mr-4">
                Back
                <TfiBackLeft className="ml-2 mr-2 pt-1" />
              </button>
              <button className="bg-[#FEB601] text-black p-2 text-xl font-semibold rounded md:w-[400px] w-[400px] flex max-w-xl items-center justify-center">
                CheckOut
                <HiShoppingCart className="ml-2 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
  );
}

export default OrderSummary;