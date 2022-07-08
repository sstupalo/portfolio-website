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
import { faGraduationCap, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'


function Home({data}) {
  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          <TopContentContainer>
            <DetailsContainer> 
              <SubHeading title='Contact Details'/>
              <LinkContainer href={data.phoneLink}>
                <StyledFontAwesomeIcon icon={faPhone}/><ButtonText>{data.phoneText}</ButtonText>
              </LinkContainer>
              <LinkContainer href={data.emailLink}>
                <StyledFontAwesomeIcon icon={faEnvelope}/><ButtonText>{data.emailText}</ButtonText>
              </LinkContainer>
            </DetailsContainer>
            <DetailsContainer> 
              <SubHeading title='Education'/>
              <LinkContainer href={data.educationLink}  target='_blank' rel='noopener noreferrer'>
                <GradCapIcon icon={faGraduationCap}/><ButtonText>University of Waterloo<br />3B Biomedical Engineering</ButtonText>
              </LinkContainer>
            </DetailsContainer>
          </TopContentContainer>
          <DownloadButton> 
            <LinkContainer href={data.resumeLink} download> 
              <DownloadIcon icon={faDownload}/><DownloadButtonText>Download Resume</DownloadButtonText>
            </LinkContainer>
          </DownloadButton>
          <SubHeading title='About Me'/>
          <AboutMeParagraph>{data.aboutMeParagraph}</AboutMeParagraph>
        </LeftContainer>
        <RightContainer>
          <ProfilePictureContainer>
            <ProfilePicture src={data.profileImage}/>
          </ProfilePictureContainer>
        </RightContainer>
      </ContentContainer>
    </HomePageContainer> 
  )
}

export default Home