import React, { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder";
export const LeafletGeocoder = ({ setPickLocation }) => {
  const map = useMap();
  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        setPickLocation(e.geocode.center);
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
    return () => {
      map.removeControl(geocoder);
    };
  }, [map, setPickLocation]);
  return null;
};
