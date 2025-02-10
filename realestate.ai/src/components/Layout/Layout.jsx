import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ backgroundColor: "rgb(178, 190, 193);", minHeight: "100vh" }}>
      <Navbar />
      <main>{children}</main> 
    </div>
  );
};

export default Layout;
