// src/pages/Explore.jsx
import React, { useState } from 'react';
import '../styles/Explore.css';
import SearchFilters from '../components/SearchFilters';
import POICard from '../components/POICard';
import MapView from '../components/MapView';

const Explore = () => {
  const [viewMode, setViewMode] = useState('grid');
  const dummyPOIs = [
    { id: 1, name: 'Hotel Kigali', rating: 4.5 },
    { id: 2, name: 'Kigali Museum', rating: 4.2 },
    { id: 3, name: 'Rwanda Art Gallery', rating: 4.7 },
  ];

  return (
    <div className="explore-page">
      <SearchFilters />
      <div className="view-toggle">
        <button onClick={() => setViewMode('grid')}>Grid View</button>
        <button onClick={() => setViewMode('list')}>List View</button>
      </div>
      <div className={`pois-container ${viewMode}`}>
        {dummyPOIs.map(poi => (
          <POICard key={poi.id} poi={poi} />
        ))}
      </div>
      <MapView />
    </div>
  );
};

export default Explore;

