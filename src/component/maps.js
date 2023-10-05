// maps.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 44.837789,
    lng: -0.579180,
  };

  const gardenLocations = [
    { lat: 44.837789, lng: -0.580000, name: 'Jardin Public 1' },
    { lat: 44.830000, lng: -0.590000, name: 'Jardin Public 2' },
    { lat: 44.840000, lng: -0.570000, name: 'Jardin Public 3' },
    { lat: 44.845000, lng: -0.585000, name: 'Jardin Public 4' },
    { lat: 44.835000, lng: -0.575000, name: 'Jardin Public 5' },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyAJkGX1bC9SaWnFGLZx6DAAwZvcrePHLBg" libraries={['places']}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        {gardenLocations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
