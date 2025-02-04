// src/components/TicketPurchase.jsx
import React from 'react';
import './TicketPurchase.css';

const TicketPurchase = () => {
  const handlePurchase = () => {
    alert('Ticket purchased! QR code will be sent to your email.');
  };

  return (
    <div className="ticket-purchase">
      <h3>Buy Tickets</h3>
      <button onClick={handlePurchase}>Purchase Ticket</button>
    </div>
  );
};

export default TicketPurchase;
