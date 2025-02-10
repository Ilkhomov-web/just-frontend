import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "./Maps.css";

export default function Maps({ setUserMap }) {
  return (
    <MapContainer
      center={{ lat: 40.138264, lng: 67.821985 }}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright"></a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker setUserMap={setUserMap} />
    </MapContainer>
  );
}

function LocationMarker({ setUserMap }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      setUserMap(e.latlng);  // Ensure this is the correct function call
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Siz Turgan manzil To'g'rimi?</Popup>
    </Marker>
  );
}
