// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';
import POIManager from '../components/POIManager';
import AnalyticsView from '../components/AnalyticsView';

const AdminDashboard = () => {
  // Dummy state for analytics; in a real app, fetch from Firestore
  const [analyticsData, setAnalyticsData] = useState({ users: 100, bookings: 20 });

  useEffect(() => {
    // Fetch analytics data from Firestore or an API here.
    setAnalyticsData({ users: 150, bookings: 35 });
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <POIManager />
      <AnalyticsView data={analyticsData} />
    </div>
  );
};

export default AdminDashboard;

