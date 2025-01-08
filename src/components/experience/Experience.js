import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../global/Global';
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
import Carousel from 'react-elastic-carousel';
import Carousel from 'react-elastic-carousel';

function Experience({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const [carouselReady, setCarouselReady] = useState(false);

  // Detect screen width and update mobile/desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Wait for the carousel to render before scrolling to the hash
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setCarouselReady(true); // Set carousel as ready after a delay
      }, 300); // Delay to ensure carousel is rendered

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Scroll to the hash element on both mobile and desktop view
  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Smooth scroll behavior for both mobile and desktop
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Only trigger the scroll if the location contains a hash and the carousel is ready on mobile
    if (location.hash) {
      if (isMobile && carouselReady) {
        scrollToHash();
      } else if (!isMobile) {
        scrollToHash();
      }
    }
  }, [location, isMobile, carouselReady]);

  // Map experience items for carousel
  const experienceItems = data.experienceList.map((experience) => (
    <CarouselItemContainer id={experience.id}>
      <GroupContainer>
        <PositionContainer>
          <CompanyText>{experience.company}</CompanyText>
          <PositionText>{experience.position}</PositionText>
          <DateText>{experience.dates}</DateText>
        </PositionContainer>
        <CompanyImage src={experience.image} />
        <ContentContainer>
          <ContentText>{experience.content}</ContentText>
        </ContentContainer>
      </GroupContainer>
    </CarouselItemContainer>
  ));
function Experience({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const [carouselReady, setCarouselReady] = useState(false);

  // Detect screen width and update mobile/desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Wait for the carousel to render before scrolling to the hash
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setCarouselReady(true); // Set carousel as ready after a delay
      }, 300); // Delay to ensure carousel is rendered

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Scroll to the hash element on both mobile and desktop view
  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Smooth scroll behavior for both mobile and desktop
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Only trigger the scroll if the location contains a hash and the carousel is ready on mobile
    if (location.hash) {
      if (isMobile && carouselReady) {
        scrollToHash();
      } else if (!isMobile) {
        scrollToHash();
      }
    }
  }, [location, isMobile, carouselReady]);

  // Map experience items for carousel
  const experienceItems = data.experienceList.map((experience) => (
    <CarouselItemContainer id={experience.id}>
      <GroupContainer>
        <PositionContainer>
          <CompanyText>{experience.company}</CompanyText>
          <PositionText>{experience.position}</PositionText>
          <DateText>{experience.dates}</DateText>
        </PositionContainer>
        <CompanyImage src={experience.image} />
        <ContentContainer>
          <ContentText>{experience.content}</ContentText>
        </ContentContainer>
      </GroupContainer>
    </CarouselItemContainer>
  ));

  return (
    <ExperiencePageContainer>
      <PageHeader title="Experience" />
      {isMobile ? (
        <CarouselContainer>
          <Carousel>{experienceItems}</Carousel>
        </CarouselContainer>
      ) : (
        <Timeline>
          {data.experienceList.map((experience, index) => (
            <TimelineItem id={experience.id}>
              <TimelineOppositeContent sx={{ flex: 0.35 }}>
                <CompanyText>{experience.company}</CompanyText>
                <PositionText>{experience.position}</PositionText>
                <DateText>{experience.dates}</DateText>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <CompanyImage src={experience.image} />
                {index !== data.experienceList.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: "#747474BFF" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: 5 }}>
                <ContentContainer>
                  <ContentText>{experience.content}</ContentText>
                </ContentContainer>
              </TimelineContent>
            </TimelineItem>
          ))}
  return (
    <ExperiencePageContainer>
      <PageHeader title="Experience" />
      {isMobile ? (
        <CarouselContainer>
          <Carousel>{experienceItems}</Carousel>
        </CarouselContainer>
      ) : (
        <Timeline>
          {data.experienceList.map((experience, index) => (
            <TimelineItem id={experience.id}>
              <TimelineOppositeContent sx={{ flex: 0.35 }}>
                <CompanyText>{experience.company}</CompanyText>
                <PositionText>{experience.position}</PositionText>
                <DateText>{experience.dates}</DateText>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <CompanyImage src={experience.image} />
                {index !== data.experienceList.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: "#747474BFF" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: 5 }}>
                <ContentContainer>
                  <ContentText>{experience.content}</ContentText>
                </ContentContainer>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </ExperiencePageContainer>
  );
      )}
    </ExperiencePageContainer>
  );
}

export default Experience;

export default Experience;
