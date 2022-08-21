import React from 'react';
import { PageHeader } from '../global/Global';
import {
  ExperiencePageContainer,
  CompanyText,
  PositionText,
  DateText,
  ContentText,
  CompanyImage
} from './ExperienceStyles';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';

function Experience({data}) {
  return (
    <ExperiencePageContainer>
      <PageHeader title="Experience"/>
      <Timeline> 
        {data.experienceList.map((experienceList) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <CompanyText>{experienceList.company}</CompanyText>
                <PositionText>{experienceList.position}</PositionText>
                <DateText>{experienceList.dates}</DateText>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <CompanyImage src={experienceList.image}/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ContentText>{experienceList.content}</ContentText>
              </TimelineContent>           
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperiencePageContainer> 
  )
}

export default Experience