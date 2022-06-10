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

function Navbar(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <LogoContainer to={props.data.homePath}> 
            <Logo src={LogoImg}/>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLinkContainerDesktop> 
              <NavbarLink to={props.data.homePath}> {props.data.homeText}</NavbarLink>
              <NavbarLink to={props.data.experiencePath}> {props.data.experienceText}</NavbarLink>
              <NavbarLink to={props.data.projectsPath}> {props.data.projectsText}</NavbarLink>
              <NavbarLink to={props.data.awardsPath}> {props.data.awardsText}</NavbarLink>
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
          <NavbarLink to={props.data.homePath}> {props.data.homeText}</NavbarLink>
          <NavbarLink to={props.data.experiencePath}> {props.data.experienceText}</NavbarLink>
          <NavbarLink to={props.data.projectsPath}> {props.data.projectsText}</NavbarLink>
          <NavbarLink to={props.data.awardsPath}> {props.data.awardsText}</NavbarLink>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;