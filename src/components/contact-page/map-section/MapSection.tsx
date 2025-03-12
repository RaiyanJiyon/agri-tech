"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define the position (Amsterdam, Netherlands)
const position: [number, number] = [52.3702, 4.8952];

// Custom marker icon (ensure marker icon is in the public folder)
const customIcon = L.icon({
  iconUrl: "/map.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapSection = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      className="rounded-lg w-full h-96"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Our Farm Location - Amsterdam, Netherlands</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
