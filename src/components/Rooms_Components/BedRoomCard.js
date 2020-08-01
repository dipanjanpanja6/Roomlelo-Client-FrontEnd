import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding:12,
        margin:12,
        minHeight:251,

        display: 'flex',
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '0.5 0 auto',
    },
    cover: {
        width: '27%',
        [theme.breakpoints.down('xs')]:{
            width: '100%',
            height:150
        },
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    box_grid: {
        padding: 12, textAlign: 'center'
    },
    box_class: {
        height: '44px',
        margin: '0 20px 15px',
        width: '44px',
        backgroundColor: '#C4C4C4',
        [theme.breakpoints.down('xs')]: {
            height: 22,
            width: 22,
        }
    },
    price:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingRight:12
    },
    button:{
        margin:10
    }
}));

export default function MediaControlCard() {
    const sty = useStyles();
    // const theme = useTheme();

    return (
        <Card className={sty.root}>
            <CardMedia
                className={sty.cover}
                image="https://material-ui.com/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />

            <div className={sty.details}>
                <CardContent className={sty.content}>
                    <Typography component="h5" variant="h5">
                        Bed Room 1
                    </Typography>
                    
                </CardContent>
                <div className={sty.controls}>

                    <Grid container alignItems="center" >
                        <div className={sty.box_grid}>
                            <div className={sty.box_class}></div>
                            <Typography variant="caption">
                                Oven
                                </Typography>
                        </div>
                        <div className={sty.box_grid}>
                            <div className={sty.box_class}></div>
                            <Typography variant="caption">
                                AC
                                </Typography>
                        </div>
                        <div className={sty.box_grid}>
                            <div className={sty.box_class}></div>
                            <Typography variant="caption">
                                TV
                                </Typography>
                        </div>
                        <div className={sty.box_grid}>
                            <div className={sty.box_class}></div>
                            <Typography variant="caption">
                                Sofa
                                </Typography>
                        </div>
                        <div className={sty.box_grid}>
                            <div className={sty.box_class}></div>
                            <Typography variant="caption">
                                Dining Table
                                </Typography>
                        </div>


                    </Grid>

                </div>
            </div>
            <div style={{flexGrow:1}}></div>

            <div className={clsx(sty.price,sty.details)} >
                <Typography variant='body1'>Starting at <b>Rs. 17,500 /- </b>Per Month</Typography>
                    <Button className={sty.button} variant='outlined'>Book Now</Button>
            </div>

        </Card>
    );
}
