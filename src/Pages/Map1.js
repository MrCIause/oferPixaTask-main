import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map1() {
  return (
    <div className="container">
      <h1>Map test 1:</h1>
      <MapContainer
        center={[32.106484363954564, 35.18324178296739]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <Marker key="11" position={[32.074798880091954, 34.79185069223615]}>
          <Popup>
            <div>Tel aviv azrieli</div>
            <a href="https://www.azrielimalls.co.il/%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C%D7%99_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91">
              Website
            </a>
          </Popup>
        </Marker>

        <Marker
          onClick
          key="12"
          position={[32.106484363954564, 35.18324178296739]}
        >
          <Popup>
            <div>Ariel</div>
          </Popup>
        </Marker>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
