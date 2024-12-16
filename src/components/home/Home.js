import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader} from '../global/Global';
import {
  HomePageContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  BottomContainer,
  AboutMeParagraph,
  ProfilePicture
} from './HomeStyles';

import { Link } from "react-router-dom";

function renderAboutMeTextWithLinks(text) {
  const linkMap = {
    "experience page": "/experience",
    "projects page": "/projects"
  };

  const parts = text.split(/(\bexperience page\b|\bprojects page\b)/);

  return parts.map((part, index) => {
    if (linkMap[part]) {
      return (
        <Link key={index} to={linkMap[part]} style={{ color: "blue", textDecoration: "underline" }}>
          {part}
        </Link>
      );
    }
    return part;
  });
}

function Home({data}) {
  const  [queryParameters] = useSearchParams()
  if (queryParameters.get("aud") === "eng") {
    localStorage.setItem("isEngineering", "true");
  }

  const aboutMeContent = localStorage.getItem("isEngineering") === "true"
  ? data.aboutMeEng
  : data.aboutMeMed; 

  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          <AboutMeParagraph>{renderAboutMeTextWithLinks(aboutMeContent)}</AboutMeParagraph>
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