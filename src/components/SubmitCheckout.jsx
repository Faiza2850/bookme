import React from 'react';

const BookingComplete = () => {
  const handleDoneClick = () => {
    console.log('Done clicked');
    // Add any other functionality like navigating to home or closing the modal
  };

  const handleNextRideClick = () => {
    console.log('Book Next Ride clicked');
    // Add logic for booking the next ride
  };

  return (

    <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-7xl -y-S my-0 mx-auto">
    <div className="w-full max-w-7xl bg-white rounded-lg p-8">

      <h1 className="md:text-5xl  text-3xl font-bold text-black mb-4">Bookmee</h1>
      <p className="text-lg"> Checkout Form</p>

     <div className="flex justify-center items-center min-h-screen bg-gray-100 border-b-black">
      <div className="bg-white p-8 border border-black  rounded-lg shadow-lg shadow-[#727272] text-center max-w-md w-full">
        <div className="flex justify-center mb-4"> 

          <div className="bg-yellow-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Booking Completed</h2>
        <p className="text-gray-600 mb-6">
          Your Booking has been Completed for Airport Taxi.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleDoneClick}
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
          >
            Done
          </button>
          <button
            onClick={handleNextRideClick}
            className="bg-[#FFCA09] hover:bg-yellow-600. text-black py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Book Next Ride
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BookingComplete;
