// src/pages/CommunityCulture.jsx
import React from 'react';
import '../styles/CommunityCulture.css';
import HomestayCard from '../components/HomestayCard';
import WorkshopCalendar from '../components/WorkshopCalendar';

const CommunityCulture = () => {
  const dummyHomestays = [
    { id: 1, name: "Iby'Iwacu Cultural Village", price: "$50/night" },
    { id: 2, name: "Local Village Homestay", price: "$30/night" },
  ];

  return (
    <div className="community-culture-page">
      <h2>Community & Culture</h2>
      <div className="homestays">
        {dummyHomestays.map(h => (
          <HomestayCard key={h.id} homestay={h} />
        ))}
      </div>
      <WorkshopCalendar />
    </div>
  );
};

export default CommunityCulture;

