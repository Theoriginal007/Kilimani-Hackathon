import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Define the MapView component
const MapView = ({ location, markersData }) => {
  // State to manage the currently selected marker
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Handle marker click to show the info window
  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  // Close the info window
  const onClose = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={location}
        zoom={14}
      >
        {/* Main marker */}
        <Marker
          position={location}
          title="Main Location"
          onClick={() => onMarkerClick({
            position: location,
            name: 'Main Location',
            title: 'Main Location'
          })}
        />
        
        {/* Additional markers from markersData */}
        {markersData && markersData.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            onClick={() => onMarkerClick(marker)}
          />
        ))}

        {/* Info window to display marker details */}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={onClose}
          >
            <div>
              <h4>{selectedMarker.name}</h4>
              <p>{selectedMarker.title}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
