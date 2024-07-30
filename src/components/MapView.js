import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ data }) => {
  const center = [0, 0]; // Default center, adjust as needed

  return (
    <MapContainer center={center} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item, index) => (
        <Marker key={index} position={[item.lat, item.lng]}>
          <Popup>
            {item.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
