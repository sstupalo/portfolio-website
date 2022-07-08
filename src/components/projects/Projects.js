import React from 'react';
import { PageHeader } from '../global/Global';
import {
  ProjectsPageContainer,
  TileContainer
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
    <h1>{data.title}</h1>
  )
}

export default Projects