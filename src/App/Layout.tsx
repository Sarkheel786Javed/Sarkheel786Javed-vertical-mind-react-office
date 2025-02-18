import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Layout.css";
interface WrapperProps {
  children: ReactNode;
}
const Layout: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div id="content_fo_child">
        {children ? <>{children}</> : <div></div>}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
