import React from 'react'
import bucket from '../images/bucket.svg';
import logout from '../images/logout.svg';
import quotes from '../images/quotes.svg';
import viewbook from '../images/viewbook.svg';



import { FaArrowRight, FaCalendarPlus, FaCreditCard, FaPencilAlt } from 'react-icons/fa';

export const Profile = () => {
  return (
   
    <div className='p-10  xl:p-20 xl:pr-96 md:p-8 sm:max-w-3xl max-w-5xl bg-white mx-auto  rounded-xl'>
        
        <h1 className='font-bold text-2xl '>Bookme</h1>
        <h5 className=''>Profile</h5>
        <h4 className='pt-4 font-semibold '>From here you can manage Bookings you've made or
        Create new bookings or Change your account Information</h4>
        <p className='pt-5 w- text-[#667085] pb-5'>Access your Rides history to see all your previous rides
        and other ride details.</p>
       
        <button className="bg-[#FFCA09] text-black p-2 rounded  w-60 font-semibold flex  items-center justify-center">
        Rides History <img src={bucket} className='mr-2' />
        </button>
        <h4 className='pt-5 font-semibold'>Manage Your Bookings </h4>
        <p className='text-[#667085] pb-5'>You can make amendments to your bookings up until the 24 hours before your Journey is due to start. You can also downlload copies of receipts for previous bookings here.</p>
        <div className='flex gap-6 '>
        <button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>Make a Booking <FaCalendarPlus className="mr-2" /></button>
        <button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>View Bookings <img src={viewbook} className='mr-2' /></button>
        </div>

        <h4 className='pt-5 font-semibold'>Recover Your Quotes</h4>
        <p className='text-[#667085] pb-5'>If we have previously quoted for a Journey you can select the quote here and 
proceed with booking. You can also call us with the reference number from
your quote and continue your booking over the phone. </p>
<button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>View Quotes <img src={quotes} className='mr-2' /></button>
<h4 className='pt-5 font-semibold'>Manage Payment Methods</h4>
<p className='text-[#667085] pb-5'>If you have previously saved cards while booking online you may review and
remove them here.</p>
<button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>Manage Cards  <FaCreditCard className="mr-2 " /> </button>
<h4 className='pt-5 font-semibold'>Update Your Details</h4>
        <p className='text-[#667085] pb-5'>Keeping your details Up to date helps us to contact you in the event of 
        a problem with your booking. You may Also Change your Password here.</p>
        <div className='flex gap-6'>
        <button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>Log Out <img src={logout} className='mr-2' /> </button>
        <button className='bg-[#FFCA09] text-black p-2 rounded py-3 font-semibold flex w-60 items-center justify-center '>Edit Profile <FaPencilAlt className="mr-2 " /> </button>
        </div>
    </div>
  )
}

// export default Profile