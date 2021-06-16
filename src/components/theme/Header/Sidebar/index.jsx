import React, { useContext } from "react";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
