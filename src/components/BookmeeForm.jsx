import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown } from 'lucide-react';
import BackYellow from '../assets/BackYellow.svg';

const CustomDropdown = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative">
      <div
        className="bg-white border border-[#666666] text-[#666666] rounded-md p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || placeholder}
        <ChevronDown size={20} />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border text-[#666666] border-[#666666] rounded-md mt-1 max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PhoneNumberInput = ({ onPhoneChange }) => {
  const [selectedCode, setSelectedCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countryCodes = ['+1', '+44', '+91', '+61', '+81', '+86', '+49'];

  const handleSelectCode = (code) => {
    setSelectedCode(code);
    setIsDropdownOpen(false);
    onPhoneChange(code + phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    onPhoneChange(selectedCode + e.target.value);
  };

  return (
    <div>
      <label className="text-[#FEB601] block mb-2">Mobile Number *</label>
      <div className="relative flex">
        <div
          className="border  text-[#666666] rounded-l-md p-3 cursor-pointer flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedCode || 'Code'}
          <ChevronDown size={16} className="ml-2" />
        </div>
        <input
          type="tel"
          placeholder="12345679"
          className="border  text-[#666666] rounded-r-md p-3 flex-grow"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {isDropdownOpen && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-12 w-20 max-h-40 overflow-auto">
            {countryCodes.map((code, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCode(code)}
              >
                {code}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const BookmeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState('');
  const [suitcases, setSuitcases] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [flightFrom, setFlightFrom] = useState('');
  const [meetGreet, setMeetGreet] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [pet, setPet] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      passengers,
      suitcases,
      flightNumber,
      flightFrom,
      meetGreet,
      flightDate: selectedDate,
      pet,
    };

    // Convert form data to JSON and trigger a download
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "booking_data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-[#333333]">Bookmee</h2>
      <h3 className="text-lg mb-6 text-[#666666]">Enter Passenger Details</h3>
      
      <form onSubmit={handleContinue}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-[#FEB601] block mb-2">First Name *</label>
            <input
              type="text"
              placeholder="John"
              className="border  text-[#666666] rounded-md p-3 w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[#FEB601] block mb-2">Last Name *</label>
            <input
              type="text"
              placeholder="Doe"
              className="border  text-[#666666] rounded-md p-3 w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <PhoneNumberInput onPhoneChange={setPhone} />

          <div>
            <label className="text-[#FEB601] block mb-2">E-mail *</label>
            <input
              type="email"
              placeholder="Email@yahoo.com"
              className="border  text-[#666666] rounded-md p-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[#FEB601] block mb-2">Passengers</label>
            <CustomDropdown
              options={['1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons']}
              placeholder="1 Person"
              onChange={setPassengers}
            />
          </div>
          <div>
            <label className="text-[#FEB601] block mb-2">Number of Suitcases</label>
            <CustomDropdown
              options={['1 Suitcase', '2 Suitcases', '3 Suitcases', '4 Suitcases', '5 Suitcases']}
              placeholder="1 Suitcase"
              onChange={setSuitcases}
            />
          </div>

          <div>
            <label className="text-[#FEB601] block mb-2">Flight Number</label>
            <input
              type="text"
              placeholder="DEX-001100"
              className="border  text-[#666666] rounded-md p-3 w-full"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[#FEB601] block mb-2">Flight Arriving From</label>
            <input
              type="text"
              placeholder="Wah Cantt"
              className="border  text-[#666666] rounded-md p-3 w-full"
              value={flightFrom}
              onChange={(e) => setFlightFrom(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[#FEB601] block mb-2">Meet & Greet on Arrival</label>
            <CustomDropdown
              options={['Select', 'Option 1', 'Option 2', 'Option 3']}
              placeholder="Select"
              onChange={setMeetGreet}
            />
          </div>
          <div>
            <label className="text-[#FEB601] block mb-2">Flight Arrival Date & Time</label>
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa" 
                className="border  text-[#666666] rounded-md p-3 w-[165%] md:w-[195%] sm:w-full"
                placeholderText="Select a date and time"
              />
            </div>
          </div>

          <div>
            <label className="text-[#FEB601] block mb-2">Do you have a pet with you?</label>
            <CustomDropdown
              options={['No', 'Yes']}
              placeholder="No"
              onChange={setPet}
            />
          </div>
        </div>

        <div className="flex mt-8 justify-center space-x-8 md:space-x-16">
          <button className="text-[#FFCA09] bg-black font-bold px-4 py-2 w-[300px] rounded-lg flex items-center justify-center">
            Back
            <img src={BackYellow} alt="Back Icon" className="ml-2 h-3 w-3" />
          </button>

          <button className="bg-[#FFC107] text-[#333333] font-bold px-6 py-2 w-[300px] rounded-md" type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookmeeForm;
