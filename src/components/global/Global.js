import React from 'react';
import {
    PageHeaderContainer,
    PageHeaderText,
    PageHeaderDot
} from './GlobalStyles';

function PageHeader(props) {
  return (
    <PageHeaderContainer>
      <PageHeaderText>{props.title}</PageHeaderText><PageHeaderDot>.</PageHeaderDot>
    </PageHeaderContainer>
  )
}

export default PageHeader