import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Mapas.css";
const palitos = [-16.400693, -71.537453];
const arequipa = [-16.409046, -71.537453];

const icono = new Icon({
  iconUrl: "/pin.svg",
  iconSize: [25, 25],
});

const Mapas = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "#ddd" }}>
      asd
      <Map center={palitos} zoom={13}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/jorgegarba/ckep8c2g6198q19ldgreh5lu1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={arequipa}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
        <Marker position={palitos} icon={icono}>
          <Popup>
            A pasdopup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default Mapas;
