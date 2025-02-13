import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { LayoutProvider } from "../../context/LayoutContext";

Chart.register(ArcElement, Tooltip, Legend);

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
  return (
    <LayoutProvider>
      <div className="home-page">
        <h1
          className="dashboard-title"
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            fontSize: "28px",
            color: "#2e2c2c",
          }}
        >
          Dashboard
        </h1>
        <section>
          <div className="chart-container">
            {chartData.map((chart, index) => (
              <div className="chart-card" key={index}>
                <h3>{chart.title}</h3>
                <div className="chart-wrapper">
                  <Doughnut
                    data={chart.data}
                    options={{ maintainAspectRatio: false }}
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
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
        <section className="recommendations">
          <h2 className="dashboard-title"
            style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: "18px",
              fontWeight: "17px",
              color: "#2e2c2c",
            }}>AI-Powered Recommendations</h2>
          <div className="recommendation-list">
            <div className="recommendation-item">🏡 Top properties to watch</div>
            <div className="recommendation-item">
              📍 Rising property values
            </div>
            <div className="recommendation-item">💰 Investment Opportunities</div>
          </div>
        </section>
      </div>
    </LayoutProvider>
  );
};

export default Home;
