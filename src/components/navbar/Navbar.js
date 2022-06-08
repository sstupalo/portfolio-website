import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLinkContainerDesktop,
  NavbarLink,
  Logo,
  LogoContainer,
  OpenLinksButton
} from './NavbarStyles';
import LogoImg from '../../assets/logoBlank.png';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <LogoContainer to='/'> 
            <Logo src={LogoImg}/>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLinkContainerDesktop> 
              <NavbarLink to='/'> Home</NavbarLink>
              <NavbarLink to='/experience'> Experience</NavbarLink>
              <NavbarLink to='/projects'> Projects</NavbarLink>
              <NavbarLink to='/awards'> Awards</NavbarLink>
            </NavbarLinkContainerDesktop>
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
        <NavbarExtendedContainer
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          <NavbarLink to='/'> Home</NavbarLink>
          <NavbarLink to='/experience'> Experience</NavbarLink>
          <NavbarLink to='/projects'> Projects</NavbarLink>
          <NavbarLink to='/awards'> Awards</NavbarLink>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;