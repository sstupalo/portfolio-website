import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-left: 7%;
  padding-right:7%;
  background-color: #FFFFFFFF;
  align-items:center;
  justify-content: center;
`

export const LeftContainer = styled.div`
  display: flex;
`

export const RightContainer = styled.div`
  display: flex;
`

export const TopContentContainer = styled.div`
  display: flex;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #2B2B2BFF;
  font-size: 40px;
`

export const DownloadIcon = styled(StyledFontAwesomeIcon)`
  color: #FFC9C9FF;
  font-size: 17px;
`

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2B2B2BFF;
  width: 50%;
  height: 40px;
  &:hover {
    background-color: #747474FF;
  }
`

export const DownloadButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  text-decoration: none;
`

export const DownloadButtonText = styled.text`
  font-size: 17pt;
  font-family: 'carniola';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #FFC9C9FF;
`