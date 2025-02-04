
// src/pages/Events.jsx
import React from 'react';
import '../styles/Events.css';
import EventCalendar from '../components/EventCalendar';
import TicketPurchase from '../components/TicketPurchase';

const Events = () => {
  return (
    <div className="events-page">
      <h2>Events & Festivals</h2>
      <EventCalendar />
      <TicketPurchase />
    </div>
  );
};

export default Events;
