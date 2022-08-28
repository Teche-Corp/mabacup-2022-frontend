import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, showNav, setShowNav, }) => {
  return (
    <div>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
