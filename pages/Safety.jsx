// src/pages/Safety.jsx
import React from 'react';
import '../styles/Safety.css';
import EmergencyMap from '../components/EmergencyMap';
import SafetyTips from '../components/SafetyTips';

const Safety = () => {
  return (
    <div className="safety-page">
      <h2>Safety & Emergency</h2>
      <EmergencyMap />
      <SafetyTips />
    </div>
  );
};

export default Safety;

