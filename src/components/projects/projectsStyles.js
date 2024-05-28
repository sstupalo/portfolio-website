import styled from 'styled-components';
import '../../assets/fonts/fonts.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    transform: scale(1.02);
    filter: brightness(100%);
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

export const ModalImage = styled.img`
  max-height: 15rem;
  height: auto;
  filter: drop-shadow(0px 4px 4px #000000AA);
  padding: 1rem;
`;

export const ModalImageContainer = styled.div`
  display: flex;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  white-space: nowrap;
`

export const ModalActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
`

export const StyledDialog = styled(Dialog)`

`

export const StyledDialogActions = styled(DialogActions)`
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

export const ModalSubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0px;
    }
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

export const ModalDate = styled.h2`
    font-family: 'diodrum';
    font-style: normal;
    font-weight: 600;
    font-size: 12pt;
    color: #2B2B2BFF;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const StyledIconButton = styled(IconButton)`
    position: 'absolute';
    right: 5px;
    top: 5px;
    color: #9E9E9EFF;
`

export const DownloadIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #FFC9C9FF;
  font-size: 17px;
  padding-right: 2%;
`

export const DownloadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2B2B2BFF;
  width: 250px;
  height: 30px;
  border-radius: 30px;
  padding-left: 8%;
  padding-right: 8%;
  &:hover {
    background-color: #747474FF;
  }
`

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  text-decoration: none;
  margin-left: 0%;
`

export const DownloadButtonText = styled.text`
  color: #FFC9C9FF;
  font-size: 14pt;
  font-family: 'carniola';
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  white-space: nowrap;
`