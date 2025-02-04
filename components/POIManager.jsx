// src/components/POIManager.jsx
import React, { useState } from 'react';
import './POIManager.css';

const POIManager = () => {
  const [pois, setPois] = useState([
    { id: 1, name: 'Hotel Kigali' },
    { id: 2, name: 'Kigali Museum' },
  ]);

  const addPOI = () => {
    const newPOI = { id: pois.length + 1, name: `New POI ${pois.length + 1}` };
    setPois([...pois, newPOI]);
  };

  return (
    <div className="poi-manager">
      <h3>Manage POIs</h3>
      <ul>
        {pois.map(poi => (
          <li key={poi.id}>{poi.name}</li>
        ))}
      </ul>
      <button onClick={addPOI}>Add POI</button>
    </div>
  );
};

export default POIManager;
