import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  PencilIco, SaloonCar, ExecutiveCar, EstateCar, PeopleCarrier,
  PencilIcoyellow, ExecutivePeopleCarrier, SeaterMiniBus, Back
} from '../assets/index.js';

// Fix Leaflet's default icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const BookmeeMap = ({ startLocation, endLocation, onEditRoute }) => {
  const [mapCenter, setMapCenter] = useState([54.5, -4]); // Default to UK center
  const [mapZoom, setMapZoom] = useState(5);

  useEffect(() => {
    if (startLocation && endLocation) {
      const bounds = L.latLngBounds(startLocation, endLocation);
      setMapCenter(bounds.getCenter());
      setMapZoom(6); // Adjust zoom to fit route
    }
  }, [startLocation, endLocation]);

  const renderCarOption = (name, image, description, oneWayPrice, returnPrice) => (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row items-start mt-12 mb-10">
        <img src={image} alt={name} className="w-full md:w-1/3 ml-0 md:ml-10 mr-4" />
        <div className="mt-4 md:mt-0">
          <h4 className="text-2xl md:text-4xl font-bold mb-2 text-[#FEB601]">{name}</h4>
          <p className="text-xl md:text-2xl text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4 mt-8 space-y-4 md:justify-center md:space-y-0 md:space-x-32">
        <button className="bg-black text-[#FFAE00] font-bold w-full md:w-1/3  px-4 py-2 md:py-4 text-2xl md:text-3xl rounded-lg">
          One Way £{oneWayPrice}
        </button>
        <button className="bg-[#FEB601] text-black font-bold w-full md:w-1/3 px-4 py-2 md:py-4 text-2xl md:text-3xl rounded-lg">
          Return £{returnPrice}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 md:p-6 max-w-7xl mx-auto mt-10">
      <div className="mx-4 md:mx-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Bookmee</h2>
        <p className="text-gray-600 mb-4 mt-3 font-normal text-lg md:text-xl">Choose Your Fleet</p>
        
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div className="bg-[#FFCA09] text-black px-4 py-2 text-lg md:text-xl rounded-md flex justify-between items-center mb-4 md:mb-0 w-full md:w-[50%]">
            <span><strong>Start:</strong> {startLocation}</span>   
            <button onClick={onEditRoute} className="hover:text-gray-700">
              <img src={PencilIco} alt="Edit" className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-black text-[#FFCA09] px-4 py-2 text-lg md:text-xl rounded-md flex justify-between items-center w-full md:w-[50%]">
            <span><strong>End:</strong> {endLocation}</span>
            <button onClick={onEditRoute} className="hover:text-gray-700">
              <img src={PencilIcoyellow} alt="Edit" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-4 border-[#FFAE00] rounded-lg overflow-hidden mb-6">
          <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '300px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {startLocation && <Marker position={startLocation} />}
            {endLocation && <Marker position={endLocation} />}
            {startLocation && endLocation && (
              <Polyline positions={[startLocation, endLocation]} color="#FFAE00" />
            )}
          </MapContainer>
        </div>

        <h3 className="text-2xl md:text-3xl mt-6 md:mt-10 font-bold text-[#FFAE00] mb-4">Journey Fares</h3>
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "Saloon Car",
          SaloonCar,
          "Ford Mondeo, VW Passat or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "Executive Car",
          ExecutiveCar,
          "E Class Mercedes or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "Estate Car",
          EstateCar,
          "Volvo Estate, VW Passat or similar. These can accommodate up to 4 passengers plus 4 standard suitcases (23kg max), or 5 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "People Carrier",
          PeopleCarrier,
          "VW Sharan, Ford Galaxy or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "Executive People Carrier",
          ExecutivePeopleCarrier,
          "VW Sharan, Ford Galaxy or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        {renderCarOption(
          "8 Seater Minibus",
          SeaterMiniBus,
          "VW Sharan, Ford Galaxy or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
          310,
          590
        )}
        <hr className="my-6 text-[#bcbfc8]" />

        <button className="bg-[#FFCA09] text-black font-bold my-10 w-full h-16 md:h-20 px-4 py-2 text-2xl md:text-3xl rounded-lg flex items-center justify-center">
          Edit Route
          <img src={Back} alt="Back Icon" className="ml-4 w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>
    </div>
  );
};

export default BookmeeMap;
