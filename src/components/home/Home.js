import React from 'react';
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
  return (
    <HomePageContainer>
      <PageHeader title='Sophie Stupalo'/>
      <ContentContainer> 
        <LeftContainer>
          <AboutMeParagraph>{data.aboutMeParagraph}</AboutMeParagraph>
        </LeftContainer>
        <RightContainer>
          <ProfilePicture src={data.profileImage}/>
          <ProfilePicture src={data.fullImage}/>
        </RightContainer>
        <BottomContainer>
          <ProfilePicture src={data.profileImage}/>
          <ProfilePicture src={data.fullImage}/>
        </BottomContainer>
      </ContentContainer>
    </HomePageContainer> 
  )
}

export default Home