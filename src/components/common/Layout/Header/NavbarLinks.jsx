import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import styled from "styled-components";

const Wrapper = styled.div`
  a {
    color: #212121 !important;
  }

  ${({ desktop }) =>
    desktop
      ? `
	align-items: center;
	display: flex;

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
	padding: 2rem;
	display: flex;
	flex-direction: column;

	a {
	margin-bottom: 1rem;

	&:last-child {
		margin-bottom: unset;
	}
	&:hover {
		background: none;
	}
}`}
`;

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#portfolio">Portfolio</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  );
};

export default NavbarLinks;
