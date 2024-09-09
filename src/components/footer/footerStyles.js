import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #FFC9C933;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 80px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  padding-right:5%;
  @media (min-width: 768px) {
    margin-right: 70%;
    position: absolute;
  }
`
export const CopyrightContainer = styled.div`
  display: flex;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #2B2B2BFF;
  font-size: 25px;
  padding: 5px;
  margin: 0px;
  &:hover {
    transform: scale(1.1);
  }
`
export const CopyrightLink = styled.a`
  font-size: 12pt;
  font-family: 'lato';
  font-weight: normal;
  font-style: normal;
  color: #2B2B2BFF;
`

export const CopyrightLinkText = styled.text`
  font-size: 12pt;
  font-family: 'lato';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #2B2B2BFF;
  white-space: nowrap; 
`