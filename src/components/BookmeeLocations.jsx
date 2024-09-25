  import React, { useState } from 'react';

  import BluePin from '../assets/BluePin.svg';
  import RedArrow from '../assets/RedArrow.svg';
  import Plus from '../assets/Plus.svg';
  import Minus from '../assets/Minus.svg';
  import Line from '../assets/line.svg';

  const BookmeeLocations = () => {
    const [vias, setVias] = useState([]);
    const [showCustom, setShowCustom] = useState(true);

    const addVia = () => {
      if (vias.length < 10) {
        setVias([...vias, { id: Date.now(), address: '' }]);
      }
    };

    const removeVia = (id) => {
      setVias(vias.filter(via => via.id !== id));
    };

    const handleViaChange = (id, value) => {
      setVias(vias.map(via => via.id === id ? { ...via, address: value } : via));
    };

    const handleSubmit = () => {
      const formData = {
        start: document.getElementById('start').value,
        vias: vias.map(via => via.address),
        end: document.getElementById('end').value,
      };
      console.log('Form data:', formData);
    };

    return (
      <div className="bg-white rounded-3xl -mt-6 md:-mt-16  shadow-lg p-6 max-w-xl mx-auto">
      <div className='ml-8'>

        <h2 className="text-2xl font-bold mb-2 text-[#333333]">Bookmee</h2>
        <p className="text-[#666666] mb-4 fontmedium ">Enter Your Locations</p>
        
        <div className="space-y-4">
          <div className={` relative ${vias.length === 0 ? '-mb-4' : ''} `}>
            <label className={` text-[#FEB601] mb-3 font-semibold text-lg  block`}>Start</label>
            <input
              id="start"
              type="text"
              placeholder={`Pickup Address`}
              className="md:w-[90%] w-[85%] border text-[#666666] rounded-md  p-3 pr-10"
            />
            <img
              src={RedArrow}
              alt="Red Arrow"
              className="absolute right-4  top-1/2 transform -translate-y-1/4 w-7 h-7 mt-3  cursor-pointer"
            />
          </div>

          { vias.map((via, index) => (
            <div key={via.id} className="relative">
              <label className="text-[#FEB601] mb-1 block">Via</label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Via Address"
                  value={via.address}
                  onChange={(e) => handleViaChange(via.id, e.target.value)}
                  className="md:w-[90%] w-[85%] border text-[#666666] rounded-md p-3 pr-20"
                />
                {vias.length > 1 && (
                <div className="absolute right-4 flex flex-col items-center">
                  <img src={Line} alt="Line" className="w-0.5 h-4 " />
                  <img src={Plus} alt="Add" className="w-6 h-6 cursor-pointer" onClick={addVia} />
                  <img src={Line} alt="Line" className="w-0.5 h-[29px]" />
                  
                  <div className="flex items-center space-x-1">
                    <img src={Minus} alt="Remove" className="w-6 h-6 cursor-pointer" onClick={() => removeVia(via.id)} />
                    
                  </div>
                  <img src={Line} alt="Line" className="w-0.5 h-4" />
                  <img src={Plus} alt="Add" className="w-6 h-6 cursor-pointer" onClick={addVia} />
                  <img src={Line} alt="Line" className="w-0.5 h-7" />
                </div>
              )}

                {vias.length === 1 && (
            <div className="absolute right-4 flex flex-col items-center">
                  <img src={Line} alt="Line" className="w-0.5 h-6 " />
                  <img src={Plus} alt="Add" className="w-6 h-6 cursor-pointer" onClick={addVia} />
                  <img src={Line} alt="Line" className="w-0.5 h-7" />
                  
                  <div className="flex items-center space-x-1">
                    <img src={Minus} alt="Remove" className="w-6 h-6 cursor-pointer" onClick={() => removeVia(via.id)} />
                    
                  </div>
                  <img src={Line} alt="Line" className="w-0.5 h-6" />
                  <img src={Plus} alt="Add" className="w-6 h-6 cursor-pointer" onClick={addVia} />
                  <img src={Line} alt="Line" className="w-0.5 h-7" />
                </div>
          )}
              </div>
            </div>
          ))}

          {vias.length === 0 && (
  <div className="relative flex justify-end right-4">
    <div className="flex flex-col items-center -mt-2 z-10">
      <img src={Line} alt="Line" className="w-0.5 h-6" />
      <img 
        src={Plus} 
        alt="Add" 
        className="w-6 h-6 cursor-pointer" 
        onClick={() => {
          console.log("Plus button clicked");
          addVia();
        }} 
      />
      <img src={Line} alt="Line" className="w-0.5 h-6" />
    </div>
  </div>
)}


<div >
  <div className="relative">
    <label className={` ${vias.length === 0 ? '-mt-16' : ''}  text-[#FEB601] mb-3 font-semibold text-lg block`}>End</label>
    <input
      id="end"
      type="text"
      placeholder="Destination Address"
      className="md:w-[90%] w-[85%] border text-[#666666] rounded-md p-3 pr-10"
    />
    <img
      src={BluePin}
      alt="Blue Pin"
      className="absolute right-3 top-1/2 transform -translate-y-1/4 mt-3 w-8 h-8"
    />
  </div>
</div>

          
        </div>

        <div className="flex  mt-6 gap-4 md:gap-10">
          <button className="bg-[#000000] text-[#FFC107] font-bold px-6 h-10 md:h-12 py-2 w-52 rounded-md">Log In</button>
          <button
            className="bg-[#FFC107] text-[#333333] font-bold px-6 w-52  py-2 rounded-md"
            onClick={handleSubmit}
          >
            Get Quote
          </button>
        </div>
        </div>
      </div>
    );
  };

  export default BookmeeLocations;

