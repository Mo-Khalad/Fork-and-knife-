import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import gps from '../assets/images/gps.webp'
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
let defaultIcon = L.icon({
  iconUrl: gps ,
  iconSize: [ 40 , 40],
});

L.Marker.prototype.options.icon = defaultIcon;
