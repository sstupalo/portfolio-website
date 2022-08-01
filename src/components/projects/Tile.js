import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
    TileBase,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
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
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Disagree
                </Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Tile