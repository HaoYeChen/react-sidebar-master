import React from "react";

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,

} from "./styles";

const Navbar = ({ toggle }) => {
  

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
