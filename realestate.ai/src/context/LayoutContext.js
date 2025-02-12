import React, { createContext, useContext } from "react";
import Navbar from "../../src/components/Navbar/Navbar";

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <div className="layout" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <Navbar />
        <main>{children}</main>
      </div>
    </LayoutContext.Provider>
  );
};
