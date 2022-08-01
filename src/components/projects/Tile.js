import { React, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
    TileBase,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
    ModalImage,
    StyledDialog,
    StyledDialogActions,
    StyledDialogContent,
    StyledDialogContentText,
    StyledDialogTitle,
    ModalTitle,
    ModalSubtitle,
    ModalSkills,
  } from './ProjectsStyles';

  

function Tile({data}) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <TileBase onClick={handleOpen}>
            <ProjectImage src={data.image}/>
            <ProjectTitle>{data.title}</ProjectTitle> 
            <ProjectSubtitle>{data.subtitle}</ProjectSubtitle>
            </TileBase>
            <StyledDialog
                fullScreen={fullScreen}
                open={open}
                scroll='paper'
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                align='justify'
                fullwidth={true}
                maxWidth='lg'
            >
                <StyledDialogTitle id="responsive-dialog-title">
                    <ModalTitle>{data.title}</ModalTitle>
                    <ModalSubtitle>{data.subtitle}</ModalSubtitle>
                    <ModalSkills>Skills Developed: {data.skills}</ModalSkills>
                </StyledDialogTitle>
                <StyledDialogContent>
                <StyledDialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.LLet Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.et Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </StyledDialogContentText>
                </StyledDialogContent>
                <StyledDialogActions>
                    <ModalImage src={data.image}/>
                    <ModalImage src={data.image}/>
                    <ModalImage src={data.image}/>
                </StyledDialogActions>
            </StyledDialog>
        </div>
    )
}

export default Tile