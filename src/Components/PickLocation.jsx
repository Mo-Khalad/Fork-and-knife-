import React, { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

export const PickLocation = ({ setPickLocation, pickLocation }) => {
  const [position, setPosition] = useState();

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setPickLocation(e.latlng);
    },
  });

  const state =
    position === undefined &&
    pickLocation.lat !== undefined &&
    pickLocation.lng !== undefined;

  return state ? (
    <Marker position={[pickLocation?.lat, pickLocation?.lng]} />
  ) : (
    <Marker position={position} />
  );
};
