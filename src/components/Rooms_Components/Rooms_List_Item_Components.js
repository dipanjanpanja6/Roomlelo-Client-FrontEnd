import React from "react"; 
import { Grid, Paper, makeStyles, useTheme } from '@material-ui/core' 
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PropType from 'prop-types'
import ImageSlider from "../ImageSlider";
const style = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#888',
        // border: '1px solid #C678DD',
        // borderRadius: '4px',
        // boxSizing: 'border-box',
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(0.8)

    },
    room_short_details: {
        // alignItem:'center',
        fontFamily: 'Poppins',
        // fontStyle:'normal',
        // fontWeight:'normal',
        // letterSpacing:'0.3px',
        textAlign: 'center',
        // color:'#000000',
        margin: '3%',
        [theme.breakpoints.down('xs')]: {
            fontSize:11
        }
    },
    box_class: {
        height: '44px',
        width: '44px',
        backgroundColor: '#C4C4C4',
        [theme.breakpoints.down('xs')]: {
            height: 22,
            width: 22, 
        }
    },
    box_info_text_class: {
        [theme.breakpoints.down('xs')]: {
            fontSize:11
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
    title:{
        // height:'75%'
    }

}))
const RoomsComponents = (props) => {
    const { room } = props
const classes=style()
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <Paper className={classes.root} elevation={3} style={{ display: 'flex', width: '100%',  }}>
            <Grid container className={classes.room_box}>

                <Grid container item xs={4}>
                    <ImageSlider text={room.forWhom} images={room.photos} />
                </Grid>
                <Grid container item xs={8}  className={classes.title}>

                    <Grid container
                        direction="column"
                        justify="space-around"
                        alignItems="center">

                        <Typography variant="subtitle1" className={classes.room_short_details}>{room.type} in Full Furnished {room.propertyType} <br />Starting at @Rs.{room.price}/-</Typography>

                        <Grid container alignItems="center" justify="space-around">
                            <div className={classes.box_class}></div>
                            <div className={classes.box_class}></div>
                            <div className={classes.box_class}></div>
                            <div className={classes.box_class}></div>
                        </Grid>
                        <Grid style={{ marginTop: '3%' }} container alignItems="center" justify="space-around">
                            <Typography variant='caption' className={classes.box_info_text_class}>Apartments</Typography>
                            <Typography variant="caption" className={classes.box_info_text_class}>Private Rooms</Typography>
                            <Typography variant="caption" className={classes.box_info_text_class}>Full Funrished</Typography>
                            <Typography variant="caption" className={classes.box_info_text_class}>0% Brokerage</Typography>
                        </Grid>
                    </Grid>

                    {!matches &&   <Grid item    container alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons} variant="outlined">Book Now</Button>
                        <Button className={classes.box_item_buttons} variant="outlined">Schedule Our Visit</Button>

                    </Grid>}
                </Grid>
                {matches && 
                 <Grid item  style={{padding :'12px 0'}} xs={12}  container alignItems="center" justify="space-around">
                 <Button className={classes.box_item_buttons} variant="outlined">Book Now</Button>
                 <Button className={classes.box_item_buttons} variant="outlined">Schedule Our Visit</Button>

             </Grid>
                }
            </Grid>
        </Paper>
    )
};
RoomsComponents.PropType = {
    classes: PropType.object.isRequired
}
export default (RoomsComponents)
