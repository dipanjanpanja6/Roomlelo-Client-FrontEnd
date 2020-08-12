import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import BookScheduleCard from '../Book & Schedule/Book & Schedule Card';
import { Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export default function ResponsiveDialog(props) {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        handleClose()

    }, [props.open])

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                // style={{padding:20}}
            >
                <Fab color='secondary' onClick={handleClose} size='small' style={{position:'fixed',top:7,right:7,}}>
                    <CloseIcon />
                </Fab>
                {props.children}
            </Dialog>
        </div>
    );
}
