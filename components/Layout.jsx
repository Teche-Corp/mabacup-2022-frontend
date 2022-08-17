import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, showNav, setShowNav }) => {
  console.log(children);
  return (
    <div>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
