import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { LayoutProvider } from "../../context/LayoutContext";

{/* Trends Page */}

Chart.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

{/* Sample data shown only for development and testing purposes. More integration will added with an API soon! */}

{/* Market Price Trends */}
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

{/* Property Demand */}
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

{/*Investment Growth*/}
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

const Trends = () => {
  return (
    <LayoutProvider>
      <div className="trends">
      <h1 className="dashboard-title" style={{ fontFamily: "Inter, Poppins, Nunito, sans-serif", fontSize: "28px", color: "#171616",}}>
       Trends
        </h1>
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