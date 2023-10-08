import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import geoCenter from "geolib/es/getCenter";
import { ResultType } from "@/lib/type";
import "mapbox-gl/dist/mapbox-gl.css";
type Props = {
  searchResult: any;
};
const Map = ({ searchResult }: Props) => {
  const coordinates: any = searchResult.map((result: ResultType) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center: any = geoCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: 300,
    height: 100,
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 3.4,
  });

  return (
    <ReactMapGl
      mapStyle={"mapbox://styles/shady12/cle03i7hg006s01ryijy8k30f"}
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      {...viewport}
    >
      {searchResult.map((result: any) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p>📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
