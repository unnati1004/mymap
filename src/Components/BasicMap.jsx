import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./Osm_provider";
import L from "leaflet";
import {useLocation } from "react-router";

const BasicMap = () => {
  const { lat, lng } = useLocation().state;
  const coo = {
    lat: lat,
    lon: lng,
  };

  const zoom_level = 13;
  
  const icon = L.icon({ iconUrl: "dist/images/marker-icon.png" });
  return (
    <div>
      <MapContainer
        center={coo}
        zoom={zoom_level}
        style={{ height: "100vh", width: "100wh" }}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={coo} icon={icon}>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;
