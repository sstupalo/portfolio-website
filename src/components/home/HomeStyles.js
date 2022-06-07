import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #2B2B2BFF;
  font-size: 40px;
`

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
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
`

export const DownloadButtonText = styled.text`
  font-size: x-large;
  font-family: 'carniola';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #FFC9C9FF;
`