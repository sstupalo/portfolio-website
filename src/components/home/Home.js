import React, {useState} from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader} from '../global/Global';
import {
  HomePageContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  BottomContainer,
  AboutMe,
  ProfilePicture
} from './HomeStyles';

function renderAboutMeTextWithLinks(text) {
  const linkMap = {
    "experience page": "/experience",
    "projects page": "/projects"
  };

  const parts = text.split(/(\bexperience page\b|\bprojects page\b)/);

  return parts.map((part, index) => {
    if (linkMap[part]) {
      return (
        <Link key={index} to={linkMap[part]} style={{ color: '#2B2B2BFF', textDecoration: 'underline' }}>
          {part}
        </Link>
      );
    }
    return part;
  });
}

function Home({data}) {
  const  [queryParameters] = useSearchParams()
  const [showMore, setShowMore] = useState(false);

  // Set engineering flag based on URL query
  if (queryParameters.get("aud") === "eng") {
    localStorage.setItem("isEngineering", "true");
  }

  // Determine which content to display based on the localStorage value
  const aboutMeContent = localStorage.getItem("isEngineering") === "true"
  ? data.aboutMeEng
  : data.aboutMeMed; 

  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          {/* Show the first part of the About Me text */}
          <AboutMe>
            {renderAboutMeTextWithLinks(aboutMeContent)}
            {/* "keep reading..." or "show less" text */}
            <span
              style={{
                color: '#2B2B2BFF',
                cursor: 'pointer',
                textDecoration: 'underline',
                display: 'inline',
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'show less' : 'keep reading...'}
            </span>
          </AboutMe>
          {/* Conditionally render the additional aboutMeContinued content only when showMore is true */}
          {showMore && <AboutMe>{renderAboutMeTextWithLinks(data.aboutMeContinued)}</AboutMe>}
        </LeftContainer>
        <RightContainer>
          <ProfilePicture src={data.profileImage}/>
        </RightContainer>
        <BottomContainer>
          <ProfilePicture src={data.profileImage}/>
        </BottomContainer>
      </ContentContainer>
    </HomePageContainer> 
  )
}

export default Home