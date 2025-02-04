// src/pages/Booking.jsx
import React, { useState } from 'react';
import '../styles/Booking.css';
import BookingForm from '../components/BookingForm';
import ConfirmationModal from '../components/ConfirmationModal';

const Booking = () => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Dummy function to simulate booking submission
  const handleBookingSubmit = (details) => {
    // Here, you would normally send booking details to Firebase Firestore and trigger email confirmations.
    setBookingDetails(details);
    setBookingConfirmed(true);
  };

  return (
    <div className="booking-page">
      <h2>Book Your Experience</h2>
      {!bookingConfirmed ? (
        <BookingForm onSubmit={handleBookingSubmit} />
      ) : (
        <ConfirmationModal details={bookingDetails} />
      )}
    </div>
  );
};

export default Booking;

