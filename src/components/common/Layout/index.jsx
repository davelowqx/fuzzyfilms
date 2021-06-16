import React from "react";
import { Header, Footer } from "components/theme";
import { Global } from "./stylesssss";
import "./fonts.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Global />
      {children}
      <Footer />
    </>
  );
};
