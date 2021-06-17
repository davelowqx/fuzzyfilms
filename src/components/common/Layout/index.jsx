import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Global } from "./stylesssss";
import { Seo } from "../Seo";
import "./fonts.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <Global />
      {children}
      <Footer />
    </>
  );
};
