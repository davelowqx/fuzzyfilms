import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import styled from "styled-components";

const Wrapper = styled.div`
  a {
    color: #212121 !important;
    background: none !important;
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
	`
      : `
	padding: 2rem;
	flex-direction: column;

	a {
	margin-bottom: 1rem;
	}

}`}
`;

const Links = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#portfolio">Portfolio</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  );
};

export default Links;
