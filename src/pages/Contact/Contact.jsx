import React from "react";
import { LocationMarker } from "../../Components/LocationMarker";
import { Map } from "../../Components/Map";
import L from 'leaflet'
import { LeafletGeocoder } from "../CheckOut/LeafletGeocoder";

export const Contact = () => {
  const areas = [
    { area: [30.0646, 31.4882], restaurantName: "October" },
    { area: [29.9611, 30.9296], restaurantName: "Rehab" },
    { area: [30.0382, 30.9794], restaurantName: "Sheikh Zayed" },
    { area: [30.0467, 31.2347], restaurantName: "Downtown" },
  ];

  const position = [30.0467, 31.2347];

  return (
    <div className="p-7 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Map position={position}>
       <LocationMarker areas={areas}/> 
       <LeafletGeocoder/>
      </Map>
   
      <div>
        {areas.map(({ restaurantName }, index) => (
          <div key={index}>
            <h1 className="font-black text-2xl p-4 main-font">
              {restaurantName}
            </h1>
            <p className="p-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              repellendus corrupti aut inventore unde facere praesentium vero
              temporibus saepe autem!
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
/*
const DefaultIcon = L.icon({
  iconUrl: "/chicken.webp",
  iconSize: [40, 40],
});
L.Marker.prototype.options.icon = DefaultIcon;
*/