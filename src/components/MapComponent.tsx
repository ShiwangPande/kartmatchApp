'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Vendor } from '@/types/vendor';
import { Button } from '@/components/ui/button';

// RecenterMap component with dynamic zoom based on radius
const RecenterMap = ({ userLocation, radius }: { userLocation: [number, number], radius: number }) => {
  const map = useMap();
  
  useEffect(() => {
    if (userLocation) {
      // Calculate zoom level based on radius
      let zoomLevel = 14;
      
      if (radius <= 2) zoomLevel = 15;
      else if (radius <= 5) zoomLevel = 14;
      else if (radius <= 10) zoomLevel = 13;
      else if (radius <= 20) zoomLevel = 12;
      else if (radius <= 50) zoomLevel = 11;
      else if (radius <= 100) zoomLevel = 10;
      else if (radius <= 200) zoomLevel = 9;
      else if (radius <= 500) zoomLevel = 8;
      else zoomLevel = 7;
      
      map.setView([userLocation[1], userLocation[0]], zoomLevel);
    }
  }, [userLocation, radius, map]);
  
  return null;
};

// Create vendor icon function
const createVendorIcon = (selected: boolean) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="${selected ? 'text-[#D32F2F]' : 'text-[#FF5722]'}" style="font-size: ${selected ? '32px' : '24px'}">
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="${selected ? '#D32F2F' : '#FF5722'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
               <circle cx="12" cy="10" r="3"></circle>
             </svg>
           </div>`,
    iconSize: [selected ? 32 : 24, selected ? 32 : 24],
    iconAnchor: [selected ? 16 : 12, selected ? 32 : 24],
  });
};

interface MapComponentProps {
  userLocation: [number, number];
  radius: number;
  vendorsInRadius: Vendor[];
  selectedVendor: Vendor | null;
  onVendorSelect: (vendor: Vendor) => void;
}

// This is the actual map component
const ActualMap = ({ 
  userLocation, 
  radius, 
  vendorsInRadius, 
  selectedVendor, 
  onVendorSelect 
}: MapComponentProps) => {
  // Set a fixed style for the map container
  const mapContainerStyle = { 
    height: '100%', 
    width: '100%' 
  };
  
  return (
    <div className="relative h-full w-full">
      <MapContainer 
        center={[userLocation[1], userLocation[0]]}
        zoom={14} 
        style={mapContainerStyle}
        zoomControl={false}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <RecenterMap userLocation={userLocation} radius={radius} />
        
        {/* User location marker */}
        <Marker 
          position={[userLocation[1], userLocation[0]]}
          icon={L.divIcon({
            className: 'user-location-marker',
            html: `<div class="w-4 h-4 bg-blue-500 rounded-full relative">
                     <div class="w-10 h-10 bg-blue-500/20 rounded-full absolute -top-3 -left-3 animate-pulse"></div>
                   </div>`,
            iconSize: [10, 10],
            iconAnchor: [5, 5],
          })}
        >
          <Popup>Your location</Popup>
        </Marker>
        
        {/* Radius circle */}
        <Circle 
          center={[userLocation[1], userLocation[0]]}
          radius={radius * 1000} // Convert km to meters
          pathOptions={{ fillColor: 'blue', fillOpacity: 0.1, color: 'blue', weight: 1 }}
        />
        
        {/* Vendor markers */}
        {vendorsInRadius.map(vendor => (
          <Marker 
            key={vendor.id}
            position={[vendor.location.coordinates[1], vendor.location.coordinates[0]]}
            icon={createVendorIcon(selectedVendor?.id === vendor.id)}
            eventHandlers={{
              click: () => onVendorSelect(vendor)
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold">{vendor.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {vendor.foodItems.slice(0, 3).join(", ")}
                  {vendor.foodItems.length > 3 && "…"}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// This is a wrapper component that controls when the map is rendered
const MapComponent = (props: MapComponentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Set up the Leaflet default icon
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    
    setIsMounted(true);
    
    return () => {
      setIsMounted(false);
    };
  }, []);
  
  if (!isMounted) {
    return <div className="h-full flex items-center justify-center">Loading map...</div>;
  }
  
  return <ActualMap {...props} />;
};

export default MapComponent;
