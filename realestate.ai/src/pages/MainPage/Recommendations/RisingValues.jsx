import React from "react";
import { LayoutProvider } from "../../../context/LayoutContext";

{/* Rising Values Page */}
const RisingValues = () => {
  return (
    <LayoutProvider>
      <div className="page-container">
        <h1 className="page-title">📍 Rising Property Values</h1>
      </div>
    </LayoutProvider>
  );
};

export default RisingValues;
