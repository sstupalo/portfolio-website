import React from 'react';
import { PageHeader } from '../global/Global';
import {
  AwardsPageContainer
} from './awardsStyles';

function Awards({data}) {
  return (
    <AwardsPageContainer>
      <PageHeader title="Awards"/>
    </AwardsPageContainer> 
  )
}

export default Awards