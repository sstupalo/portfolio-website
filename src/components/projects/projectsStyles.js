import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const ProjectsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const TileBase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h1`
  font-family: 'diodrum';
  font-style: normal;
  font-weight: 600;
  font-size: 17pt;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #2B2B2BFF;
  white-space: nowrap;
  margin: 0%;
`;

export const ProjectSubtitle = styled.h1`
  font-size: 14pt;
  font-family: 'carniola';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  color: #2B2B2BFF;
  white-space: nowrap;
  margin: 0%;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  filter: brightness(70%);
  &:hover {
    filter: none;
  }
`;

export const FilterContainer = styled.div`
  
`;

export const FilterButton = styled.button`
  color: #747474FF;
  font-size: 20px;
  font-family: 'captura';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: #2B2B2BFF;
    transform: scale(1.01);
  }
  &.active {
    text-decoration: none;
    text-decoration-color: #FFC9C9FF;
  }
`;