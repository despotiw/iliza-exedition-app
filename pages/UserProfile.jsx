// src/pages/UserProfile.jsx
import React, { useState } from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    language: 'English',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </label>
        <label>
          Language:
          <select name="language" value={profile.language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Kinyarwanda">Kinyarwanda</option>
            <option value="French">French</option>
          </select>
        </label>
        <button type="submit">Update Profile</button>
      </form>
      {/* Booking history could be added below */}
      <div className="booking-history">
        <h3>Booking History</h3>
        <p>No bookings yet.</p>
      </div>
    </div>
  );
};

export default UserProfile;

