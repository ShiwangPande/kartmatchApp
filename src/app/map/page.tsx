import React from 'react';
import { Navbar } from '@/components/Navbar';
import { MapView } from '@/components/MapView';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-white to-[#F5F5F5]">
      <div className="flex-1 overflow-y-auto pt-6 px-4 pb-20 lg:pb-6">
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-4 text-[#333333]">
          Vendor <span className="text-[#FF5722]">Map</span>
        </h1>

        <div className="w-full max-w-md lg:max-w-4xl mx-auto h-[80vh]">
          <MapView />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Map;
