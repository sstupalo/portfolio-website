import React from 'react';
import { PageHeader } from '../global/Global';
import {
  ExperiencePageContainer,
  CompanyText,
  PositionText,
  DateText,
  ContentText,
  CompanyImage,
  ContentContainer
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
        {data.experienceList.map((experience) => {
            if (7 === experience.id) {
              return (
                <TimelineItem>
                  <TimelineOppositeContent sx={{ flex: 0.35 }}>
                    <CompanyText>{experience.company}</CompanyText>
                    <PositionText>{experience.position}</PositionText>
                    <DateText>{experience.dates}</DateText>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <CompanyImage src={experience.image}/>
                  </TimelineSeparator>
                  <TimelineContent>
                    <ContentContainer>
                      <ContentText>{experience.content}</ContentText>
                    </ContentContainer>
                  </TimelineContent>           
                </TimelineItem>
              );
            } else {
              return (
                <TimelineItem>
                  <TimelineOppositeContent sx={{ flex: 0.35 }}>
                    <CompanyText>{experience.company}</CompanyText>
                    <PositionText>{experience.position}</PositionText>
                    <DateText>{experience.dates}</DateText>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <CompanyImage src={experience.image}/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <ContentContainer>
                      <ContentText>{experience.content}</ContentText>
                    </ContentContainer>
                  </TimelineContent>           
                </TimelineItem>
              );
            }
        })}
      </Timeline>
    </ExperiencePageContainer> 
  )
}

export default Experience