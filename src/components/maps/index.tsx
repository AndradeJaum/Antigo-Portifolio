import React, { useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const position = {
  lat: -26.294746,
  lng: -48.846846
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY as string
  })

  return isLoaded ? (

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={15}
    >
      <Marker position={position} options={{
        label: {
          text: "Hometown",
          className: "map-marker"
        }
      }} />

    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)