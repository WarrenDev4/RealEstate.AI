import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { LayoutProvider } from "../../context/LayoutContext";

Chart.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Trends = () => {
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [zipCode, setZipCode] = useState("");

  const statesList = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
  ];

  // Sample chart data
  const priceTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Avg. Market Price ($)",
        data: [380000, 385000, 390000, 395000, 400000, 410000, 420000],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const propertyDemandData = {
    labels: ["Residential", "Commercial", "Industrial", "Mixed-Use"],
    datasets: [
      {
        label: "Demand Score",
        data: [85, 70, 50, 65],
        backgroundColor: ["#007bff", "#6fb3fc", "#0d3d70", "#5a5a5a"],
      },
    ],
  };

  const investmentGrowthData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Investment Growth (%)",
        data: [5, 10, 15, 25, 30, 40],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const handleSearch = () => {
    console.log("Searching with:", { selectedState, city, county, zipCode });
  };

  return (
    <LayoutProvider>
      <div className="trends">
        <h1
          className="dashboard-title"
          style={{
            fontFamily: "Inter, Poppins, Nunito, sans-serif",
            fontSize: "28px",
            color: "#171616",
          }}
        >
          Trends
        </h1>

        {/* Location Filter Section */}
        <div className="location-filters">
          <select
            className="filter-dropdown"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {statesList.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
          <input
            className="filter-input" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <input className="filter-input" type="text" placeholder="County" value={county} onChange={(e) => setCounty(e.target.value)} />
          <input className="filter-input" type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          <button id="search-btn"  className="search-btn" onClick={handleSearch}>Search</button>
        </div>

        {/* Charts and Data Cards */}
        <div className="grid-container">
          <div className="trend-card">
            <h3>📈 Average Property Prices</h3>
            <Line data={priceTrendsData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="trend-card">
            <h3>🏡 Property Demand</h3>
            <Bar data={propertyDemandData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="trend-card">
            <h3>💰 Investment Growth</h3>
            <Line data={investmentGrowthData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default Trends;
