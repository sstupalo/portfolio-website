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

function Navbar({data}) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <LogoContainer to={data.homePath}> 
            <Logo src={LogoImg}/>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLinkContainerDesktop> 
              {/* <NavbarLink to={data.aboutPath}> {data.aboutText}</NavbarLink> */}
              <NavbarLink to={data.homePath}> {data.homeText}</NavbarLink>
              <NavbarLink to={data.experiencePath}> {data.experienceText}</NavbarLink>
              <NavbarLink to={data.projectsPath}> {data.projectsText}</NavbarLink>
              {/* <NavbarLink to={data.awardsPath}> {data.awardsText}</NavbarLink> */}
              {/* <NavbarLink to={data.contactPath}> {data.contactText}</NavbarLink> */}
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
          {/* <NavbarLink to={data.aboutPath}> {data.aboutText}</NavbarLink> */}
          <NavbarLink to={data.homePath}> {data.homeText}</NavbarLink>
          <NavbarLink to={data.experiencePath}> {data.experienceText}</NavbarLink>
          <NavbarLink to={data.projectsPath}> {data.projectsText}</NavbarLink>
          {/* <NavbarLink to={data.awardsPath}> {data.awardsText}</NavbarLink> */}
          {/* <NavbarLink to={data.contactPath}> {data.contactText}</NavbarLink> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;