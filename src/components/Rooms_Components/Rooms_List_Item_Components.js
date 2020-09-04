import React, { useState } from "react";
import { Grid, Paper, makeStyles, useTheme, SvgIcon } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PropType from 'prop-types'
import ImageSlider from "../ImageSlider";
import { useHistory } from "react-router-dom";
import ResponsiveDialog from "../bottom nevigation/dialog";
import BookScheduleCard from "../Book & Schedule/Book & Schedule Card";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const style = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#888',
        // border: '1px solid #C678DD',
        // borderRadius: '4px',
        // boxSizing: 'border-box',
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(0.8),
        display: 'flex', width: '100%',


    },
    room_short_details: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
    },
    box_class: {
        height: 35,
        width: 35,
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // backgroundColor: '#C4C4C4',
        [theme.breakpoints.down('xs')]: {
            height: 25,
            width: 25,
        }
    },
    box_info_text_class: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
    },
    box_item_buttons: {
    },
    title: {
    },
    icon: {
        textAlign: 'center',
        textAlign: "-webkit-center"
    }

}))

const RoomsComponents = (props) => {
    const { room } = props
    const classes = style()
    const theme = useTheme();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const [dialog, setDialog] = useState(false)
    const roomPageButton = () => {
        setDialog(!dialog)
    }
    const roomPage = () => {

        history.push(`/rooms/${room.id}`)
    }
    // console.log(room);
    return (
        <Paper className={classes.root} elevation={3} >
            <Grid container className={classes.room_box}>

                <Grid container item xs={4}>
                    <ImageSlider text={room.forWhom == "" ? "For anyone" : `Only for ${room.forWhom}`} images={room.photos ? room.photos : []} />
                </Grid>
                <Grid container item xs={8} className={classes.title}>

                    <Grid onClick={roomPage} container
                        direction="column"
                        justify="space-around"
                        style={{ cursor: 'pointer' }}
                    // alignItems="center"
                    >
                        <div style={{ paddingLeft: 12 }}>
                            <Typography variant='h6' style={{ fontFamily: 'roboto' }}>{<b>₹{room.price}/-</b>}</Typography>
                            <Typography variant="subtitle2" className={classes.room_short_details}><SvgIcon style={{color:'#b00'}}><LocationOnIcon/></SvgIcon>{room.furnished}{" "}{room.type == "Entire House" ? room.totalBhk?room.totalBhk+'BHK':'' : room.type}{" "}{'for Rent near'} {room.propertyAddress}</Typography>
                            <Typography variant="caption" color='textSecondary' style={{ fontFamily: 'roboto' }} className={classes.room_short_details}><SvgIcon style={{color:'#0a0'}}><BeenhereIcon/></SvgIcon>{'Deposit ₹'+room.securityDeposit }</Typography>
                        </div>

                        <Grid container style={{ flexWrap: 'nowrap' }} alignItems="center" justify="space-around" >
                            <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/024-accident.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>{room.type}</Typography>
                            </Grid>
                            <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/card/Fully_Furnished.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>{room.furnished}</Typography>
                            </Grid>
                            <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/card/Apartment.svg',)})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>Security Deposit</Typography>
                            </Grid>
                            {/* <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/023-hands-up.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>Instant Deposit Return </Typography>
                            </Grid> */}

                        </Grid>
                    </Grid>

                    {!matches && <Grid item container alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons} onClick={roomPageButton} variant='contained' color='primary'> <SvgIcon><ShoppingBasketIcon/></SvgIcon>{` Book Now`}</Button>
                        <Button className={classes.box_item_buttons} onClick={roomPageButton} variant="contained" color='secondary'><SvgIcon><ScheduleIcon/></SvgIcon>{" Schedule Visit"}</Button>

                    </Grid>}
                </Grid>
                {matches &&
                    <Grid item style={{ padding: '12px 0' }} xs={12} container alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons} onClick={roomPageButton} variant="contained" color='primary'><SvgIcon><ShoppingBasketIcon/></SvgIcon>{` Book Now`}</Button>
                        <Button className={classes.box_item_buttons} onClick={roomPageButton} variant="contained" color='secondary'><SvgIcon><ScheduleIcon/></SvgIcon>{' Schedule Visit'}</Button>

                    </Grid>
                }
                <ResponsiveDialog open={dialog} handleClose={roomPageButton}>
                    <BookScheduleCard id={room.id} roomData={room} />
                </ResponsiveDialog>
            </Grid>
        </Paper>
    )
};


RoomsComponents.PropType = {
    classes: PropType.object.isRequired,
    room: PropType.object.isRequired
}


export default RoomsComponents
