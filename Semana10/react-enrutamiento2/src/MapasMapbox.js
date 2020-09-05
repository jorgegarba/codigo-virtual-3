import React, { useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapasMapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  return (
    <div>
      <ReactMapboxGl {...viewport}></ReactMapboxGl>
    </div>
  );
};

export default MapasMapbox;
