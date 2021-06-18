import React from "react";
import Links from "./Links";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 0px;
  right: -12rem;
  width: 12rem;
  height: 100%;
  background-color: #fcfcfc;
  transition: right 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
			right: 0rem;

			@media (max-width: 960px) {
			}
	`}
`;

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <Wrapper active={sidebar} onClick={() => toggle(false)}>
      <Links toggle={toggle} />
    </Wrapper>
  );
};

export default Sidebar;
