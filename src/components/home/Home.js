import React from 'react';
import { PageHeader, SubHeading } from '../global/Global';
import {
  HomePageContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  StyledFontAwesomeIcon,
  DownloadIcon,
  DownloadButton,
  DownloadButtonLink,
  DownloadButtonText,
} from './HomeStyles';
import { faGraduationCap, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'


function Home(props) {
  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          <SubHeading title='Contact Details'/><SubHeading title='Education'/>
          <SubHeading title='About Me'/>
          <DownloadButton> 
            <DownloadButtonLink href={props.data.resumeLink} download> 
              <DownloadIcon icon={faDownload}/><DownloadButtonText>Download Resume</DownloadButtonText>
            </DownloadButtonLink>
          </DownloadButton>
          <StyledFontAwesomeIcon icon={faGraduationCap}/>
          <StyledFontAwesomeIcon icon={faPhone}/>
          <StyledFontAwesomeIcon icon={faEnvelope}/>
        </LeftContainer>
        <RightContainer> 

        </RightContainer>
      </ContentContainer>
    </HomePageContainer> 
  )
}

export default Home