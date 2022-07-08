import React from 'react';
import { PageHeader } from '../global/Global';
import {
  ProjectsPageContainer,
  TileContainer,
  TileBase,
  ProjectTitle,
  ProjectSubtitle,
  ProjectImage
} from './ProjectsStyles';


function Projects({data}) {
  return (
    <ProjectsPageContainer>
      <PageHeader title="Projects"/>
      <TileContainer> 
        {data.projectList.map((project) => {
          return <Tile data={project}/>;
        })}
      </TileContainer>
    </ProjectsPageContainer> 
  )
}

function Tile({data}) {
  return (
    <TileBase>
      <ProjectImage src={data.image}/>
      <ProjectTitle>{data.title}</ProjectTitle> 
      <ProjectSubtitle>{data.subtitle}</ProjectSubtitle>
    </TileBase>
  )
}

export default Projects