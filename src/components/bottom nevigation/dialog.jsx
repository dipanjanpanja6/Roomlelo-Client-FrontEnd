import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


export default function ResponsiveDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.handleClose}
                // style={{padding:20}}
            >
                <Fab  onClick={props.handleClose} size='small' style={{position:'fixed',backgroundColor:'red',top:7,right:7,}}>
                    <CloseIcon />
                </Fab>
                {props.children}
            </Dialog>
        </div>
    );
}
