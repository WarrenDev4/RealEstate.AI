import React from 'react';
import { LayoutProvider } from "../../context/LayoutContext";

import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const sampleLineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales ($)",
      data: [12000, 15000, 13000, 17000, 19000, 22000],
      fill: false,
      borderColor: "#0077cc",
      tension: 0.4,
    },
  ],
};

const sampleBarData = {
  labels: ["NY", "CA", "TX", "FL", "IL"],
  datasets: [
    {
      label: "Avg Property Price ($)",
      data: [350000, 480000, 300000, 310000, 270000],
      backgroundColor: "#47b881",
    },
  ],
};

const samplePieData = {
  labels: ["High Demand", "Moderate", "Low Demand"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"],
    },
  ],
};

const Forecasting = () => {
  return (
    <LayoutProvider>
      <div className="forecasting-page">
        <h2 className="page-title">Market Forecasting</h2>

        {/* Filter Section */}
        <div className="filter-section">
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
          <button className="search-btn">Search</button>
        </div>
        <div className="forecast-dashboard">
          <div className="dashboard-row">
            <div className="chart-box">
              <h3>Sales Forecast</h3>
              <Line data={sampleLineData} />
            </div>
            <div className="chart-box">
              <h3>Price Trends</h3>
              <Bar data={sampleBarData} />
            </div>
          </div>
          <div className="dashboard-row">
            <div className="chart-box">
              <h3>Growth Rate</h3>
              <Line data={sampleLineData} />
            </div>
            <div className="chart-box">
              <h3>Market Demand</h3>
              <Pie data={samplePieData} />
            </div>
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default Forecasting;
