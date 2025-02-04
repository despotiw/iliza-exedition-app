// src/components/WeatherWidget.jsx
import React, { useEffect, useState } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace with your actual OpenWeatherMap API key and location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=YOUR_API_KEY&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error(err));
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="weather-widget">
      <h3>Current Weather in Kigali</h3>
      <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;

