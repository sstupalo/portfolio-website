import React from 'react';
import { PageHeader } from '../global/Global';
import {
  ExperiencePageContainer
} from './ExperienceStyles';

function Experience({data}) {
  return (
    <ExperiencePageContainer>
      <PageHeader title="Experience"/>
    </ExperiencePageContainer> 
  )
}

export default Experience