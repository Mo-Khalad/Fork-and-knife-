import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map = ({ children, position, zoom, className }) => {
  return (
    <MapContainer
      className={`mt-8 h-2 ${className}`}
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};
