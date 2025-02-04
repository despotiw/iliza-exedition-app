// src/components/AnalyticsView.jsx
import React from 'react';
import './AnalyticsView.css';

const AnalyticsView = ({ data }) => {
  return (
    <div className="analytics-view">
      <h3>User Analytics</h3>
      <p>Total Users: {data.users}</p>
      <p>Total Bookings: {data.bookings}</p>
    </div>
  );
};

export default AnalyticsView;
