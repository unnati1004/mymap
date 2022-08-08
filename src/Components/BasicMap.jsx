import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./Osm_provider";
import L from "leaflet";
import {useLocation } from "react-router";

const BasicMap = () => {
  const { lat, lng,name } = useLocation().state;
  const coo = {
    lat: lat,
    lon: lng,
    name:name,
  };

  const zoom_level = 13;
  
  const icon = L.icon({ iconUrl: "https://img.icons8.com/ultraviolet/30/marker.png" });
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
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;
