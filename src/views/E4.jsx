import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer';

const styles = makeStyles(t => ({
    root: {
        minHeight: '30vw',
    },

}))



export default function E4() {
    const classes = styles()


    return (<>
        <Toolbar />
        <Grid container className={classes.root}>
            <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column' }} >
                <Typography variant='h3'>Error 404</Typography>
                <Typography variant='body2' color='textSecondary'>Page Not Found !</Typography>
            </Grid>
        </Grid>
        <Footer />
    </>
    );
}



