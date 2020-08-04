import React from "react";
import { Grid, makeStyles, Typography, Toolbar, TextField, Divider, Paper, Button } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import AppBarSpace from "../components/appBarSpace";

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
    }

}))
const RoomsComponents = (props) => {

    const sty = style()

    return (
        <>
            <Toolbar />
            <AppBarSpace />

            <Grid container style={{ padding: 20 }}>
                <Grid container sm={8} className={sty.book}>

                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        {/* <video width="80%" height="300" controls>
                            <source
                                src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                                type="application/x-mpegURL"/>
                        </video> */}
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IuX6k-Xf_Qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <Footer />
        </>
    )
};
RoomsComponents.PropType = {
                sty: PropType.object.isRequired
}
export default (RoomsComponents)
