import React, { useState } from 'react'
import Map from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Mapbox({searchResult}) {

    const coordinates = searchResult.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
      }));
    
      const center = getCenter(coordinates);
    
      const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
        bearing: 0,
        pitch: 0,
      });

  return (
    <Map
    
     mapStyle="mapbox://styles/nariman18/clcktc3eq002215mug45lu9i0"
     mapboxAccessToken={process.env.access_token}
     initialViewState={viewport}  
     style={{ width: "100%", height: "100%" }}  
     onViewPortChange = {(nextViewPort) => setViewport(nextViewPort)}
    >
        
    </Map>
  )
}

export default Mapbox;