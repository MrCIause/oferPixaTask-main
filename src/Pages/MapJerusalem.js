import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapJerusalem() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/jerusalem.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setAr(data);
      // תדאגו להציג על המפה את ה מרקרים לפי המיקומים של כל פריט ב
      // POS
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Map of Jerusalem</h1>
      <MapContainer
        center={[31.77796, 35.235698]}
        zoom={16}
        scrollWheelZoom={false}
      >
        {ar.map((item) => {
          return (
            <Marker key={item.name} position={item.pos}>
              <Popup>
                <div style={{ direction: "rtl", textAlign: "right" }}>
                  <h4>{item.name}</h4>
                  <div>{item.info}</div>
                  <a href={item.link} target="_blank">
                    פרטים נוספים
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
