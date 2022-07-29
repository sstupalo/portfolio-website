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
  FilterButton,
  ModalWrapper,
  ModalBackdrop,
  ModalBox,
  StyledFontAwesomeIcon
} from './ProjectsStyles';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
      <Modal/>
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

function Modal({data}) {
  const [display, setDisplay] = useState(true);

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return (
      <ModalWrapper>
        <ModalBackdrop onClick={close}>
          <ModalBox>
            <StyledFontAwesomeIcon icon={faXmark} onClick={close} />
            bitur eu ligula porta, rhoncus arcu in, egestas mauris. Maecenas efficitur magna quis sagittis placerat. Mauris ultricies sodales massa in tempor. Nullam ut libero dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ModalBox>
        </ModalBackdrop>
      </ModalWrapper>
    )
  }

  return null;
  
}

export default Projects