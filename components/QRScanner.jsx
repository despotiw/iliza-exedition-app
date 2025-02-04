// src/components/QRScanner.jsx
import React from 'react';
import './QRScanner.css';

const QRScanner = () => {
  // Dummy function to simulate QR scan
  const handleScan = () => {
    alert('QR code scanned. Fetch exhibit details from Firestore.');
  };

  return (
    <div className="qr-scanner">
      <button onClick={handleScan}>Scan QR Code</button>
    </div>
  );
};

export default QRScanner;
