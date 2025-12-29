import React from "react";
import { Marker, Popup } from "react-leaflet";
import L  from 'leaflet'
import googleMapIcon from "../assets/images/google-maps.png"
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
iconUrl:googleMapIcon, 
iconSize:[32 , 32] ,
})

L.Marker.prototype.options.icon = defaultIcon