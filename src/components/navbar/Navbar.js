import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from './NavbarStyles';
import LogoImg from '../../assets/logoBlank.png';

function Navbar(location) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'> Home</NavbarLink>
            <NavbarLink to='/experience'> Experience</NavbarLink>
            <NavbarLink to='/projects'> Projects</NavbarLink>
            <NavbarLink to='/awards'> Awards</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to='/'> Home</NavbarLinkExtended>
          <NavbarLinkExtended to='/experience'> Experience</NavbarLinkExtended>
          <NavbarLinkExtended to='/projects'> Projects</NavbarLinkExtended>
          <NavbarLinkExtended to='/awards'> Awards</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;