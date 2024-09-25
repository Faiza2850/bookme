import React, { useState, useEffect } from 'react';
import {
  BackYellow
} from '../assets/index.js';
import { rides } from '../api/db.js';

const RideHistoryItem = ({ date, time, car, from, to, price, image }) => (
  <div className="bg-[#000000] h-auto md:h-64 max-w-6xl mx-auto text-[#FFFFFF] p-4 rounded-lg mb-4 md:mb-8">
    
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
      <div className="text-[#FFCA09]  font-semibold text-sm md:text-[28px] mt-2 mb-4 md:mt-4">{date}, {time}</div>
        <div className="font-bold md:-mt-+ md:mb-8 text-lg md:text-[32px]">{car}</div>
        <div className='text-sm md:text-[28px] mt-2 md:mb-4'>
          <span className='text-[#FFCA09]'>From: </span><span>{from}</span> 
          <span className='text-[#FFCA09]'> To: </span><span>{to}</span>
        </div>
        <div className="font-bold text-xl md:text-[36px] md:mt-6   mt-3 text-[#FFCA09]">£{price}</div>
      </div>
      <img src={image} alt={car} className="w-32 h-24 md:w-72 md:h-40 mt-4 md:mt-10 object-contain" />
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  if (currentPage > 3) pageNumbers.push(1);
  if (currentPage > 4) pageNumbers.push("...");

  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pageNumbers.push(i);
  }

  if (currentPage < totalPages - 2) pageNumbers.push("...");
  if (currentPage < totalPages - 1) pageNumbers.push(totalPages);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-[#FE9901] font-bold border-[#BEBEBE] border-2"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="w-8 h-8 flex items-center justify-center">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md flex items-center justify-center ${
              page === currentPage
                ? 'bg-[#FFE3BA] text-[#FE9901] border-[#FE9901] border-2'
                : 'bg-white text-black border-[#BEBEBE] border-2'
            }`}
          >
            {page}
          </button>
        )
      )}
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-[#FE9901] font-bold border-[#BEBEBE] border-2"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

const RideHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 4; 

  useEffect(() => {
    setTotalPages(Math.ceil(rides.length / itemsPerPage));
  }, [rides]);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return rides.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-3xl -mt-6 md:-mt-16 shadow-lg p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold ml-4 md:ml-10 mb-1 md:mb-4">Bookmee</h1>
      <h2 className="text-xl md:text-2xl ml-4 md:ml-10 mb-2 md:mb-4">Ride History</h2>
      {getCurrentPageItems().map((ride, index) => (
        <RideHistoryItem key={index} {...ride} />
      ))}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage}
      />
      <div className="flex justify-center">
        <button className="mt-4 bg-black text-[#FEB601] py-2 px-4 rounded-md font-bold flex items-center justify-center w-[90%] md:w-[30%]">
          Back
          <img src={BackYellow} alt="Back" className="w-4 h-4 mr-2 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default RideHistory;
