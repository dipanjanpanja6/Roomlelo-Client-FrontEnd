import React from 'react'; 
import Grid from '@material-ui/core/Grid';
// import BadRequest from '../static/404.svg'

import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer';
import AppBarSpace from '../components/appBarSpace';

const styles = makeStyles(t => ({
    root: {
        minHeight: '30vw',
    },

}))



export default function E4() {
    const classes = styles()


    return (<>
            <Toolbar />
            <AppBarSpace />
        <Grid container className={classes.root}>
            <Grid container justify='center' alignItems='center' style={{flexDirection:'column'}} >
                <Typography variant='h3'>Error 404</Typography>
                <Typography variant='body2' color='textSecondary'>Page Not Found !</Typography>
                {/* <img style={{height:'80vh', maxWidth:'100vw', width:'auto'}} src={BadRequest}/> */}
            </Grid>
        </Grid>
        <Footer/>
        </>
    );
}



