// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // if needed for local styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to Rwanda Expeditions</h1>
      <div className="cta-buttons">
        <button onClick={() => window.location.href='/explore'}>Explore</button>
        <button onClick={() => window.location.href='/ar-navigation'}>AR Navigation</button>
        <button onClick={() => window.location.href='/booking'}>Bookings</button>
        <button onClick={() => window.location.href='/ai-assistant'}>AI Assistant</button>
      </div>
    </section>
  );
};

export default HeroSection;
