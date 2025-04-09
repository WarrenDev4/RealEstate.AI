import React from "react";
import { LayoutProvider } from "../../../context/LayoutContext";

{/* Top Properties Page */}
const TopNeighborhoods = () => {
  return (
    <LayoutProvider>
      <div className="page-container">
        <h1 className="page-title">🏡 Top Neighborhoods</h1>
      </div>
    </LayoutProvider>
  );
};

export default TopNeighborhoods;
