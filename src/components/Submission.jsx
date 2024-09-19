import React from 'react';
import check from '../images/check.svg';


export const Submission = () => {
  return (
   <div className='sm:pt-2 lg:pt-8 p-16 rounded mx-auto'>
    <h1 className='font-bold text-xl '>
        BOOKMEE
    </h1>
    <h4 className='mb-4' >Checkout Form</h4>
    <div className='px-12 pt-6 lg:px-28 center justify-center  text-center shadow-2xl border-black border-2 rounded-xl lg:mx-96'>
   <img src={check} className='mr-2  ml-20 lg:ml-36  mb-4 '/>
        <h2 className='font-semibold'>Booking Completed</h2>
        <p className='text-[#667085]'>Your Booking has been Completed For
        Airport Taxi.</p>
        <div className="flex justify-center mt-6 mb-8 ">
            <button className="bg-black text-[#FEB601] px-6
             p-2 text-xs rounded flex w-84 items-center justify-center mr-4">
              Done
             
            </button>
            <button className="bg-yellow-500 text-black p-2 text-xs rounded flex w-84 items-center justify-center">
              
              Book Next Ride
            </button>
          </div>
    </div>
   </div>
  )
}

// export default Submission