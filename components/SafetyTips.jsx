// src/components/SafetyTips.jsx
import React from 'react';
import './SafetyTips.css';

const SafetyTips = () => {
  const tips = [
    "Avoid walking alone at night",
    "Keep emergency numbers handy",
    "Check local health alerts",
  ];

  return (
    <div className="safety-tips">
      <h3>Safety Guidelines</h3>
      <ul>
        {tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
