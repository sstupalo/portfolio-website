import { React, useState, useEffect } from 'react';
import { PageHeader } from '../global/Global';
import {
  ProjectsPageContainer,
  TileContainer,
  TileBase,
  ProjectTitle,
  ProjectSubtitle,
  ProjectImage,
  FilterContainer,
  FilterButton
} from './ProjectsStyles';


function Projects({data}) {
  const [filtered, setFiltered] = useState([]);
  const [activeType, setActiveType]  = useState('All');


  return (
    <ProjectsPageContainer>
      <PageHeader title="Projects"/>
      <Filter project={data.projectList} setFiltered={setFiltered} activeType={activeType} setActiveType={setActiveType}/>
      <TileContainer> 
        {filtered.map((project) => {
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

function Filter({setActiveType, activeType, setFiltered, project}) {
  
  useEffect(() => {
    if(activeType === 'All'){
      setFiltered(project);
      return
    }
    const filtered = project.filter((project) =>
      project.typeId.includes(activeType));
      setFiltered(filtered);
  }, [activeType, project, setFiltered]);
  
  return(
    <FilterContainer>
      <FilterButton active={activeType === 'All' ? 'active' : ''} onClick={() => setActiveType('All')}>All</FilterButton>
      <FilterButton active={activeType === 'Personal' ? 'active' : ''} onClick={() => setActiveType('Personal')}>Personal</FilterButton>
      <FilterButton active={activeType === 'School' ? 'active' : ''} onClick={() => setActiveType('School')}>School</FilterButton>
    </FilterContainer>
  )
}

export default Projects