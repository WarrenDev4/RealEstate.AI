import React from 'react';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
      <h1 className="dashboard-title">Dashboard</h1>

        <section className="hero">
          <h1>Welcome back, [User's Name]!</h1>
          <p>The real estate market is up by 3.2% this month.</p>
          <input type="text" placeholder="Search properties, neighborhoods..." className="search-bar" />
        </section>

        <section className="key-metrics">
          <div className="metric-card">
            <h3>📊 Avg. Market Price</h3>
            <p>$450,000</p>
          </div>
          <div className="metric-card">
            <h3>🏠 Recently Analyzed</h3>
            <p>3 new properties</p>
          </div>
          <div className="metric-card">
            <h3>🏡 Trending Neighborhoods</h3>
            <p>Downtown, Suburb X</p>
          </div>
          <div className="metric-card">
            <h3>📉 Investment Score</h3>
            <p>85% Strong Buy</p>
          </div>
        </section>

        <section className="recommendations">
          <h2>AI-Powered Recommendations</h2>
          <div className="recommendation-list">
            <div className="recommendation-item">🏡 Top properties to watch</div>
            <div className="recommendation-item">📍 Rising property values in [City]</div>
            <div className="recommendation-item">💰 Investment Opportunities</div>
          </div>
        </section>

        <section className="market-trends">
          <h2>Recent Market Trends</h2>
          <div className="chart-placeholder">[Insert Chart Component Here]</div>
        </section>

        <section className="latest-news">
          <h2>Latest Real Estate News</h2>
          <div className="news-item">🏢 "Housing market sees 5% growth this year" - Jan 2025</div>
          <div className="news-item">🏡 "Best cities for real estate investment in 2025" - Feb 2025</div>
        </section>
        
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button>Analyze a Property</button>
            <button>Compare Neighborhoods</button>
            <button>Investment Forecasting</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
