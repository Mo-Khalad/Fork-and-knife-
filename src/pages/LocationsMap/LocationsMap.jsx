import React from "react";
import { LocationMarker } from "../../Components/LocationMarker";
import { Map } from "../../Components/Map";
import { useTranslation } from "react-i18next";
import '../../assets/images/chef1.webp'
export const LocationsMap = () => {
  const { t } = useTranslation()
  const areas = [
    { area: [30.0646, 31.4882], restaurantName: "October" },
    { area: [29.9611, 30.9296], restaurantName: "Rehab" },
    { area: [30.0382, 30.9794], restaurantName: "Sheikh Zayed" },
    { area: [30.0467, 31.2347], restaurantName: "Downtown" },
  ];
  const position = [30.0467, 31.2347];
  
  return (
    <div className="p-7 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-15">
      <div>
        {areas.map(({ restaurantName }, index) => (
          <div key={index}>
            <h1 className="font-black text-2xl p-4 main-font">
              {t(restaurantName)}
            </h1>
            <p className="p-2 ms-5">{t('Street')}</p>
          </div>
        ))}
      </div>
        <Map position={position} zoom={10}>
         <LocationMarker areas={areas}/> 
       </Map>
    </div>
  );
};
