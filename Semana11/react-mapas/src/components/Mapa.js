import React, { useState, useEffect } from "react";

import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import { URL_BACKEND } from "../enviroments/env";

const Mapa = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    const getLugares = async () => {
      const response = await fetch(`${URL_BACKEND}/lugares`);
      const json = await response.json();
      setLugares(json);
    };
    getLugares();
  }, []);

  const posLima = [-12.08762, -77.08103];
  const rutaLima = [
    [-12.08762, -77.08103],
    [-12.1, -77.09],
    [-12.152, -77.1],
  ];

  return (
    <>
      <Map center={posLima} zoom={13}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/jorgegarba/ckeptlvtr4bz419o0j1aisp4j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline
          color={"purple"}
          positions={rutaLima}
          onclick={(e) => {
            console.log(e);
            console.log("Alguien está haciendo click");
          }}
        />
        {lugares.map((lugar) => {
          return (
            <Marker position={[lugar.lat, lugar.long]} key={lugar.id}>
              <Popup>
                <p className="text-danger">
                  <strong>{lugar.lugar}</strong>
                </p>
                <hr />
                <p>{lugar.direccion}</p>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export default Mapa;
