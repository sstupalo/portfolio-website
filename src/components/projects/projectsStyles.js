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
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  padding-top: 2%;
`

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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FilterButton = styled.button`
  color: #747474FF;
  font-size: 22px;
  font-family: 'captura';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  border: none;
  background: none;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  &:hover {
    color: #2B2B2BFF;
    transform: scale(1.01);
  }
  /* &:focus {
    text-decoration: none;
    text-decoration-color: #FFC9C9FF;
  } */
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const ModalBackdrop =styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`

export const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30%;
  max-height: 80%;
  width: 60%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
`