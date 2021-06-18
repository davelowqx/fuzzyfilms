import React, { useState } from "react";
import Hamburger from "./Header/Hamburger";
import Sidebar from "./Header/Sidebar";
import styled from "styled-components";
import Links from "./Header/Links";

const Overlay = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
    opacity: 0.5;
    display: block;
			z-index: 4;	
	`}
`;

const Wrapper = styled.div`
  padding: 1.2rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <>
      <div className="container">
        <Wrapper>
          <div className="brand">f</div>
          <Links desktop />
        </Wrapper>
      </div>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </>
  );
};
