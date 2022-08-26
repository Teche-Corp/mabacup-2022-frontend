import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, showNav, setShowNav, from ='' }) => {
  return (
    <div>
      <Navbar showNav={showNav} setShowNav={setShowNav} from={from}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
