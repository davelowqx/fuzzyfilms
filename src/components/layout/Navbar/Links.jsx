import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  a {
    color: #212121;
    background: none;
    text-decoration: none;
    &:active,
    &:hover {
      text-decoration: underline dotted #212121 0.07em;
    }
  }
  display: flex;

  ${({ desktop }) =>
    desktop
      ? `
	align-items: center;

	@media (max-width: 960px) {
		display: none;
	}

	a {
    margin-right: 1rem;

    &:last-child {
      margin-right: unset;
    }
  }
	`
      : `
  padding: 1rem;
  flex-direction: column;
  background-color: #f5f5f5;

  a {
  margin-bottom: 1rem;
  }
  `}
`;

const Links = ({ desktop, topbar }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#portfolio">Portfolio</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  );
};

export default Links;
