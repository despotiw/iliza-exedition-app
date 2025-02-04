// src/components/POICard.jsx
import React from 'react';
import './POICard.css';

const POICard = ({ poi }) => {
  return (
    <div className="poi-card">
      <img src="/assets/dummy-poi.jpg" alt={poi.name} />
      <h3>{poi.name}</h3>
      <p>Rating: {poi.rating}</p>
      <button onClick={() => window.location.href = '/booking'}>Book Now</button>
    </div>
  );
};

export default POICard;
