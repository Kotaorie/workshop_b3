import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../css/mapStyles.css';

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 44.837789,
    lng: -0.579180,
  };

  const [activeMarker, setActiveMarker] = useState(null);
  const [activeRow, setActiveRow] = useState(null);

  const gardenLocations = [
    { lat: 44.849729, lng: -0.57993, name: 'Jardin Botanique du Jardin Public', contact: 'Tel : 0556521877, Jardin Botanique du Jardin Public' },
    { lat: 44.864663, lng: -0.549492, name: 'LartPlace Victor Raulin', contact: 'Association les Vivres de lart' },
    { lat: 44.871709, lng: -0.569116, name: 'Ferme pédagogique Jardin partagé', contact: 'Ferme pédagogique de Bordeaux Lac, Email : ca.lelac@centres-animation.asso.fr' },
    { lat: 44.875098, lng: -0.544152, name: 'Bacalan Jardins familiaux Parc de Bacalan', contact: 'Association Bocal Local, Email : jardins-familiaux@lebocallocal.fr' },
  ];

  const handleMarkerClick = (index) => {
    setActiveMarker(index);
    setActiveRow(null); // Réinitialise la ligne active lors du clic sur un marqueur
  };

  const handleRowClick = (index) => {
    setActiveMarker(null); // Réinitialise le marqueur actif lors du clic sur une ligne
    setActiveRow(index);
  };

  return (
    <div id="map-container">
      <LoadScript googleMapsApiKey="AIzaSyAJkGX1bC9SaWnFGLZx6DAAwZvcrePHLBg" libraries={['places']}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
          {gardenLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
              onClick={() => handleMarkerClick(index)}
              animation={activeMarker === index ? 1 : 0}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <h2>Liste des Jardins :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom du Jardin</th>
            <th>Contact</th> {}
          </tr>
        </thead>
        <tbody>
          {gardenLocations.map((location, index) => (
            <tr key={index} className={activeRow === index ? 'active' : ''} onClick={() => handleRowClick(index)}>
              <td>{location.name}</td>
              <td>{activeRow === index ? location.contact : ''}</td> {/* Affichez le contact si la ligne est active */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MapContainer;
