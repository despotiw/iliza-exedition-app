// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import TrendingActivities from '../components/TrendingActivities';
import WeatherWidget from '../components/WeatherWidget';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <TrendingActivities />
      <WeatherWidget />
    </div>
  );
};

export default Home;

