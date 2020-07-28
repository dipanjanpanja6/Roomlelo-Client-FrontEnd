import React from "react";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'

import PropType from 'prop-types'
import ImageSlider from "../ImageSlider";
const style = (theme) => ({
    room_box:{
        backgroundColor:'#fff',
        border:'1px solid #C678DD',
        borderRadius:'4px',
        boxSizing:'border-box',
        marginTop:theme.spacing(1.5),
        marginBottom:theme.spacing(0.8)

    },
    room_short_details:{
        alignItem:'center',
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        letterSpacing:'0.3px',
        textAlign:'center',
        color:'#000000',
        margin:'3%'
    },
    box_class:{
        height:'44px',
        width:'44px',
        backgroundColor:'#C4C4C4'
    },
    box_info_text_class:{
        fontSize:'13px',
        fontStyle:'normal',
        fontWeight:'bold',
        display: 'flex',
        letterSpacing:'0.005em',
        color:'#000',
        fontFamily:'Roboto'
    },
    box_item_buttons:{
        paddingLeft:'23px',
        paddingRight:'23px',
        paddingTop:'13px',
        paddingBottom:'13px',
        textTransform: 'capitalize',


    },

})
const RoomsComponents = (props) =>{
    const {room, classes} = props



    return(
        <Box className={classes.room_box} display='flex'>

                <div style={{height:'274px', width:'230px'}}>
                    <ImageSlider text={room.forWhom} images={room.photos} height={274} width={230}/>
                </div>
                <Grid style={{height:'274px'}}>
                    <Grid style={{height:'65%'}}>
                        <Grid container
                              direction="column"
                              justify="space-around"
                              alignItems="center">

                            <Typography variant="subtitle1" className={classes.room_short_details}>{room.type} in Full Furnished {room.propertyType} Starting at @Rs.{room.price}/-</Typography>

                            <Grid container alignItems="center" justify="space-around">
                                <div className={classes.box_class}></div>
                                <div className={classes.box_class}></div>
                                <div className={classes.box_class}></div>
                                <div className={classes.box_class}></div>
                            </Grid>
                            <Grid style={{marginTop:'3%'}} container alignItems="center" justify="space-around">
                                <Typography variant="body2" className={classes.box_info_text_class}>Apartments</Typography>
                                <Typography variant="body2" className={classes.box_info_text_class}>Private Rooms</Typography>
                                <Typography variant="body2" className={classes.box_info_text_class}>Full Funrished</Typography>
                                <Typography variant="body2" className={classes.box_info_text_class}>0% Brokerage</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{height:'35%'}} container direction="row" alignItems="center" justify="space-around">
                        <Button className={classes.box_item_buttons} style={{outlineWidth:'0px'}} variant="outlined">Book Now</Button>
                        <Button className={classes.box_item_buttons} style={{outlineWidth:'0px'}} variant="outlined">Schedule Our Visit</Button>
                        {/*<Grid container alignItems="center" justify="space-around" style={{marginBottom:'5%'}}>*/}
                        {/*    */}
                        {/*</Grid>*/}
                    </Grid>

                </Grid>

        </Box>
    )
};
RoomsComponents.PropType = {
    classes:PropType.object.isRequired
}
export default withStyles(style)(RoomsComponents)
