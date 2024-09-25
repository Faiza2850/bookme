import React from 'react';
import BookmeeMap from '../components/BookmeeMap';
import Layout from "../layout/index";

const FleetSection = () => {
  const startLocation = [53.3537, -2.2750]; // Manchester Airport coordinates
  const endLocation = [51.4700, -0.4543];   // London Heathrow Airport coordinates

  const handleEditRoute = () => {
    // Navigate to route selection screen
  };

  return (
    <div>


      <Layout>
          <BookmeeMap
            startLocation={startLocation}
            endLocation={endLocation}
            onEditRoute={handleEditRoute}
          />
          </Layout>

    </div>
  );
};

export default FleetSection;

