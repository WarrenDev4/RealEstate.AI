import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { LayoutProvider } from "../../context/LayoutContext";

// Register chart elements
Chart.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Trends = () => {
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [zipCode, setZipCode] = useState("");

  // List of states for filtering
  const statesList = [
    { code: "CA", name: "California" },
    { code: "NY", name: "New York" },
    { code: "TX", name: "Texas" },
    { code: "FL", name: "Florida" },
    { code: "PA", name: "Pennsylvania" },
    { code: "IL", name: "Illinois" },
    { code: "OH", name: "Ohio" },
    { code: "GA", name: "Georgia" },
    { code: "NC", name: "North Carolina" },
    { code: "MI", name: "Michigan" },
    // Add more states as needed
  ];

  // Sample price forecast data (for layout purposes)
  const forecastedPriceData = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Projected Price Appreciation (%)",
        data: [2, 4, 6, 8, 10, 12],
        borderColor: "#ff5733",
        backgroundColor: "rgba(255, 87, 51, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Sample top neighborhoods by investment score (for layout purposes)
  const topNeighborhoodsData = {
    labels: ["Neighborhood A", "Neighborhood B", "Neighborhood C", "Neighborhood D", "Neighborhood E"],
    datasets: [
      {
        label: "Investment Score",
        data: [90, 85, 80, 75, 70],
        backgroundColor: ["#007bff", "#6fb3fc", "#0d3d70", "#5a5a5a", "#f4a261"],
      },
    ],
  };

  // Sample inventory heatmap data (for layout purposes, can be visualized as a bar chart for now)
  const inventoryHeatmapData = {
    labels: ["CA", "TX", "FL", "NY", "PA", "IL"],
    datasets: [
      {
        label: "Listings Inventory",
        data: [200, 150, 250, 180, 220, 160],
        backgroundColor: "#007bff",
      },
    ],
  };

  // Sample sentiment analysis data
  const marketSentimentData = {
    labels: ["Market Sentiment"],
    datasets: [
      {
        label: "Sentiment Score",
        data: [75], // Example: 75% positive market sentiment
        backgroundColor: "#28a745",
      },
    ],
  };

  // Function to handle search (just logs for now)
  const handleSearch = () => {
    console.log("Searching with:", { selectedState, city, county, zipCode });
    // Replace with API call once the backend is set up
  };

  return (
    <LayoutProvider>
      <div className="trends">
        <h1 className="dashboard-title" style={{ fontFamily: "Inter, Poppins, Nunito, sans-serif", fontSize: "28px", color: "#171616" }}>
          Trends
        </h1>
        
        {/* Location Filter Section */}
        <div className="location-filters" style={{ marginBottom: "20px" }}>
          <h4>📍 Filter by Location</h4>
          <div className="filter-form" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select a state</option>
              {statesList.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="County" value={county} onChange={(e) => setCounty(e.target.value)} />
            <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Charts and Data Cards */}
        <div className="grid-container">
          <div className="trend-card">
            <h3>📈 Projected Price Appreciation</h3>
            <Line data={forecastedPriceData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="trend-card">
            <h3>🏘️ Top Neighborhoods by Investment Score</h3>
            <Bar data={topNeighborhoodsData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="trend-card">
            <h3>📊 Listings Inventory</h3>
            <Bar data={inventoryHeatmapData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="trend-card">
            <h3>📢 Market Sentiment</h3>
            <Bar data={marketSentimentData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default Trends;
