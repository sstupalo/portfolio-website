import React from 'react';
import {
    PageHeaderContainer,
    PageHeaderText,
    PageHeaderDot,
    SubHeadingText
} from './GlobalStyles';

function PageHeader(props) {
  return (
    <PageHeaderContainer>
      <PageHeaderText>{props.title}</PageHeaderText><PageHeaderDot>.</PageHeaderDot>
    </PageHeaderContainer>
  )
}

function SubHeading(props) {
  return (
    <SubHeadingText>{props.title}</SubHeadingText>
  )
}

export {PageHeader, SubHeading};