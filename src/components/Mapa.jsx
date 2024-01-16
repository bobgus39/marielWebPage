import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  // Coordenadas del centro del mapa
  const centroMapa = [38.625951106773876, -0.5766300334862065];

  return (
    <MapContainer
      center={centroMapa}
      zoom={20}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Agrega un proveedor de mapa, por ejemplo, OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Agrega un marcador con una ventana emergente */}
      <Marker position={centroMapa}>
        <Popup>Ubicación del marcador.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
