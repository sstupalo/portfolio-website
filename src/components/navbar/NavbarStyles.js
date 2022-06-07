import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../../assets/fonts/fonts.css';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: #FFC9C933;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-left: 3%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLinkContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: #747474FF;
  font-size: x-large;
  font-family: 'captura';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  margin: 15px;
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    color: #FFC9C9FF;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 60px;
  height: auto;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #2B2B2BFF;
  font-size: 45px;
  cursor: pointer;
  justify-self: flex-end;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;