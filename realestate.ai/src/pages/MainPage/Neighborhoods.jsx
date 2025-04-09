import React, { useState } from 'react';
import { LayoutProvider } from "../../context/LayoutContext";

const Neighborhoods = () => {
  const [selectedState, setSelectedState] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [zip, setZip] = useState('');

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const handleSearch = () => {
    console.log({ selectedState, city, county, zip });
  };

  return (
    <LayoutProvider>
      <div className="neighborhoods-page">
        <h1 className="page-title">Explore Neighborhoods</h1>

        <div className="filters">
          <select
            className="filter-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <input
            className="filter-input"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            className="filter-input"
            type="text"
            placeholder="County"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />

          <input
            className="filter-input"
            type="text"
            placeholder="ZIP Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />

          <button id="search-btn" className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="neighborhood-listings">
          {[1, 2, 3].map((_, i) => (
            <div className="neighborhood-card" key={i}>
              <div className="neighborhood-info">
                <h3>Lincoln Heights Neighborhood</h3>
                <p>Median Home Price: $620,000</p>
                <p>Population: 14,000 • Crime Rate: Low</p>
                <p>Los Angeles, CA 90031</p>
              </div>
            </div>
          ))}
        </div>

        <div className="map-placeholder">
          <h2>Map View</h2>
          <div className="map-box">
            <p>[Map Component Placeholder]</p>
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default Neighborhoods;
