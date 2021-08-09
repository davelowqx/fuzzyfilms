import React, { useState } from "react";
import Hamburger from "./Navbar/Hamburger";
import Topbar from "./Navbar/Topbar";
import styled from "styled-components";
import Links from "./Navbar/Links";

const Wrapper = styled.div`
  padding: 1.2rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  const [topbar, setTopbar] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <Wrapper>
            <div className="brand">f</div>
            <Links desktop />
            <Hamburger topbar={topbar} setTopbar={setTopbar} />
          </Wrapper>
        </div>
      </div>
      <Topbar topbar={topbar} setTopbar={setTopbar} />
    </>
  );
};

export default Navbar;
