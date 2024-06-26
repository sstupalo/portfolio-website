import React from 'react';
import {
    PageHeaderContainer,
    PageHeaderText,
    PageHeaderDot,
    SubHeadingText
} from './globalStyles';

function PageHeader({title}) {
  return (
    <PageHeaderContainer>
      <PageHeaderText>{title}</PageHeaderText><PageHeaderDot>.</PageHeaderDot>
    </PageHeaderContainer>
  )
}

function SubHeading({title}) {
  return (
    <SubHeadingText>{title}</SubHeadingText>
  )
}

export {PageHeader, SubHeading};