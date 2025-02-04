// src/components/ConfirmationModal.jsx
import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ details }) => {
  return (
    <div className="confirmation-modal">
      <h3>Booking Confirmed!</h3>
      <p>Name: {details.name}</p>
      <p>Date: {details.date}</p>
      <p>Guests: {details.guests}</p>
      <p>Your booking QR Code:</p>
      {/* In a real app, generate a QR code from details */}
      <div className="qr-placeholder">[QR Code]</div>
    </div>
  );
};

export default ConfirmationModal;
