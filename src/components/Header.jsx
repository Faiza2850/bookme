import React, { useState } from 'react'
import logo from '../images/logo.png';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false)
  return (
    <div className='bg-black  flex w-full items-center text-white py-6  md:px-20 '>
      <img src={logo} alt='bookme' className=' h-10 w-36 hover:scale-105 ml-2 md:mr-96 transition-all'/>
      <header className='flex  text-white '>
      <div className='flex mr-44 sm:mr-36 md:mr-60 max-w-full'>
  <ul className='hidden xl:flex hover:scale-105 transition-all text-base'>
    <li className='p-3 hover:text-[#FEB601] transition-all cursor-pointer'>Home</li>
    <li className='p-3 hover:text-[#FEB601] transition-all cursor-pointer'>Q&A</li>
    <li className='p-3 hover:text-[#FEB601] transition-all cursor-pointer'>T&C</li>
    <li className='p-3 hover:text-[#FEB601] transition-all cursor-pointer'>Contact Us</li>
  </ul>
</div>

        <div className=' relative  hidden md:flex md:justify-center -mr-72 sm:ml-4 md:ml-10 items-center gap-3  '>
          <button className='left-3 bg-[#FEB601] hover:bg-white hover:text-[#FEB601] text-white rounded-full px-4
          py-2'>Live Chat</button>
          <button className=' left-3 text-[#FEB601] hover:bg-[#FEB601] hover:text-white bg-white rounded-full px-4
          py-2 mr-'> Log In</button>
        </div>
        <i className='bx bx-menu lg:hidden justify-center block text-5xl cursor-pointer '
          onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <div className={`absolute xl:hidden top-24 -ml-10 w-32  border-r-[#FEB601] border-l-[#FEB601] border-b-[#FEB601] border-t-black border-4 bg-black flex flex-col items center  font-semibold text-lg transform-transition ${isMenuOpen ? 'opacity-100' : 'opacity-0 '}`} style={{transition:'transform 0.3s ease, opacity 0.3s ease'}}>
              <li className='list-none w-full bg-black text-center p-4 hover:text-[#FEB601] transition-all cursor-pointer '>Home</li>
              <li className='list-none w-full  bg-black text-center p-4 hover:text-[#FEB601] transition-all cursor-pointer '>Q&A</li>
              <li className='list-none w-full  bg-black text-center p-4 hover:text-[#FEB601] transition-all cursor-pointer '>T&C</li>
              <li className='list-none w-full  bg-black text-center p-4 hover:text-[#FEB601] transition-all cursor-pointer '>Contact Us</li>
            </div>
        </i>
      </header>

    </div>
  )
}

// export default Header