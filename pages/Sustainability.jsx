// src/pages/Sustainability.jsx
import React, { useState } from 'react';
import '../styles/Sustainability.css';
import CarbonCalculator from '../components/CarbonCalculator';
import EcoBadges from '../components/EcoBadges';

const Sustainability = () => {
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = (data) => {
    setCarbonData(data);
  };

  return (
    <div className="sustainability-page">
      <h2>Sustainability Tracker</h2>
      <CarbonCalculator onCalculate={handleCalculate} />
      <EcoBadges carbonData={carbonData} />
    </div>
  );
};

export default Sustainability;

