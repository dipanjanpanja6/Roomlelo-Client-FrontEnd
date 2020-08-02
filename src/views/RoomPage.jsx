import React,{useEffect} from "react";
import {connect} from 'react-redux'
import { Grid, Paper, makeStyles, useTheme, Typography, Divider, Card, Avatar, TextField, Button, Toolbar } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BedRoomCard from '../components/Rooms_Components/BedRoomCard'
import PropType from 'prop-types'
import GoogleMapReact from "google-map-react";
import { MAP_API_KEY } from '../config/config'
import Footer from "../components/footer";
import ImageSlider from '../components/ImageSlider'

import {getRoomDetails} from '../redux/actions/roomActions'
const style = makeStyles((theme) => ({
    tab: {
        padding: '7px 8px'
    },
    rootImage: {
         //height: 600,
        // background: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-houses-7-1538582168.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        [theme.breakpoints.down('xs')]:{
            height: 200,

        }
    },
    title: {
        padding: '12px 0'
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
    plan: {
        height: 332,
        width: 221,
        margin: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    planTitle: {
        textAlign: 'center',
    },
    planRoot: {
        paddingRight: 12,
        overflowX: 'scroll',
        flexWrap: 'nowrap',
        width: 'auto',
        '&::-webkit-scrollbar': {
            height: 0,
            backgroundColor: ' #F5F5F5'
        },
    },
    reviews: {
        flexDirection: 'column'
    },
    side_map_class: {
        padding: 12,
        width: '100%',
        height: 695,
        [theme.breakpoints.down('xs')]: {
            height: '60vh',
            // display: 'none'
        }
    },
    book: {
        padding: 34,

    },
    bookPaper: {
        flexDirection: 'column',
        display: 'flex',
        padding: 12,
        background: 'rgba(196, 196, 196, 0.3)'

    },
    bookPadding: {
        padding: 12
    }

}))
const RoomsComponents = (props) => {

    const sty = style()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const plan = [
        "Showing this house",
        "Booking confirmation",
        "Creating rental agreement with owner",
        "Post move-in services and maintenance at nominal prices",
        "Returning deposit at the time of move-out"
    ]
    const rate1 = [
        { key: "Cleanliness", star: 4.5 },
        { key: "Check-in", star: 4.5 },
        { key: "Accuracy", star: 4.5 }
    ]
    const rate2 = [
        { key: "Location", star: 4.5 },
        { key: "value", star: 4.5 },
        { key: "Service", star: 4.5 },
    ]

    useEffect(() =>{
        const id = props.match.params.id
        props.getRoomDetails(id)
    },[props.match.params.id])

    const Rating = rate1.map((p, i) => {
        return (
            <Grid key={i} container justify='center' alignItems="center" style={{ padding: 12 }}>
                <Avatar style={{ margin: 8 }}></Avatar>
                <Typography variant='body1'>
                    {p.key}
                </Typography>
                <div style={{ width: '30%', height: 12, background: '#0f0', borderRadius: 12, margin: '0 12px' }}></div>
                <Typography variant='body1'>
                    {p.star}
                </Typography>
            </Grid>
        )
    })
    const Rating1 = rate2.map((p, i) => {
        return (
            <Grid key={i} container justify='center' alignItems="center" style={{ padding: 12 }}>
                <Avatar style={{ margin: 8 }}></Avatar>
                <Typography variant='body1'>
                    {p.key}
                </Typography>
                <div style={{ width: '30%', height: 12, background: '#0f0', borderRadius: 12, margin: '0 12px' }}></div>
                <Typography variant='body1'>
                    {p.star}
                </Typography>
            </Grid>
        )
    })
    const mapData = {
        center: {
            lat: 22.5726,
            lng: 88.3639
        },
        zoom: 11
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    var handleApiLoaded = (map, maps) => {

    };
    return (
        <>
            <Toolbar />
            <Grid container>
                <Grid container className={sty.rootImage} >
                    {props.room.roomDetails != null && 
                    <ImageSlider images={props.room.roomDetails ? props.room.roomDetails.photos : ""} text={props.room.roomDetails.forWhom} height={600}/>}
                    
                    {/* <img src ='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-houses-7-1538582168.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=980:*'/> */}
                </Grid>

                <Grid container>
                    <Grid container item sm={8} style={{ flexDirection: 'column', paddingLeft: 12 }}>
                        <Grid container >

                            <Typography className={sty.tab} variant='subtitle1'>Over-View of the Property</Typography>
                            <Typography variant='subtitle1' className={sty.tab}>Amenities</Typography>
                            <Typography variant='subtitle1' className={sty.tab}>Your Room</Typography>
                            <Typography variant='subtitle1' className={sty.tab}>Your Neighborhood</Typography>
                        </Grid>
                        <Divider />
                        <Grid container>

                            <Typography variant='h4' className={sty.title}>Over-View of the Property</Typography>
                            <Grid container alignItems="center" >
                            {props.room.roomDetails ?  props.room.roomDetails.HouseFeatureArray ? 
                             props.room.roomDetails.HouseFeatureArray.map((data, index) => <div className={sty.box_grid}>
                                <div className={sty.box_class}></div>
                                    <Typography variant="caption">
                                        {data.key} - {data.value}
                                    </Typography>
                                </div>) : "" : "" }
                                {/*
                                <div className={sty.box_grid}>
                                    <div className={sty.box_class}></div>
                                    <Typography variant="caption">
                                        Family House
                                </Typography>
                                </div>
                                <div className={sty.box_grid}>
                                    <div className={sty.box_class}></div>
                                    <Typography variant="caption">
                                        Family House
                                </Typography>
                                </div>
                                <div className={sty.box_grid}>
                                    <div className={sty.box_class}></div>
                                    <Typography variant="caption">
                                        Family House
                                </Typography>
                                </div>
                                <div className={sty.box_grid}>
                                    <div className={sty.box_class}></div>
                                    <Typography variant="caption">
                                        Family House
                                </Typography>
                                </div>
                                */}
                                


                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container>

                            <Typography variant='h4' className={sty.title}>Amenities</Typography>

                            <Grid container alignItems="center" >
                                {props.room.roomDetails ? props.room.roomDetails.amenities ?
                                 props.room.roomDetails.amenities.map((data, index) => <div key={index} className={sty.box_grid}>
                                 <div className={sty.box_class}></div>
                                 <Typography variant="caption">
                                     {data}
                             </Typography>
                             </div>) : "" : ""}
                                {/*
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

                                */}
                                

                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container sm={4} className={sty.book}>

                        <Paper className={sty.bookPaper}>
                            <Typography variant='body2'>
                                {props.room.roomDetails ? props.room.roomDetails.type : "Private Rooms"} in Apartment
                             </Typography>
                            <Typography variant='body2'>
                                Starting at <b>Rs. {props.room.roomDetails ? props.room.roomDetails.price : "Loading..."} /- </b>Per Month
                            </Typography>
                            <Divider style={{ margin: '12px 0' }} />
                            <Typography variant='body1'>
                                <b>Schedule your Visit:</b>
                            </Typography>

                            <TextField className={sty.bookPadding}
                                fullWidth
                                margin='dense'
                                type="date"
                                variant='outlined'
                                placeholder="Choose your Prefered Date or Week-end"></TextField>

                            <div style={{ boxSizing: 'border-box', display: 'flex' }}>

                                <TextField className={sty.bookPadding} style={{ paddingRight: 6 }}
                                    margin='dense'
                                    variant='outlined'
                                    type='text'
                                    placeholder='Select your time of Visit'></TextField>
                                <TextField className={sty.bookPadding} style={{ paddingLeft: 6 }}
                                    margin='dense'
                                    variant='outlined'
                                    type="number"
                                    placeholder="Contact Number"></TextField>
                            </div>
                            <Button variant='outlined'>
                                Schedule your Visit
                    </Button>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <Button variant='outlined'>
                                Book Now
                    </Button>
                            <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: 99999999999</Typography>

                        </Paper>
                    </Grid>


                    <Grid container style={{ flexDirection: 'column', paddingLeft: 12, paddingRight: 12 }}>
                        <Divider />
                        <Grid container>
                            <Typography variant='h4' className={sty.title}>Room</Typography>
                            <Grid container alignItems="center" style={{ paddingRight: 12 }}>
                                <BedRoomCard />
                                <BedRoomCard />
                            </Grid>

                        </Grid>
                        <Divider />

                        <Grid container justify='center'>
                            <Typography variant='h4' className={sty.title}>What all in covered in our Plan?</Typography>

                            <Grid container xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>

                                <Grid container alignItems="center" className={sty.planRoot}>

                                    {plan.map((p, i) => {
                                        return <Grid item >
                                            <Card key={i} className={sty.plan}>
                                                <Typography variant='subtitle1' className={sty.planTitle}>
                                                    {p}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    })}

                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container justify='center' alignItems='center' className={sty.reviews}>
                            <Typography variant='h4' className={sty.title}>Cutomer Reviews</Typography>
                            <Typography variant='subtitle1' color='textSecondary' className={sty.title}>This Property has been reviewed by 2,500 Tenants and has been booked 10 times this month</Typography>
                        </Grid>

                        <Grid container justify='center' alignItems="center"  >

                            <Grid container item sm={6} justify='center' alignItems="center"  >

                                {Rating}



                            </Grid>
                            <Grid container item sm={6} justify='center' alignItems="center"  >

                                {Rating1}
                            </Grid>

                        </Grid>


                        <Grid container justify='center' alignItems='center' className={sty.reviews}>

                            <Typography variant='h4' className={sty.title}>Your Neighbourhood</Typography>
                            <Typography variant='subtitle1' color='textSecondary' className={sty.title}>This Property has been reviewed by 2,500 Tenants and has been booked 10 times this month</Typography>

                            <Grid container alignItems="center" className={sty.side_map_class} >
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: MAP_API_KEY }}
                                    defaultCenter={mapData.center}
                                    defaultZoom={mapData.zoom}
                                    yesIWantToUseGoogleMapApiInternals
                                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
};
RoomsComponents.PropType = {
    sty: PropType.object.isRequired,
    getRoomDetails:PropType.func.isRequired
}
const mapState = (state) => ({
    room: state.room
});
const mapActionsToProps = {
    getRoomDetails
};
export default connect(mapState, mapActionsToProps)(RoomsComponents)
