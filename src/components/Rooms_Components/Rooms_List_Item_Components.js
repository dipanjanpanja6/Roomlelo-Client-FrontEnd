import React from "react";
import { Grid, Paper, makeStyles, useTheme } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PropType from 'prop-types'
import ImageSlider from "../ImageSlider";
import { useHistory } from "react-router-dom";

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
        // alignItem:'center',
        fontFamily: 'Poppins',
        // fontStyle:'normal',
        // fontWeight:'normal',
        // letterSpacing:'0.3px',
        // textAlign: 'center',
        // color:'#000000',
        // margin: '3%',
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
    },
    box_class: {
        height: '44px',
        width: '44px',
        backgroundRepeat:' no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // backgroundColor: '#C4C4C4',
        [theme.breakpoints.down('xs')]: {
            height: 29,
            width: 29,
        }
    },
    box_info_text_class: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
        // fontSize:'13px',
        // fontStyle:'normal',
        // fontWeight:'bold',
        // display: 'flex',
        // letterSpacing:'0.005em',
        // color:'#000',
        // fontFamily:'Roboto'
    },
    box_item_buttons: {
        // paddingLeft: '23px',
        // paddingRight: '23px',
        // paddingTop: '13px',
        // paddingBottom: '13px',
        // textTransform: 'capitalize',


    },
    title: {
        // height:'75%'
    },
    icon:{
        textAlign:'center',
        textAlign:"-webkit-center"
    }

}))

const RoomsComponents = (props) => {
    const { room } = props
    const classes = style()
    const theme = useTheme();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const roomPage = () => {

        history.push(`/rooms/${room.id}`)
    }
// console.log(room);
    return (
        <Paper className={classes.root} elevation={3} >
            <Grid container className={classes.room_box}>

                <Grid container item xs={4}>
                    <ImageSlider text={room.forWhom} images={room.photos?room.photos:[]} />
                </Grid>
                <Grid container item xs={8} className={classes.title}>

                    <Grid onClick={roomPage} container
                        direction="column"
                        justify="space-around"
                        style={{ cursor: 'pointer' }}
                    // alignItems="center"
                    >
                        <div style={{ paddingLeft: 12 }}>
                            <Typography variant="subtitle1" className={classes.room_short_details}>{<b>₹{room.price}/-</b>}</Typography>
    <Typography variant="subtitle1" className={classes.room_short_details}>{room.type}{" "}{room.available && 'available'}</Typography>
                            <Typography variant="caption" color='textSecondary' className={classes.room_short_details}>in {room.propertyAddress}</Typography>
                        </div>

                        <Grid container style={{flexWrap:'nowrap'}} alignItems="center" justify="space-around" >
                            <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/024-accident.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>{room.type}</Typography>
                            </Grid>
                            <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/card/Fully_Furnished.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>{room.furnished}</Typography>
                            </Grid>
                            <Grid className={classes.icon}> 
                                <div style={{ backgroundImage: `url(${require('../../static/icons/card/Apartment.svg', )})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>Security Deposit</Typography>
                            </Grid>
                            {/* <Grid className={classes.icon}>
                                <div style={{ backgroundImage: `url(${require('../../static/icons/023-hands-up.svg')})` }} className={classes.box_class}></div>
                                <Typography variant="caption" className={classes.box_info_text_class}>Instant Deposit Return </Typography>
                            </Grid> */}

                        </Grid>
                    </Grid>

                    {!matches && <Grid item container alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons}  onClick={roomPage} variant='contained' color='primary'>Book Now</Button>
                        <Button className={classes.box_item_buttons}  onClick={roomPage} variant="contained" color='secondary'>Schedule Our Visit</Button>

                    </Grid>}
                </Grid>
                {matches &&
                    <Grid item style={{ padding: '12px 0' }} xs={12} container alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons}  onClick={roomPage} variant="contained" color='primary'>Book Now</Button>
                        <Button className={classes.box_item_buttons}  onClick={roomPage} variant="contained" color='secondary'>Schedule Our Visit</Button>

                    </Grid>
                }
            </Grid>
        </Paper>
    )
};


RoomsComponents.PropType = {
    classes: PropType.object.isRequired
}


export default RoomsComponents
