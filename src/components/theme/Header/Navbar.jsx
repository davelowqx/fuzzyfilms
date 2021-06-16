import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import NavbarLinks from "./NavbarLinks";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-family: "Affectionately Yours";
  font-size: 20pt;
`;

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        f
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
