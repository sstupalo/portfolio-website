import React from 'react';
import { PageHeader } from '../global/Global';
import Carousel from 'react-elastic-carousel';
import {
  ExperiencePageContainer,
  CompanyText,
  PositionText,
  DateText,
  ContentText,
  CompanyImage,
  ContentContainer,
  CarouselContainer,
  CarouselItemContainer,
  PositionContainer,
  GroupContainer
} from './experienceStyles';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';

function Experience({data}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  let experienceItems = [];
  for (let i = 0; i < data.experienceList.length; i++) {
    experienceItems.push(
      <CarouselItemContainer>
        <GroupContainer>
          <PositionContainer>
            <CompanyText>{data.experienceList[i].company}</CompanyText>
            <PositionText>{data.experienceList[i].position}</PositionText>
            <DateText>{data.experienceList[i].dates}</DateText>
          </PositionContainer>
          <CompanyImage src={data.experienceList[i].image}/>
          <ContentContainer>
            <ContentText>{data.experienceList[i].content}</ContentText>
          </ContentContainer>
        </GroupContainer>
      </CarouselItemContainer>
    );
  }

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if(width > breakpoint){
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
                      <TimelineConnector
                        sx={{
                          backgroundColor: "#747474BFF",
                        }}
                      />
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
  } else {
    return (
      <ExperiencePageContainer>
        <PageHeader title="Experience"/>
        <CarouselContainer>
          <Carousel>
            {experienceItems}
          </Carousel>
        </CarouselContainer>
      </ExperiencePageContainer> 
    )
  }
}

export default Experience