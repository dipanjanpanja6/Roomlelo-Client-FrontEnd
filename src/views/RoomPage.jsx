import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { Grid, Paper, makeStyles, useTheme, Typography, Divider, Card, Avatar, TextField, Button, Toolbar, CardMedia, CircularProgress, InputAdornment, ButtonGroup, useMediaQuery } from '@material-ui/core'
import BedRoomCard from '../components/Rooms_Components/BedRoomCard'
import PropTypes from 'prop-types'
import { MAP_API_KEY } from '../config/config'
import Footer from "../components/footer";
import ImageSlider from '../components/ImageSlider'
// import TimeInput from 'material-ui-time-picker'
import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';
import { getRoomDetails } from '../redux/actions/roomActions';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import BookScheduleCard from "../components/Book & Schedule/Book & Schedule Card";
import Loading from '../components/loading';
import ResponsiveDialog from "../components/bottom nevigation/dialog";

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
        [theme.breakpoints.down('xs')]: {
            height: 400,
        }
    },
    title: {
        padding: '12px 0'
    },
    box_grid: {
        padding: 12, textAlign: 'center', textAlign: '-webkit-center'
    },
    box_class: {
        height: '44px',
        margin: '0 20px 15px',
        width: '44px',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
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
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 50,
        },
    },
    ratingPadding: {
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    rating: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },
    side_map_class: {
        padding: 12,
        width: '100%',
        height: '80vh',
        [theme.breakpoints.down('xs')]: {
            height: '65vh',
        }
    },
    book: {
        padding: 34,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    menu: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    imageSlider: {
        width: '100%',
        height: 600,
        [theme.breakpoints.down('xs')]: {
            height: 400
        }
    },
    bottomNav: {
        display: 'none',
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: theme.zIndex.drawer,
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            height: 50
        }
    },
    footer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

const RoomsComponents = (props) => {
    useEffect(() => {

        window.scrollTo(0, 0)
        document.title = 'Find Your best Flats, house, rooms | RoomLelo - Flats, house, rooms for rent without brokerage.'

    }, [])

    useEffect(() => {
        document.title = `${props.room.roomDetails ?
            props.room.roomDetails.propertyAddress ? ` ${props.room.roomDetails.type} at ${props.room.roomDetails.propertyAddress} | ` : "" : ""} RoomLelo - Flats, house, rooms for rent without brokerage.`
    }, [props.room.roomDetails])

    const [dialog, setDialog] = useState(false)
    const sty = style();
    const BookCardRef = useRef()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const plan = [
        "Showing this house",
        "Booking confirmation",
        "Creating rental agreement with owner",
        "Post move-in services and maintenance at nominal prices",
        "Returning deposit at the time of move-out"
    ]
    const rate1 = [
        { key: "Cleanliness", star: 4.5, img: require('../static/icons/rating/clean.svg') },
        { key: "Check-in", star: 4.5, img: require('../static/icons/rating/chackin.svg') },
        { key: "Accuracy", star: 4.5, img: require('../static/icons/rating/accurecy.svg') },
    ]
    const rate2 = [
        { key: "Location", star: 4.5, img: require('../static/icons/rating/location.svg') },
        { key: "value", star: 4.5, img: require('../static/icons/rating/value.svg') },
        { key: "Service", star: 4.5, img: require('../static/icons/rating/services.svg') },
    ];

    useEffect(() => {
        const id = props.match.params.id
        props.getRoomDetails(id);
    }, [props.match.params.id])

    const rating = rate1.map((p, i) => {
        return (
            <Grid key={i} container alignItems="center" justify='space-evenly' className={sty.rating} style={{ padding: 12 }}>
                <Grid container alignItems='center' style={{ width: 'auto' }}>
                    <Avatar variant='rounded' src={p.img} style={{ margin: 8 }}></Avatar>
                    <Typography variant='body1'>
                        {p.key}
                    </Typography>
                </Grid>
                <Grid container alignItems='center' style={{ width: 'auto' }}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    {/* <div style={{ width: '30%', height: 12, background: '#0f0', borderRadius: 12, margin: '0 12px' }}></div> */}
                    <Typography variant='body1'>
                        {p.star}
                    </Typography>
                </Grid>
            </Grid>
        )
    })
    const rating1 = rate2.map((p, i) => {
        return (
            <Grid key={i} container alignItems="center" justify='space-evenly' className={sty.rating} style={{ padding: 12 }}>
                <Grid container alignItems='center' style={{ width: 'auto' }}>
                    <Avatar variant='rounded' src={p.img} style={{ margin: 8 }}></Avatar>
                    <Typography variant='body1'>
                        {p.key}
                    </Typography>
                </Grid>
                <Grid container alignItems='center' style={{ width: 'auto' }}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    {/* <div style={{ width: '30%', height: 12, background: '#0f0', borderRadius: 12, margin: '0 12px' }}></div> */}
                    <Typography variant='body1'>
                        {p.star}
                    </Typography>
                </Grid>
            </Grid>
        )
    })
    const BookNowMobile = () => {
        setDialog(!dialog)
    }
    const handelScroll = () => {
        if (matches) {
            BookNowMobile()
        } else {
            BookCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
    var othersCharge = props.room.roomDetails ? props.room.roomDetails.OtherChargesArray ? props.room.roomDetails.OtherChargesArray.map(function (p, index) {
        return <Grid key={index} container justify='space-evenly' style={{ padding: '12px 0' }}>
            <Grid item xs={6}>
                <Typography>{p.key}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography color='textSecondary'>{p.value ? p.value == 0 ? "Excludes With Rent" : `₹ ${p.value}` : "Excludes With Rent"}</Typography>
            </Grid>
        </Grid >
    }) : "" : ""
    var rentDetails = props.room.roomDetails ? props.room.roomDetails.rentDetailsArray ? props.room.roomDetails.rentDetailsArray.map(function (p, index) {
        return <Grid key={index} container justify='space-evenly' style={{ padding: '12px 0' }}>
            <Grid item xs={6}>
                <Typography>{p.key}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography color='textSecondary'>₹ {p.value}</Typography>
            </Grid>
        </Grid >
    }) : "" : ""
    var roomType = props.room.roomDetails ? props.room.roomDetails.type ? props.room.roomDetails.type == 'Private Rooms' ? "Rooms" : props.room.roomDetails.type == 'Shared Rooms' ? "Beds" : "" : "" : ""
    var RoomCard = Array.apply(null, { length: props.room.roomDetails ? props.room.roomDetails.available_rooms : 0 }).map((e, i) => (
        <Grid item key={i}>
            <BedRoomCard onBook={handelScroll} price={props.room.roomDetails ? props.room.roomDetails.price : ''} name={`${roomType} Number ${i + 1}`} />
        </Grid>
    ))

    var lat = props.room.roomDetails ? props.room.roomDetails.lat : ''
    var lan = props.room.roomDetails ? props.room.roomDetails.lng : ''

    console.log(lat, lan);


    return (
        <>
            <Toolbar />
            {!props.room.roomDetails ?
                <Loading />
                :
                <Grid container >
                    <Grid container className={sty.rootImage} >
                        {/* {props.room.roomDetails != null ? */}
                        <ImageSlider images={props.room.roomDetails ? props.room.roomDetails.photos : ""} text={props.room.roomDetails.forWhom} height={600} MHeight={400} />
                        {/* :
                        <Grid container justify="center" alignItems="center" className={sty.imageSlider} >
                            <CircularProgress />
                         </Grid>} */}
                    </Grid>

                    <Grid container style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Grid container item md={8} style={{ flexDirection: 'column', paddingLeft: 12 }}>
                            <Grid container className={sty.menu}>

                                <Typography className={sty.tab} variant='subtitle1'>Over-View of the Property</Typography>
                                <Typography variant='subtitle1' className={sty.tab}>Amenities</Typography>
                                <Typography variant='subtitle1' className={sty.tab}>Your Room</Typography>
                                <Typography variant='subtitle1' className={sty.tab}>Your Neighborhood</Typography>
                            </Grid>
                            <Divider />
                            <Grid>

                                <Typography variant='h4' className={sty.title}>{props.room.roomDetails ? props.room.roomDetails.name ? props.room.roomDetails.name : <Skeleton /> : <Skeleton />}</Typography>
                                <Typography variant='h6' >{props.room.roomDetails ? props.room.roomDetails.type ? props.room.roomDetails.type : <Skeleton /> : <Skeleton />}</Typography>
                                <Typography variant='subtitle1' >{props.room.roomDetails ? props.room.roomDetails.furnished ? props.room.roomDetails.furnished : <Skeleton /> : <Skeleton />}</Typography>
                                <Typography variant='body2' color='textSecondary'>{props.room.roomDetails ? props.room.roomDetails.propertyAddress ? `at ${props.room.roomDetails.propertyAddress}` : "" : <Skeleton />}</Typography>

                                <Typography variant='body1' color='textSecondary' className={sty.title}>{props.room.roomDetails ? props.room.roomDetails.forWhom ? props.room.roomDetails.forWhom == "Any" ? "Available for anyone" : `Only for ${props.room.roomDetails.forWhom}` : <Skeleton /> : <Skeleton />} | {props.room.roomDetails ?
                                    props.room.roomDetails.available_rooms ? `${props.room.roomDetails.available_rooms} ${roomType} available only. Hurry Up!` : <Skeleton /> : <Skeleton />}</Typography>

                                <Typography variant='body1'>{props.room.roomDetails ? props.room.roomDetails.description ? props.room.roomDetails.description : <Skeleton /> : <Skeleton />}</Typography>


                            </Grid>
                            <Divider />
                            <Grid container>

                                <Typography variant='h4' className={sty.title}>House Features</Typography>
                                <Grid container alignItems="center" >
                                    {props.room.roomDetails ? props.room.roomDetails.HouseFeature ?
                                        props.room.roomDetails.HouseFeature.map((data, index) => <div key={index} className={sty.box_grid}>
                                            <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/prize.svg`)})` }}></div>
                                            <Typography variant="caption">
                                                {data}
                                            </Typography>
                                        </div>) : "" : ""}
                                </Grid>
                            </Grid>

                        </Grid>
                      {!matches &&  <Grid item container ref={BookCardRef} md={4} className={sty.book} justify='center' alignItems='baseline'>

                            <BookScheduleCard id={props.match.params.id} roomData={props.room.roomDetails}/>

                        </Grid>}

                        <Divider />

                        <Grid container style={{ flexDirection: 'column', paddingLeft: 12, paddingRight: 12 }}>
                            <Grid container>
                                <Typography variant='h4' className={sty.title}>Near By</Typography>
                                <Grid container alignItems="center" >
                                    {props.room.roomDetails ? props.room.roomDetails.Nearby ?
                                        Object.keys(props.room.roomDetails.Nearby).map(key => <div key={key} className={sty.box_grid}>
                                            <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/nearby/${key.replace(/ /g, "-")}.svg`)})` }}></div>
                                            <Typography variant="caption">
                                                {props.room.roomDetails.Nearby[key]}{' '}{key}
                                            </Typography>
                                        </div>) : "" : ""}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Typography variant='h4' className={sty.title}>Amenities</Typography>
                                <Grid container alignItems="center" >
                                    {props.room.roomDetails ? props.room.roomDetails.amenities ?
                                        props.room.roomDetails.amenities.map((data, index) => <div key={index} className={sty.box_grid}>
                                            <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/Amenites/${data.replace(/ /g, "-")}.svg`)})` }}></div>
                                            <Typography variant="caption">
                                                {data}
                                            </Typography>
                                        </div>) : "" : ""}
                                </Grid>
                            </Grid>

                            <Divider />
                            {roomType && <><Grid container>
                                <Typography variant='h4' className={sty.title}>Rent Details</Typography>
                                <Grid container item xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>
                                    <Grid container alignItems="center" className={sty.planRoot}>
                                        {RoomCard}

                                    </Grid>
                                </Grid>

                            </Grid>
                                <Divider /></>
                            }



                            {rentDetails}
                            {othersCharge}

                            <Divider />

                            <Grid container justify='center'>
                                <Typography variant='h4' className={sty.title}>What all in covered in our Plan?</Typography>
                                <Grid container item xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>
                                    <Grid container alignItems="center" className={sty.planRoot}>

                                        {plan.map((p, i) => {
                                            return <Grid item key={p}>
                                                <Card key={i} className={sty.plan}>
                                                    <CardMedia style={{ height: '100%', width: "100%", display: 'flex', alignItems: 'center' }} image="https://source.unsplash.com/random/?house">

                                                        <Typography variant='subtitle1' className={sty.planTitle}>
                                                            {p}
                                                        </Typography>
                                                    </CardMedia>
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
                                <Grid container item sm={6} alignItems="center" className={sty.ratingPadding} >
                                    {rating}
                                </Grid>
                                <Grid container item sm={6} alignItems="center" className={sty.ratingPadding} >
                                    {rating1}
                                </Grid>
                            </Grid>


                            <Grid container justify='center' alignItems='center' className={sty.reviews}>

                                <Typography variant='h4' className={sty.title}>Your Neighbourhood</Typography>
                                <Typography variant='subtitle1' color='textSecondary' className={sty.title}>This Property has been reviewed by 2,500 Tenants and has been booked 10 times this month</Typography>

                                <Grid container alignItems="center" className={sty.side_map_class} >
                                    <Map google={props.google} containerStyle={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%'
                                    }} zoom={17}
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        initialCenter={{
                                            lat: lat,
                                            lng: lan
                                        }}
                                        center={{
                                            lat: lat,
                                            lng: lan
                                        }}
                                    >
                                        <Marker
                                            name={'Dolores park'}
                                            zoom={15}
                                            position={{ lat: lat, lng: lan }} />

                                    </Map>
                                </Grid>
                            </Grid>



                        </Grid>
                    </Grid>
                    {matches && <ResponsiveDialog open={dialog}>
                        <BookScheduleCard id={props.match.params.id} roomData={props.room.roomDetails} />
                    </ResponsiveDialog>}
                </Grid>
            }

            <Grid container className={sty.bottomNav}>
                <ButtonGroup disableElevation variant="contained" size='large' fullWidth color="primary">
                    <Button onClick={BookNowMobile}>Book Now</Button>
                    <Button onClick={BookNowMobile} color='secondary'>Schedule your Visit</Button>
                </ButtonGroup>
            </Grid>
            <div className={sty.footer}>
            {props.room.roomDetails &&   <Footer />}
            </div>
        </>
    )
};
RoomsComponents.PropType = {
    getRoomDetails: PropTypes.func.isRequired,
    room:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
}
const mapState = (state) => ({
    room: state.room,
    user: state.user
});
const mapActionsToProps = {
    getRoomDetails,
};
export default connect(mapState, mapActionsToProps)((GoogleApiWrapper({ apiKey: (MAP_API_KEY) })(RoomsComponents)))
