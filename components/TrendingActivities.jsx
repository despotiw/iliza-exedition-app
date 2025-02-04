// src/components/TrendingActivities.jsx
import React from 'react';
import './TrendingActivities.css';

const dummyActivities = [
  { id: 1, title: 'Gorilla Trekking in Volcanoes NP' },
  { id: 2, title: 'Cultural Tour in Kigali' },
  { id: 3, title: 'Lake Kivu Boat Ride' }
];

const TrendingActivities = () => {
  return (
    <div className="trending-activities">
      <h2>Trending Activities</h2>
      <div className="activities-list">
        {dummyActivities.map(activity => (
          <div key={activity.id} className="activity-card">
            <p>{activity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingActivities;

