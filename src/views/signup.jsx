import React from "react";
import { Grid, makeStyles, Typography, Toolbar, TextField, Divider, Paper, Button, Avatar } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import AppBarSpace from "../components/appBarSpace";
import Growth from "../components/ourGroth";
import Benefit from "../components/benefit";

const style = makeStyles((theme) => ({
    book: {
        padding: 34,
        // backgroundColor: 'rgba(196, 196, 196, 0.19)',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    topic: {
        padding: 12,
        textAlign: 'center'
    },
    subTitle: {
        paddingTop: 20
    },
    bookPaper: {
        flexDirection: 'column',
        display: 'flex',
        padding: 12,
        background: 'rgba(196, 196, 196, 0.2)'
    },
    bookPadding: {
        padding: 0,
        background: '#fff'
    },
    dashImg: {
        backgroundImage: `url(${require('../static/TenantDashboard.png')})`,
        height: 419,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        // backgroundSize:'cover'

    }

}))
const RoomsComponents = (props) => {

    const sty = style()
    var six = Array.apply(null, { length: 1 }).map((e, i) => (
        <>
            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Track daily earnings.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Regularly monitor tenant requests.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Sent payment reminders.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Advanced notifications of lease completion.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Scan the vacancy of properties.</b>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Keep a check on payment records of tenants.</b>
                    </Typography>
                </Grid>
            </Grid>

        </>
    ));
    return (
        <>
            <Toolbar />
            <AppBarSpace />
<Grid>
            <Grid container style={{ padding: 20 }}>
                <Grid container sm={8} className={sty.book}>

                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        {/* <video width="80%" height="300" controls>
                            <source
                                src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                                type="application/x-mpegURL"/>
                        </video> */}
                        <iframe title='video' width="560" height="315" src="https://www.youtube-nocookie.com/embed/IuX6k-Xf_Qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                </Grid>

                <Grid container item sm={4} style={{ flexDirection: 'column', padding: 40 }}>
                    <Paper className={sty.bookPaper}>

                        <Typography variant='body1'>
                            <b>Partner with Roomlelo and Earn Money </b>
                        </Typography>
                        <Divider style={{ margin: '12px 0' }} />


                        <TextField className={sty.bookPadding}
                            fullWidth
                            margin='dense'
                            type="text"
                            variant='outlined'
                            placeholder="Enter Your First and Last Name" />


                        <TextField className={sty.bookPadding}
                            margin='dense'
                            variant='outlined'
                            type="number"
                            placeholder="Contact Number" />
                        <TextField className={sty.bookPadding}
                            margin='dense'
                            variant='outlined'
                            type="email"
                            placeholder=" Email address" />
                        <Divider style={{ margin: '12px 0' }} />

                        <Button variant='contained' color='primary'>
                            Request a Call back for Assistance
                            </Button>

                        {/* <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: 99999999999</Typography> */}
                    </Paper>

                </Grid>
            </Grid>
            <Divider />
            <Growth />
            <Benefit />
            <Grid container justify="center" alignItems="center" className={sty.offer}>
                <Typography
                    variant="h4"
                    style={{
                        paddingTop: 44,
                        paddingBottom: 44,
                        textAlign: 'center',
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Roomlelo properties Dashboard
          </Typography>

                <Grid container alignItems="center">
                    <Grid item sm={5} style={{ paddingLeft: '10%' }}>
                        {six}
                    </Grid>
                    <Grid item sm={7}>
                        <div className={sty.dashImg}></div>
                    </Grid>
                </Grid>
            </Grid>



            <Grid container justify="center" alignItems="center" className={sty.offer}>
                <Typography
                    variant="h4" style={{
                        paddingTop: 15, paddingBottom: 20, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Testimonials
          </Typography>
                <Typography
                    variant='body1' style={{
                        paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Know why our Clients, believe and love us
          </Typography>

                <Grid container alignItems="center" justify='center'>
                    <Grid item sm={5} style={{ padding: '20px 0px' }}>
                        <Grid container item alignItems="center" justify='center' style={{ background: 'aliceblue', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className={sty.growth2}>
                            <Typography variant='h4' style={{ paddingBottom: 12, textAlign: 'center' }}>“Know why our Customer love us”</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid >

            </Grid>
            </Grid>

            <Footer />
        </>
    )
};
RoomsComponents.PropType = {
    sty: PropType.object.isRequired
}
export default (RoomsComponents)
