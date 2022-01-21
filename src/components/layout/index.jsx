import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import "./styles.css";

const Banner = styled.div`
  height: 0rem;
  transition: height 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ banner }) =>
    banner &&
    `
    height:2.2rem;
	`}

  div {
    color: #707070;
    text-align: center;
    background-color: #e1c48f;
    position: relative;
    line-height: 2.2rem;
    top: -2.2rem;
    opacity: 0%;
    transition: top 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
      opacity 400ms ease-in;

    ${({ banner }) =>
      banner &&
      `
      top: 0rem;
      opacity: 100%;
    `}
  }
`;

const Layout = ({ children }) => {
  const [banner, setBanner] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setBanner(true), 2000);
  }, []);
  return (
    <>
      <Banner banner={banner}>
        <div>🎉 COMPLIMENTARY LIVESTREAMING 🎉</div>
      </Banner>
      <Navbar />
      <div className="bg">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
