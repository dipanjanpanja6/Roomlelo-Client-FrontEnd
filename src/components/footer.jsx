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
import { contact_no } from "../config/config";

const styles = makeStyles((theme) => ({
    root: {
        paddingBottom: 0, paddingTop: 20,
        //  background: theme.palette.text.icon ?"#000":theme.palette.secondary.main
        background: theme.palette.text.icon ? "#000" : '#00f4fe3d'
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
    // const history = useHistory();
    const sty = styles();


    return (

        <Grid container justify="center" className={sty.root} >

            <Grid item sm={4} justify="center" alignItems='center' container style={{ flexDirection: 'column' }}>
                <img src={require('../static/roomlelologo.webp')} height="45px" width='183px' alt="Roomlelo" />
                <Typography variant='body2' color='textSecondary' style={{ padding: '12px 0 0' }}>Connect with us on</Typography>
                <Link variant='body2' color='textSecondary' style={{ padding: 0 }} href={`tel:${contact_no}`}>Phone: {contact_no}</Link>
                <Link variant='body2' color='textSecondary' style={{ padding: '0' }} href='mailto:help@roomlelo.in'>Email: help@roomlelo.in</Link>
                <Grid>
                    <IconButton onClick={() => window.open('https://www.facebook.com/roomleloinvaranasi/', '_blank')}><FacebookIcon /></IconButton>
                    <IconButton onClick={() => window.open('https://api.whatsapp.com/send?phone=917667651878&fbclid=IwAR0ASfOooEnNvOFx0opGXp8vit72QfSz_tXE-lnCwp7uVqO_mX5sGd0Ja-w', '_blank')}><WhatsAppIcon /></IconButton>
                    <IconButton onClick={() => window.open('https://twitter.com/rooomlelo', '_blank')}><TwitterIcon /></IconButton>
                    <IconButton onClick={() => window.open('https://www.instagram.com/room_le_lo', '_blank')}><InstagramIcon /></IconButton>
                </Grid>
            </Grid>

            <Grid item sm={4} container className={sty.content} >
                <Typography variant="h6" color='textPrimary'>
                    About the Company
                </Typography>
                <Link color='textSecondary' variant='body2' to='/about' component={RouterLink}>About us</Link>
                <Link color='textSecondary' variant='body2' to='/privacypolicy' component={RouterLink}>Privacy Policy</Link>
                <Link color='textSecondary' variant='body2' to='/tenantterms' component={RouterLink}>Tenant Terms</Link>

                {/* <Typography variant='body2' color="textSecondary">
                Behind Our new looks
                </Typography>
            <Typography variant='body2' color="textSecondary">
                Work with us
                </Typography>
            <Typography variant='body2' color="textSecondary">
                Press
                </Typography> */}
            </Grid>
            <Grid item sm={4} container className={sty.content} >
                <Typography variant="h6" color='textPrimary'>
                    Partner with us
                </Typography>
                <Link color='textSecondary' variant='body2' to='/joinus' component={RouterLink}>For house Owner</Link>

                {/* <Typography variant='body2' color="textSecondary">
                For house Owner
                </Typography> */}
                {/* <Typography variant='body2' color="textSecondary">
                For large corporation
                </Typography> */}
            </Grid>
            {/* <Grid item sm={3} container className={sty.content} >
            <Typography variant="h6" color='textPrimary'>
                More Information
                </Typography>
            <Typography variant='body2' color="textSecondary">
                FAQ
                </Typography>
            <Typography variant='body2' color="textSecondary">
                House shifting service
                </Typography>

        </Grid> */}

        </Grid >
    );
}
