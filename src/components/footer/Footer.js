import React from 'react';
import {
  FooterContainer,
  IconContainer,
  CopyrightContainer,
  StyledFontAwesomeIcon,
  CopyrightLink,
  CopyrightLinkText
} from './FooterStyles';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer({data}) {
  return (
    <FooterContainer>
      <IconContainer> 
        <CopyrightLink href={data.linkedinUrl} target='_blank' rel='noopener noreferrer'>
          <StyledFontAwesomeIcon icon={faLinkedin}/>
        </CopyrightLink>
        <CopyrightLink href={data.githubUrl} target='_blank' rel='noopener noreferrer'>
          <StyledFontAwesomeIcon icon={faGithub}/>
        </CopyrightLink>
        <CopyrightLink href={data.envelopeUrl}>
          <StyledFontAwesomeIcon icon={faEnvelope}/>
        </CopyrightLink>
        <CopyrightLink href={data.phoneUrl}>
          <StyledFontAwesomeIcon icon={faPhone}/>
        </CopyrightLink>
      </IconContainer>
      <CopyrightContainer>
        <CopyrightLinkText>&copy; {data.text} &bull; <CopyrightLink href={data.copyrightUrl}  target='_blank' rel='noopener noreferrer'>{data.linkText}</CopyrightLink></CopyrightLinkText>
      </CopyrightContainer>
    </FooterContainer>
  )
}

export default Footer