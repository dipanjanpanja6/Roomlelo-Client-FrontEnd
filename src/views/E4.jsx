import React from 'react'; 
import Grid from '@material-ui/core/Grid';
// import BadRequest from '../static/404.svg'

import { makeStyles, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const styles = makeStyles(t => ({
    root: {
        height: '100vh',
    },

}))



export default function E4() {
    const classes = styles()


    return (<>
        <Grid className={classes.root}>
            <Toolbar />
            <Toolbar />
            <Grid container justify='center' alignItems='center'>
                <p>Error 404</p>
                {/* <img style={{height:'80vh', maxWidth:'100vw', width:'auto'}} src={BadRequest}/> */}
            </Grid>
        </Grid></>
    );
}



