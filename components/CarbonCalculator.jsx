// src/components/CarbonCalculator.jsx
import React, { useState } from 'react';
import './CarbonCalculator.css';

const CarbonCalculator = ({ onCalculate }) => {
  const [activity, setActivity] = useState('');
  const [value, setValue] = useState('');

  const calculateCarbon = (activity, value) => {
    // Dummy calculation: e.g., 4x4 safari = 50kg, so use a multiplier.
    const multiplier = activity === 'safari' ? 50 : 10;
    return value * multiplier;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carbon = calculateCarbon(activity, parseFloat(value));
    onCalculate({ activity, carbon });
  };

  return (
    <form className="carbon-calculator" onSubmit={handleSubmit}>
      <input type="text" placeholder="Activity (e.g., safari)" value={activity} onChange={(e) => setActivity(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={value} onChange={(e) => setValue(e.target.value)} required />
      <button type="submit">Calculate Carbon Footprint</button>
    </form>
  );
};

export default CarbonCalculator;
