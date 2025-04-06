import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { LayoutProvider } from "../../context/LayoutContext";
import { useNavigate }  from "react-router-dom";

{/* Chart.js implementation */}
Chart.register(ArcElement, Tooltip, Legend);

{/* Sample Chart Data */}
const chartData = [
  {
    title: "Market Distribution", 
    data: {
      labels: ["Residential", "Commercial", "Industrial"],
      datasets: [
        {
          data: [60, 30, 10],
          backgroundColor: ["#007bff", "#6fb3fc", "#0d3d70"],
        },
      ],
    },
  },
  {
    title: "Property Sales",
    data: {
      labels: ["Sold", "Pending", "Active"],
      datasets: [
        {
          data: [50, 25, 25],
          backgroundColor: ["#007bff", "#6fb3fc", "#0d3d70"],
        },
      ],
    },
  },
  {
    title: "Investment Types",
    data: {
      labels: ["Rental", "Flipping", "Long-Term"],
      datasets: [
        {
          data: [40, 35, 25],
          backgroundColor: ["#007bff", "#6fb3fc", "#0d3d70"],
        },
      ],
    },
  },
];

const Home = () => {
  
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleNavigation = (path) => {
    setFade(true);
    setTimeout(() => navigate(path), 500); 
  };
  
  return (
    <LayoutProvider>
      <div className="home-page">
        <h1 className="dashboard-title" style={{ fontFamily: "Inter, Poppins, Nunito, sans-serif", fontSize: "28px", color: "#171616",}}>
          Dashboard
        </h1>
        <div className="location-filters">
          <select className="filter-dropdown" defaultValue="">
            <option value="" disabled>Select a state</option>
            {[
              "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
              "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
              "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
              "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
              "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
              "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
              "Washington", "West Virginia", "Wisconsin", "Wyoming"
            ].map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <input className="filter-input" type="text" placeholder="City" />
          <input className="filter-input" type="text" placeholder="County" />
          <input className="filter-input" type="text" placeholder="ZIP Code" />
          <button id="search-btn" class="search-btn">Search</button>
        </div>
        <section>
          <div className="chart-container">
            {chartData.map((chart, index) => (
              <div className="chart-card" key={index}>
                <h3>{chart.title}</h3>
                <div className="chart-wrapper">
                  <Doughnut data={chart.data} options={{ maintainAspectRatio: false }} width={80} height={80} />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Sample Data for the Metric Cards */}
        <section className="key-metrics">
          <div className="metric-card">
            <h3>📊 Avg. Market Price</h3>
            <p>$390,000</p>
          </div>
          <div className="metric-card">
            <h3>🏠 Recently Analyzed</h3>
            <p>7 new properties</p>
          </div>
          <div className="metric-card">
            <h3>🏡 Trending Neighborhoods</h3>
            <p>Neighborhoood A</p>
          </div>
          <div className="metric-card">
            <h3>📉 Investment Score</h3>
            <p>72% Strong Buy</p>
          </div>
        </section>
        <section className={`recommendations ${fade ? "fade-out" : ""}`}>
          <h2 className="dashboard-title"
            style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: "18px",
              fontWeight: "17px",
              color: "#2e2c2c",
            }}>AI-Powered Recommendations</h2>
          <div className="recommendation-list">
            <div className="recommendation-item" onClick={() => handleNavigation("/top-properties")}>🏡 Top properties to watch</div>
            <div className="recommendation-item" onClick={() => handleNavigation("/rising-values")}>📍 Rising property values </div>
            <div className="recommendation-item" onClick={() => handleNavigation("/investment-opportunities")}>💰 Investment Opportunities</div>
          </div>
        </section>
      </div>
    </LayoutProvider>
  );
};

export default Home;
