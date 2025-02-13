import { React, useState, useEffect } from 'react';
import { PageHeader } from '../global/Global';
import { useNavigate, useParams, useSearchParams} from 'react-router-dom';
import Tile from './Tile';
import ProjectModal from './ProjectModal';
import {
  ProjectsPageContainer,
  TileContainer,
  FilterContainer,
  FilterButton
} from './projectsStyles';

function Projects({data}) {
  
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState('');
  const {projectId} = useParams()
  useEffect(() => {
    setSelectedId(projectId)
  }, [projectId])
  const handleSetSelectedId = (url) => navigate(`/projects/${url}`)
  
  const [filtered, setFiltered] = useState([]);
  const [activeType, setActiveType]  = useState('All');

  const  [queryParameters] = useSearchParams();

  // Set engineering flag based on URL query
  if (queryParameters.get("aud") === "eng") {
    localStorage.setItem("isEngineering", "true");
  }

  return (
    <ProjectsPageContainer>
      <PageHeader title="Projects"/>
      <Filter project={data.projectList} setFiltered={setFiltered} activeType={activeType} setActiveType={setActiveType}/>
      <TileContainer> 
        {filtered.map((project) => {
          return <Tile data={project} handleSetOpen={handleSetSelectedId}/>;
        })}
      </TileContainer>
      {selectedId && <ProjectModal data={data.projectList.find(project => project.url === selectedId)} handleSetClose={handleSetSelectedId}/>}
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