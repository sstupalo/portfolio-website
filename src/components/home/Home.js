import React from 'react';
import { PageHeader, SubHeading } from '../global/Global';
import {
  HomePageContainer,
  StyledFontAwesomeIcon,
  DownloadButton,
  DownloadButtonLink,
  DownloadButtonText,
} from './HomeStyles';
import { faGraduationCap, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

function Home(props) {
  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <SubHeading title='Contact Details'/>
      <SubHeading title='Education'/>
      <SubHeading title='About Me'/>
      <DownloadButton> 
        <DownloadButtonLink> 
          <DownloadButtonText>{props.data.title}Download Resume</DownloadButtonText>
        </DownloadButtonLink>
      </DownloadButton>
      <StyledFontAwesomeIcon icon={faGraduationCap}/>
      <StyledFontAwesomeIcon icon={faPhone}/>
      <StyledFontAwesomeIcon icon={faEnvelope}/>
      <StyledFontAwesomeIcon icon={faDownload}/>
    </HomePageContainer> 
  )
}

export default Home