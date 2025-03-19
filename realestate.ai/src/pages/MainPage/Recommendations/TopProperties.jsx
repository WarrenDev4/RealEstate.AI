import React from "react";
import { LayoutProvider } from "../../../context/LayoutContext";

{/* Top Properties Page */}
const TopProperties = () => {
  return (
    <LayoutProvider>
      <div className="page-container">
        <h1 className="page-title">🏡 Top Properties</h1>
      </div>
    </LayoutProvider>
  );
};

export default TopProperties;
