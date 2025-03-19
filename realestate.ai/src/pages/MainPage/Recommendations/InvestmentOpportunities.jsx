import React from "react";
import { LayoutProvider } from "../../../context/LayoutContext";

{/* Investment Oppurtunities Page */}
const InvestmentOpportunities = () => {
  return (
    <LayoutProvider>
      <div className="page-container">
        <h1 className="page-title">💰 Investment Opportunities</h1>
      </div>
    </LayoutProvider>
  );
};

export default InvestmentOpportunities;
