import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Layout.css";
import { useLocation } from "react-router";
interface WrapperProps {
  children: ReactNode;
}
const Layout: React.FC<WrapperProps> = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <div id="content_fo_child">
        {children ? <>{children}</> : <div></div>}
      </div>
      {location.pathname !== "/question" && <Footer />}
    </div>
  );
};

export default Layout;
