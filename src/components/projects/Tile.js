import { React, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@material-ui/icons/Close';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {
    TileBase,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
    ModalImage,
    ModalImageContainer,
    StyledDialog,
    StyledDialogActions,
    StyledDialogContent,
    StyledDialogContentText,
    StyledDialogTitle,
    ModalTitleContainer,
    ModalTitle,
    ModalTitleDot,
    ModalSubtitle,
    ModalSubtitleContainer,
    StyledIconButton,
    ModalTopContainer,
    ModalActionsContainer,
    DownloadButtonContainer,
    DownloadButtonText,
    DownloadIcon,
    LinkContainer
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
                    <ModalTopContainer>
                        <ModalTitleContainer>
                            <ModalTitle>{data.title}</ModalTitle>
                            <ModalTitleDot>.</ModalTitleDot>
                        </ModalTitleContainer>
                        <StyledIconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </StyledIconButton>
                    </ModalTopContainer>
                    <ModalSubtitleContainer>
                        <ModalSubtitle>{data.subtitle}</ModalSubtitle>
                        <DownloadButton data={data}/> 
                    </ModalSubtitleContainer>
                </StyledDialogTitle>
                <StyledDialogContent>
                <StyledDialogContentText>{data.content}</StyledDialogContentText>
                </StyledDialogContent>
                <StyledDialogActions>
                    <ModalActionsContainer>
                        {data.contentImages.map((contentImages) => {
                            return (
                                <ModalImageContainer>
                                    <ModalImage src={contentImages}/>
                                </ModalImageContainer>
                            );
                        })}
                    </ModalActionsContainer>
                </StyledDialogActions>
            </StyledDialog>
        </div>
    )
}

function DownloadButton({data}) {
    if(data.document){
        return (
            <LinkContainer href={data.document} download>
                <DownloadButtonContainer> 
                    <DownloadIcon icon={faDownload}/><DownloadButtonText>Download Full Report</DownloadButtonText>
                </DownloadButtonContainer>
            </LinkContainer>
        )
    }
    return    
}

export {Tile, DownloadButton};