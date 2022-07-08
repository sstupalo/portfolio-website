import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const ProjectsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const TileContainer = styled.div`
  display: flex;
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
  max-width: 200px;
  height: auto;
  filter: brightness(70%);
  &:hover {
    filter: none;
  }
`;