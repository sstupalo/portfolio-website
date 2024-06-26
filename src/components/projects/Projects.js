import { React, useState, useEffect } from 'react';
import { PageHeader } from '../global/Global';
import { Tile } from './Tile';
import {
  ProjectsPageContainer,
  TileContainer,
  FilterContainer,
  FilterButton
} from './projectsStyles';

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
      <FilterButton active={activeType === 'All'} onClick={() => setActiveType('All')}>All</FilterButton>
      <FilterButton active={activeType === 'Personal'} onClick={() => setActiveType('Personal')}>Personal</FilterButton>
      <FilterButton active={activeType === 'School'} onClick={() => setActiveType('School')}>School</FilterButton>
    </FilterContainer>
  )
}

export default Projects