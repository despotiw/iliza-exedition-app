// src/components/HomestayCard.jsx
import React from 'react';
import './HomestayCard.css';

const HomestayCard = ({ homestay }) => {
  return (
    <div className="homestay-card">
      <img src="/assets/homestay.jpg" alt={homestay.name} />
      <h3>{homestay.name}</h3>
      <p>{homestay.price}</p>
      <button onClick={() => window.location.href = '/booking'}>Book Now</button>
    </div>
  );
};

export default HomestayCard;
