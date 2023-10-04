import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

function SearchBar({ onPlaceSelected }) {
  const handlePlaceSelected = (place) => {
    onPlaceSelected(place);
  };

  return (
    <Autocomplete
      onLoad={(autocomplete) => (this.autocomplete = autocomplete)}
      onPlaceChanged={() => handlePlaceSelected(this.autocomplete.getPlace())}
    >
      <input
        type="text"
        placeholder="Rechercher un lieu..."
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </Autocomplete>
  );
}

export default SearchBar;
