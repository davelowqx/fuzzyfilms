import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        fuzzyfilms
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
