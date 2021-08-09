import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "../Seo";
import styled from "styled-components";
import "./styles.css";

const Banner = styled.div`
  padding: 0.5rem 0;
  color: #707070;
  background-color: #e1c48f;
  text-align: center;
  position: relative;
  top: -40px;
  transition: top 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ banner }) =>
    banner &&
    `
    top: 0px;
	`}
`;

const Layout = ({ children }) => {
  const [banner, setBanner] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setBanner(true), 2000);
  }, []);
  return (
    <>
      <Seo />
      <Banner banner={banner}>🎉 FREE LIVESTREAM PROVIDED 🎉</Banner>
      <Navbar />
      <div className="bg">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
