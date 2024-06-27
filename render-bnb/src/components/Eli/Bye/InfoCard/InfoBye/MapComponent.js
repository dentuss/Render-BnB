import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyles = {
  height: "50vh",
  width: "60%",
  marginLeft: "20%"
};

const defaultCenter = {
  lat: 46.486990,
  lng: 30.728000,
};

const markerPosition = {
    lat: 46.486000,
    lng: 30.730000,
};


const customIcon = {
  url: "https://maps.google.com/mapfiles/kml/shapes/flag.png", 
  scaledSize: { width: 50, height: 50 }, 
};

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = () => {
    setSelectedPlace(markerPosition);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9Z4dVtKqbPoTdOxV4Wb5YNcLz_Q2ZN0U">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >

<gmp-advanced-marker
    position="37.4220656,-122.0840897"
    title="Mountain View, CA"
  ></gmp-advanced-marker>
  <gmp-advanced-marker
    position="47.648994,-122.3503845"
    title="Seattle, WA"
  ></gmp-advanced-marker>
        <Marker
          position={markerPosition}
          icon={customIcon}
          onClick={handleMarkerClick}
          label={{
            text: 'Пункт назначения',
            color: 'red',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        />
        {selectedPlace && (
          <InfoWindow
            position={markerPosition}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h4>Пункт назначения: Садовая 3</h4>
              <p>Одесса, Украина</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
