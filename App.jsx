// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import ARNavigation from './pages/ARNavigation';
import Booking from './pages/Booking';
import AIAssistant from './pages/AIAssistant';
import Sustainability from './pages/Sustainability';
import CommunityCulture from './pages/CommunityCulture';
import Events from './pages/Events';
import Safety from './pages/Safety';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/ar-navigation" element={<ARNavigation />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/community" element={<CommunityCulture />} />
        <Route path="/events" element={<Events />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

