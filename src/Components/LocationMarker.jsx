import React from "react";
import { Marker, Popup } from "react-leaflet";

export const LocationMarker = ({ areas }) => {
  return (
    <>
      {areas.map(({ area, restaurantName }, index) => {
        return (
          <Marker position={area} key={index}>
            <Popup>
              Welcome to Fork & Knife Restaurant, <p />
              {restaurantName}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};
