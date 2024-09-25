import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  Car,
  saloonCarPreview,
  exective_carRemovebgPreview,
  People_CarrierRemovebgReview,
  Executive_peopleCarrierRemovebgpreview,
  Eight_Seaterremovebgpreview,
  Estate_CarRemovebgPreview,
} from '../../assets/index'

function AddNewFleet() {
  // For Vehicle Selection
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [farePerMile, setFarePerMile] = useState("");

  const handleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const handleFareChange = (e) => {
    setFarePerMile(e.target.value);
  };

  const handleNewFleet = () => {
    // Check if any field is empty
    if (selectedVehicle.trim() === "" || farePerMile.trim() === "") {
      alert("Both fields are required!");
      return; // Exit the function if any field is empty
    }

    // Here you can call API to add new fleet
    console.log("Selected Vehicle:", selectedVehicle);
    console.log("Fare Per Mile:", farePerMile);

    // Clear the fields if needed
    setSelectedVehicle("");
    setFarePerMile("");
  };
//   showing Vehicle 
  const renderVehicleSVG = () => {
    switch (selectedVehicle) {
      case "SaloonCar":
        return (
          <img
            src={saloonCarPreview}
            alt="Saloon Car"
            className="w-auto h-auto"
          />
        );
      case "ExecutiveCar":
        return (
          <img
            src={exective_carRemovebgPreview}
            alt="Executive Car"
            className="w-auto h-auto"
          />
        );
      case "PeopleCarrier":
        return (
          <img
            src={People_CarrierRemovebgReview}
            alt="People Carrier"
            className="w-auto h-auto"
          />
        );
      case "ExecutivePeopleCarrier":
        return (
          <img
            src={Executive_peopleCarrierRemovebgpreview}
            alt="ExecutivePeopleCarrier"
            className="w-auto h-auto"
          />
        );
      case "EstateCar":
        return (
          <img
            src={Estate_CarRemovebgPreview}
            alt="Estate Car"
            className="w-auto h-auto"
          />
        );
      case "8SeatersMinibus":
        return (
          <img
            src={Eight_Seaterremovebgpreview}
            alt="8 Seaters Minibus"
            className="w-auto h-auto"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 md:p-6 max-w-7xl mx-auto mt-10">
      <div className="mx-4 md:mx-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Bookmee</h2>
        <p className="text-gray-600 mb-4 mt-3 font-normal text-lg md:text-xl">
          Add New Fleet
        </p>
        <h2 className="font-[lato] text-[#FEB601] mb-4 mt-3 font-normal text-lg md:text-xl">
          Car Category
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
  <div className="w-full lg:w-[60%]">
    <div className="flex justify-start bg-white">
      <select
        className="pl-[2%] w-full xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[100%] h-[54.99px] rounded-xl border bg-white text-gray-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        style={{ borderRadius: "6px 6px 6px" }}
        onChange={handleChange}
      >
        <option value={selectedVehicle} disabled selected>
          Select Category
        </option>
        <option value="SaloonCar">Saloon Car</option>
        <option value="ExecutiveCar">Executive Car</option>
        <option value="EstateCar">Estate Car</option>
        <option value="PeopleCarrier">People Carrier</option>
        <option value="ExecutivePeopleCarrier">Executive People Carrier</option>
        <option value="8SeatersMinibus">8 Seaters Minibus</option>
      </select>
    </div>
    <div className="w-full">
      <h2 className="font-[lato] text-[#FEB601] mb-2 mt-3 font-normal text-lg md:text-xl">
        Fare Per Mile
      </h2>
      <div className="flex w-full h-[54.99px] justify-start">
        <input
          type="text"
          value={farePerMile}
          placeholder="50"
          className="pl-[2%] w-full xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[100%] h-[54.99px] rounded-tl-lg border"
          style={{ borderRadius: "8px 8px 8px 8px" }}
          onChange={handleFareChange}
        />
      </div>
    </div>
  </div>
  {/* selected vehicle's */}
<div className="ml-8 mt-4 lg:mt-0  lg:w-[20rem] lg:h-[12rem]">{renderVehicleSVG()}</div>
</div>



        <button
          onClick={handleNewFleet}
          className="bg-[#FFCA09] text-black font-bold my-10 w-full h-16 md:h-20 px-4 py-2 text-2xl md:text-3xl rounded-lg flex items-center justify-center"
        >
          Add New Fleet
          <img
            src={Car}
            alt="Back Icon"
            className="ml-4 w-8 h-8 md:w-12 md:h-12"
          />
        </button>
      </div>
    </div>
  );
}

export default AddNewFleet;