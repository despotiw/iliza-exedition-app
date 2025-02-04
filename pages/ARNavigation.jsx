
// src/pages/ARNavigation.jsx
import React from 'react';
import '../styles/ARNavigation.css';
import ARViewer from '../components/ARViewer';
import QRScanner from '../components/QRScanner';

const ARNavigation = () => {
  return (
    <div className="ar-navigation-page">
      <h2>AR Navigation</h2>
      <ARViewer />
      <QRScanner />
    </div>
  );
};

export default ARNavigation;
