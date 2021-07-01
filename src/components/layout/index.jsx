import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "../Seo";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
