// src/components/EcoBadges.jsx
import React from 'react';
import './EcoBadges.css';

const EcoBadges = ({ carbonData }) => {
  // Dummy badges: if carbon offset > 50 then award "Eco-Warrior"
  const badge = carbonData && carbonData.carbon >= 50 ? "Eco-Warrior" : "Eco-Friendly Beginner";
  return (
    <div className="eco-badges">
      <h3>Your Badge: {badge}</h3>
      {carbonData && <p>Carbon footprint: {carbonData.carbon} kg CO2</p>}
    </div>
  );
};

export default EcoBadges;
