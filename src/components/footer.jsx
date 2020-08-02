import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import BadRequest from '../static/404.svg'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, IconButton, Link, } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import { useHistory } from "react-router-dom";

const styles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        // background: "#dfa",
    },
    content: {
        flexDirection: 'column',
        alignItems: 'baseline',
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center'
        }
    }
}));



export default function Footer() {
    const history = useHistory();
    const sty = styles();


    return (

        <Grid container justify="center" style={{ paddingBottom: 30, paddingTop: 30, background: 'aliceblue' }}>

            <Grid sm={3} justify="center" alignItems='center' container style={{ flexDirection: 'column' }}>
                <img src={require('../static/roomlelologo.webp')} height="45px" width='183px' alt="Roomlelo" />
                <Typography variant='body1' color='textSecondary' style={{ padding: '12px 0 0' }}>Connect with us</Typography>
                <Grid>
                    <IconButton><FacebookIcon /></IconButton>
                    <IconButton><WhatsAppIcon /></IconButton>
                    <IconButton><TwitterIcon /></IconButton>
                    <IconButton><InstagramIcon /></IconButton>
                </Grid>
            </Grid>

            <Grid sm={3} container className={sty.content} >
                <Typography variant="h5" >
                    About the Company
                </Typography>
                <Link color='textSecondary'  variant='body1' to='/about' component={RouterLink}>About us</Link>
                
            <Typography variant='body1' color="textSecondary">
                Behind Our new looks
                </Typography>
            <Typography variant='body1' color="textSecondary">
                Work with us
                </Typography>
            <Typography variant='body1' color="textSecondary">
                Press
                </Typography>
        </Grid>
        <Grid sm={3} container className={sty.content} >
            <Typography variant="h5">
                Partner with us
                </Typography>
            <Typography variant='body1' color="textSecondary">
                For house Owner
                </Typography>
            <Typography variant='body1' color="textSecondary">
                For large corporation
                </Typography>
        </Grid>
        <Grid sm={3} container className={sty.content} >
            <Typography variant="h5">
                More Information
                </Typography>
            <Typography variant='body1' color="textSecondary">
                FAQ
                </Typography>
            <Typography variant='body1' color="textSecondary">
                House shifting service
                </Typography>

        </Grid>

        </Grid >
    );
}
