import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

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
  &:hover{
    cursor: pointer;
    transform: scale(1.01);
    filter: brightness(80%);
  }
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
  margin-bottom: 5px;
  filter: drop-shadow(2px 2px 4px #000000AA);
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
  color: ${props => props.active ? '#2B2B2BFF' : '#747474FF'};
  text-decoration: ${props => props.active ? 'underline' : 'normal'};
  text-decoration-thickness: ${props => props.active ? '3px' : ''};
  text-decoration-color: ${props => props.active ? '#FFC9C9FF' : ''};
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #747474FF;
  font-size: 20px;
  &:hover{
    color: #2B2B2BFF;
  }
`

export const ModalImage = styled.img`
  max-height: 15rem;
  height: auto;
  filter: drop-shadow(0px 4px 4px #000000AA);
`;

export const StyledDialog = styled(Dialog)`

`

export const StyledDialogActions = styled(DialogActions)`
  overflow-x: scroll;
`

export const StyledDialogContent = styled(DialogContent)`
  overflow: auto;
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    /* Shadows */
    radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    /* Shadows */
    radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`

export const StyledDialogContentText = styled(DialogContentText)`
  white-space: pre-line;
`

export const StyledDialogTitle = styled(DialogTitle)`

`

export const ModalTitleContainer = styled.div`
    font-family: 'diodrum';
    font-style: normal;
    font-weight: 600;
    font-size: 12pt;
    display: flex;
    align-items: center;
`

export const ModalTitle = styled.h1`
    color: #2B2B2BFF;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const ModalTitleDot = styled.h1`
    color: #FFC9C9FF;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const ModalTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ModalSubtitle = styled.h2`
    font-family: 'diodrum';
    font-style: normal;
    font-weight: 600;
    font-size: 14pt;
    color: #FFC9C9FF;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const StyledIconButton = styled(IconButton)`
    position: 'absolute';
    right: 5px;
    top: 5px;
    color: #9E9E9EFF;
`