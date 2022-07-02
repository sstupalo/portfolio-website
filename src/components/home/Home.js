import React from 'react';
import { PageHeader, SubHeading } from '../global/Global';
import {
  HomePageContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  TopContentContainer,
  DetailsContainer,
  StyledFontAwesomeIcon,
  GradCapIcon,
  DownloadIcon,
  DownloadButton,
  LinkContainer,
  ButtonText,
  DownloadButtonText,
  AboutMeParagraph,
  ProfilePictureContainer,
  ProfilePicture
} from './HomeStyles';
import ProfileImage from '../../assets/headshot.jpg';
import { faGraduationCap, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'


function Home(props) {
  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          <TopContentContainer>
            <DetailsContainer> 
              <SubHeading title='Contact Details'/>
              <LinkContainer href={props.data.phoneLink}>
                <StyledFontAwesomeIcon icon={faPhone}/><ButtonText>{props.data.phoneText}</ButtonText>
              </LinkContainer>
              <LinkContainer href={props.data.emailLink}>
                <StyledFontAwesomeIcon icon={faEnvelope}/><ButtonText>{props.data.emailText}</ButtonText>
              </LinkContainer>
            </DetailsContainer>
            <DetailsContainer> 
              <SubHeading title='Education'/>
              <LinkContainer href={props.data.educationLink}  target='_blank' rel='noopener noreferrer'>
                <GradCapIcon icon={faGraduationCap}/><ButtonText>University of Waterloo<br />3B Biomedical Engineering</ButtonText>
              </LinkContainer>
            </DetailsContainer>
          </TopContentContainer>
          <DownloadButton> 
            <LinkContainer href={props.data.resumeLink} download> 
              <DownloadIcon icon={faDownload}/><DownloadButtonText>Download Resume</DownloadButtonText>
            </LinkContainer>
          </DownloadButton>
          <SubHeading title='About Me'/>
          <AboutMeParagraph>{props.data.aboutMeParagraph}</AboutMeParagraph>
        </LeftContainer>
        <RightContainer>
          <ProfilePictureContainer>
            <ProfilePicture src={ProfileImage}/>
          </ProfilePictureContainer>
        </RightContainer>
      </ContentContainer>
    </HomePageContainer> 
  )
}

export default Home