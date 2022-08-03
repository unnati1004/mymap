import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./Osm_provider";
import L from "leaflet";
import { useParams } from "react-router";
import axios from "axios";
const BasicMap = () => {
  let { id } = useParams();
  const [loc,setLoc] = useState({"lat": 28.7041, "lng": 77.1025});
  useEffect(() => {
    axios
    .get(`https://openstreetcity.herokuapp.com/city/${id}`)
    .then(({ data }) => {
      console.log(data.location)
      setLoc(()=>data.location)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  console.log("loc",loc)
  const zoom_level = 20;
  let position = [loc.lat,loc.lng];
  console.log(position);
  const icon = L.icon({ iconUrl: "dist/images/marker-icon.png" });
  console.log("id",id);
  
  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoom_level}
        style={{ height: "100vh", width: "100wh" }}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={icon}>
          <Popup>
            {loc.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;
