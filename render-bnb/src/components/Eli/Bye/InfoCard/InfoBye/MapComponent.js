import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyles = {
  height: "50vh",
  width: "60%",
  marginLeft: "20%"
};

// Координаты для Садовой 3
const defaultCenter = {
  lat: 46.486990,
  lng: 30.728000,
};

const markerPosition = {
  lat: 46.486940,
  lng: 30.728000,
};

const MapComponent = () => 
{
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = () => 
  {
    setSelectedPlace(markerPosition);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker
          position={markerPosition}
          onClick={handleMarkerClick}
          label={{
            text: '!',
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
              <h4>Компьютерная Академия Шаг</h4>
              <p>Садовая 3, Одесса, Украина</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
