import React from 'react';
import { PageHeader } from '../global/Global';
import {
  AboutPageContainer
} from './aboutStyles';

function About({data}) {
  return (
    <AboutPageContainer>
      <PageHeader title="About"/>
    </AboutPageContainer> 
  )
}

export default About