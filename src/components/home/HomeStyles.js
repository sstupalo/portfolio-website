import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 4%;
  @media (min-width: 768px) {
    display: none;
  }
`

export const TopContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 5%;
  }
`

export const DetailsContainer  = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #2B2B2BFF;
  font-size: 20px;
`

export const GradCapIcon = styled(StyledFontAwesomeIcon)`
  align-self: flex-start;
`

export const DownloadIcon = styled(StyledFontAwesomeIcon)`
  color: #FFC9C9FF;
  font-size: 17px;
  padding-right: 2%;
`

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2B2B2BFF;
  width: 100%;
  height: 40px;
  margin-top: 4%;
  margin-bottom: 4%;
  &:hover {
    background-color: #747474FF;
  }
`

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  text-decoration: none;
  margin-bottom: 2%;
  margin-top: 2%;
`

export const ButtonText = styled.text`
  font-size: 20pt;
  font-family: 'lato';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #2B2B2BFF;
`

export const DownloadButtonText = styled(ButtonText)`
  color: #FFC9C9FF;
`

export const AboutMe = styled.p`
  font-size: 17pt;
  font-family: 'lato';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #747474FF;
  margin-top: 0%;
  margin-bottom: 5%;
  white-space: pre-line;
  text-align: justify;
`

export const ProfilePicture = styled.img`
  display: flex;
  width: 100%;
  max-width: 100%;
  margin-bottom: 3%;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  height: auto;
`
