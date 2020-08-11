// import React from 'react'
// import {Grid, Backdrop} from '@material-ui/core'
// import CircularProgress from '@material-ui/core/CircularProgress';

// const Loading = () => {
//     const style={style:{height:'70vh'}}
//     return (
//         <Grid container justify='center' alignItems='center' {...style} > <CircularProgress /></Grid>
//     )
// }
// export default Loading

import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));

export default function Loading() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} 
    //   onClick={handleClose}
      >
        <CircularProgress color='primary' />
        {/* <LinearProgress color='primary'/> */}
      </Backdrop>
    </div>
  );
}
