import { React } from 'react';
import {
    TileBase,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage
  } from './projectsStyles';
  

function Tile({data, handleSetOpen}) {
    const handleOpen = () => handleSetOpen(data.url);

    return (
        <TileBase onClick={handleOpen}>
        <ProjectImage src={data.image}/>
        <ProjectTitle>{data.title}</ProjectTitle> 
        <ProjectSubtitle>{data.subtitle}</ProjectSubtitle>
        </TileBase>
    )
}

export default Tile;