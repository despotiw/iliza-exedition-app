// src/components/SearchFilters.jsx
import React from 'react';
import './SearchFilters.css';

const SearchFilters = () => {
  return (
    <div className="search-filters">
      <input type="text" placeholder="Search attractions..." />
      <select>
        <option value="all">All Categories</option>
        <option value="hotel">Hotels</option>
        <option value="museum">Museums</option>
        <option value="restaurant">Restaurants</option>
      </select>
      <select>
        <option value="price">Price Range</option>
        {/* Add more options */}
      </select>
      <select>
        <option value="distance">Distance</option>
        {/* Add more options */}
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchFilters;
