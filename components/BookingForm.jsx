// src/components/BookingForm.jsx
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" />
      </label>
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
