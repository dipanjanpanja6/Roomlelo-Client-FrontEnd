import React from "react";
import PropType from 'prop-types'
//MUi
import Box from '@material-ui/core/Box'
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";

import ImageSlider from "../ImageSlider";
const style = (theme) =>({
    room_item:{
        backgroundColor:'#fff'
    },
    room_short_detail:{
        fontFamily:'Poppins',
        maxWidth:'60%'
        // fontStyle:'normal',
        // fontWeight:'normal',
        //
        // lineHeight:'19px',
        // wordWrap:'break-word'
    }
});

const RoomsListItemComponents = (props) =>{
    const {room, classes} = props

    return(
        <div>
            <Box display="flex" flexWrap="wrap" className={classes.room_item}>


                    <ImageSlider images={room.photos} height={274} width={230}/>



                        <Grid container direction="column">
                            <Typography variant="subtitle1" className={classes.room_short_detail}>{room.type} in Full Furnished {room.propertyType} Starting at @Rs.{room.price}/-</Typography>
                        </Grid>




                {/*<img src={room.photos[0]} height={274} width={230}/>*/}
            </Box>
        </div>
    )
};
RoomsListItemComponents.PropType = {
    classes:PropType.object.isRequired
}
export default withStyles(style)(RoomsListItemComponents)
