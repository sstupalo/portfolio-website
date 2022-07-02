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


function Footer(props) {
  return (
    <FooterContainer>
      <IconContainer> 
        <CopyrightLink href={props.data.linkedinUrl} target='_blank' rel='noopener noreferrer'>
          <StyledFontAwesomeIcon icon={faLinkedin}/>
        </CopyrightLink>
        <CopyrightLink href={props.data.githubUrl} target='_blank' rel='noopener noreferrer'>
          <StyledFontAwesomeIcon icon={faGithub}/>
        </CopyrightLink>
        <CopyrightLink href={props.data.envelopeUrl}>
          <StyledFontAwesomeIcon icon={faEnvelope}/>
        </CopyrightLink>
        <CopyrightLink href={props.data.phoneUrl}>
          <StyledFontAwesomeIcon icon={faPhone}/>
        </CopyrightLink>
      </IconContainer>
      <CopyrightContainer>
        <CopyrightLinkText>&copy; {props.data.text} &bull; <CopyrightLink href={props.data.copyrightUrl}  target='_blank' rel='noopener noreferrer'>{props.data.linkText}</CopyrightLink></CopyrightLinkText>
      </CopyrightContainer>
    </FooterContainer>
  )
}

export default Footer