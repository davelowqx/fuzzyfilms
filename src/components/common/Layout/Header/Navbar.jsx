import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common/Container";
import NavbarLinks from "./NavbarLinks";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-family: "Affectionately Yours";
  color: #e1c48f;
  font-size: 20pt;
  cursor: default;
  margin-left: 0.3rem;
`;

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Brand>f</Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
