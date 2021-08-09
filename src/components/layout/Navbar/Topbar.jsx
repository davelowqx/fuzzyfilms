import React from "react";
import Links from "./Links";

import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 0;
  height: 0;
  width: 100%;
  background-color: #fcfcfc;
  transition: height 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
    height: 8.5rem;
	`}
`;

const Topbar = ({ topbar, setTopbar }) => {
  return (
    <Wrapper active={topbar} onClick={() => setTopbar(false)}>
      <Links topbar={topbar} />
    </Wrapper>
  );
};

export default Topbar;
