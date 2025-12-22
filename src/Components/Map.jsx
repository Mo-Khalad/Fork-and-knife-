import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map = ({ children , position }) => {  
 
  return (
     <MapContainer
     className="mt-8 h-2"
     center={position}
     zoom={13}
     scrollWheelZoom={false}
   >
     <TileLayer 
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {children}
   </MapContainer>
  )
} 

