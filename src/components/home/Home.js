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
          <AboutMeParagraph>{aboutMeContent}</AboutMeParagraph>
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