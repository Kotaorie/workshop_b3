// maps.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import SearchBar from './recherche';

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
{ lat: 44.837789, lng: -0.579180, name: 'Bordeaux' },
{ lat: 44.837789, lng: -0.580000, name: 'Jardin Public 1' },
{ lat: 44.830000, lng: -0.590000, name: 'Jardin Public 2' },
{ lat: 44.840000, lng: -0.570000, name: 'Jardin Public 3' },
{ lat: 44.845000, lng: -0.585000, name: 'Jardin Public 4' },
{ lat: 44.835000, lng: -0.575000, name: 'Jardin Public 5' },
];

const [selectedPlace, setSelectedPlace] = useState(null);
const [directions, setDirections] = useState(null);

const handlePlaceSelected = (place) => {
setSelectedPlace(place);
calculateDirections(place.geometry.location);
};

const calculateDirections = (destination) => {
const directionsService = new window.google.maps.DirectionsService();
const origin = new window.google.maps.LatLng(defaultCenter.lat, defaultCenter.lng);

directionsService.route(
    {
    origin: origin,
    destination: destination,
    travelMode: 'BICYCLING',
    },
    (result, status) => {
    if (status === 'OK') {
        setDirections(result);
    } else {
        console.error(`Impossible d'obtenir les directions: ${status}`);
    }
    }
);
};

return (
<LoadScript googleMapsApiKey="AIzaSyAJkGX1bC9SaWnFGLZx6DAAwZvcrePHLBg" libraries={['places']}>
    <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
    <SearchBar onPlaceSelected={handlePlaceSelected} />
    <Marker position={defaultCenter} title="Bordeaux" />
    {gardenLocations.map((location, index) => (
        <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.name} />
    ))}
    {directions && (
        <DirectionsRenderer directions={directions} />
    )}
    </GoogleMap>
</LoadScript>
);
};

export default MapContainer;
