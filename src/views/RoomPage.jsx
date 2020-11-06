import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { Grid, Paper, makeStyles, useTheme, Typography, Divider, Avatar, Button, Toolbar, ButtonGroup, useMediaQuery, SvgIcon } from '@material-ui/core'
import BedRoomCard from '../components/Rooms_Components/BedRoomCard'
import PropTypes from 'prop-types'
import { MAP_API_KEY, url } from '../config/config'
import Footer from "../components/footer";
// import TimeInput from 'material-ui-time-picker'
import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton'; import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import BookScheduleCard from "../components/Book & Schedule/Book & Schedule Card";
import Loading from '../components/loading';
import ResponsiveDialog from "../components/bottom nevigation/dialog";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import ScrollDialog from "../components/dialogComponent/Scrollbody";
import MoneyIcon from '@material-ui/icons/Money';
import SecurityIcon from '@material-ui/icons/Security';
import MainSlider from "../components/Slider/Mainslider";


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
        padding: '12px 0',

    },
    box_grid: {
        padding: 8, textAlign: 'center', textAlign: '-webkit-center'
    },
    box_class: {
        height: '30px',
        // margin: '0 20px',
        width: '30px',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        [theme.breakpoints.down('xs')]: {
            height: 25,
            width: 25,
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
        color: '#fff',
        padding: 12,
        textAlign: 'center',
        fontWeight: 'bold',

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
        paddingBottom: 12,
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
        width: '100%',
        // display:'flex',
        // flexWrap:'warp',
        padding: 12,
        [theme.breakpoints.down('sm')]: {
            // display: 'none'
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
            minHeight: 50
        }
    },
    footer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

const RoomsComponents = (props) => {
    const history = useHistory()
    const [RoomDetaisData, setRoomDetaisData] = useState(null)
    useEffect(() => {

        window.scrollTo(0, 0)
        document.title = 'Find Your best Flats, house, rooms | RoomLelo - Flats, house, rooms for rent without brokerage.'

    }, [])

    useEffect(() => {
        document.title = `${RoomDetaisData ?
            RoomDetaisData.propertyAddress ? ` ${RoomDetaisData.type} at ${RoomDetaisData.propertyAddress} | ` : "" : ""} RoomLelo - Flats, house, rooms for rent without brokerage.`
    }, [RoomDetaisData])

    const [dialog, setDialog] = useState(false)
    const [truncate, setTruncate] = useState(true)
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
        fetch(`${url}/room/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            response.json().then((data) => {
                if (data.success) {
                    setRoomDetaisData(data.data)
                    // dispatch({ type: SET_ROOM_DETAILS, payload: data.data })
                } else {
                    toast.error(data.message)
                    history.push('/roomNotFound')
                }
            })
        }).catch((error) => {
            console.log(error)
        })
    }, [props.match.params.id])

    const rating = rate1.map((p, i) => {
        return (
            <Grid key={i} container alignItems="center" justify='space-evenly' className={sty.rating} style={{ padding: 12, flexWrap: 'nowrap' }}>
                <Grid container alignItems='center' style={{ width: 'auto', flexWrap: 'nowrap' }}>
                    <Avatar variant='rounded' src={p.img} style={{ margin: 8 }}></Avatar>
                    <Typography variant='body2'>
                        {p.key}
                    </Typography>
                </Grid>
                <Grid container alignItems='center' style={{ width: 'auto', flexWrap: 'nowrap' }}>
                    <Rating name="half-rating-read" defaultValue={p.star} precision={0.5} readOnly />
                    {/* <div style={{ width: '30%', height: 12, background: '#0f0', borderRadius: 12, margin: '0 12px' }}></div> */}
                    <Typography variant='body2'>
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
                    <Rating name="half-rating-read" defaultValue={p.star} precision={0.5} readOnly />
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
    var othersCharge = RoomDetaisData ? RoomDetaisData.OtherChargesArray ? RoomDetaisData.OtherChargesArray.map(function (p, index) {
        return <Grid key={index} container justify='space-evenly' style={{ padding: '12px 0' }}>
            <Grid item xs={9}>
                <Typography>{p.key}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography color='textSecondary'>{p.value ? p.value == 0 ? "Excludes With Rent" : `₹ ${p.value}${p.key == 'Electricity Charges' ? '/unit' : ""}` : "Excludes With Rent"}</Typography>
            </Grid>
        </Grid >
    }) : "" : ""
    var rentDetails = RoomDetaisData ? RoomDetaisData.price ? <>
        < Grid container justify='space-evenly' style={{ padding: '12px 0' }}>
            <Grid item xs={9}>
                <Typography>Monthly Rent</Typography>
                <Typography variant='caption' color='textSecondary'>Get services and maintenance at nominal prices</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography color='textSecondary'>₹ {RoomDetaisData.price}</Typography>
            </Grid>
        </Grid >
        < Grid container justify='space-evenly' style={{ padding: '12px 0' }}>
            <Grid item xs={9}>
                <Typography>Security Deposit</Typography>
                <Typography variant='caption' color='textSecondary'>Fully refundable if vacated in original condition</Typography>
                <Typography variant='caption' color='textSecondary'>At the time of move-out RoomLelo will refund your security deposit after deducting cost of damage and early move-out charges, if applicable.</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography color='textSecondary'>₹ {RoomDetaisData.securityDeposit}</Typography>
            </Grid>
        </Grid >
    </> : "" : ""
    var roomType = RoomDetaisData ? RoomDetaisData.type ? RoomDetaisData.type == 'Private Rooms' ? "Room" : RoomDetaisData.type == 'Shared Rooms' ? "Bed" : "" : "" : ""
    var RoomCard = Array.apply(null, { length: RoomDetaisData ? RoomDetaisData.available_rooms : 0 }).map((e, i) => (
        <Grid item key={i}>
            <BedRoomCard onBook={handelScroll} price={RoomDetaisData ? RoomDetaisData.price : ''} name={`${roomType} Number ${i + 1}`} />
        </Grid>
    ))

    var lat = RoomDetaisData ? RoomDetaisData.lat : ''
    var lan = RoomDetaisData ? RoomDetaisData.lng : ''
    const truncat = (str) => {
        return str.length > 150 ? <>{str.substring(0, 143)} <p style={{ color: '#00f', cursor: 'pointer' }}>...Know More</p></> : str;
    }
    console.log(RoomDetaisData);
    const [openD, setOpen] = React.useState(false);
    const scrollDialog = () => {
        setOpen(!openD)
    }

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }
    return (
        <>
            <Toolbar />
            {!RoomDetaisData ?
                <Loading />
                : <>


                    <MainSlider images={RoomDetaisData ? RoomDetaisData.photos : ""} text={RoomDetaisData.forWhom == "Any" ? "For anyone" : `Only for ${RoomDetaisData.forWhom}`} height='570px' />


                    <Grid container >
                        {/* <Grid container className={sty.rootImage} > */}

                        {/* <ImageSlider images={RoomDetaisData ? RoomDetaisData.photos : ""} text={RoomDetaisData.forWhom == "" ? "Any" : RoomDetaisData.forWhom} height={450} MHeight={400} /> */}
                        {/* <Mainslider images={RoomDetaisData ? RoomDetaisData.photos : ""} /> */}

                        {/* </Grid> */}

                        <Grid container style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                            <Grid container item md={8} style={{ flexDirection: 'column', }}>

                                <Paper className={sty.menu}>
                                    <Grid container >
                                        <div style={{ display: 'inline-flex' }}>
                                            <SvgIcon style={{ width: 35, height: 'auto', marginRight: 12, color: '#0a0' }}>
                                                <MoneyIcon />
                                            </SvgIcon>
                                            <Typography variant='subtitle2'>Rent from <br /><b>
                                                <p style={{ fontFamily: 'roboto', margin: 0 }}>₹{RoomDetaisData ? RoomDetaisData.price : ''}</p></b>{roomType ? '/' + roomType : ''}</Typography>
                                        </div> <Divider orientation="vertical" flexItem style={{ margin: '0 20px' }} />
                                        <div style={{ display: 'inline-flex' }}>
                                            <SvgIcon style={{ width: 35, height: 'auto', marginRight: 12, color: '#0a0' }}>
                                                <SecurityIcon />
                                            </SvgIcon>
                                            <Typography variant='subtitle2'>Security deposit <br /><b>
                                                <p style={{ fontFamily: 'roboto', margin: 0 }}>₹{RoomDetaisData.securityDeposit}</p></b></Typography>
                                        </div> </Grid>
                                </Paper>


                                <Grid>

                                    <Typography variant='h5' className={sty.title}>{RoomDetaisData ? RoomDetaisData.name ? RoomDetaisData.name : <Skeleton /> : <Skeleton />}</Typography>

                                    <Typography variant='subtitle1' >
                                        {RoomDetaisData ? RoomDetaisData.type ? RoomDetaisData.type == "Entire House" ? RoomDetaisData.totalBhk + 'BHK' : RoomDetaisData.type : <Skeleton /> : <Skeleton />}
                                        {RoomDetaisData ? RoomDetaisData.forWhom == "Any" ? " for Everyone" : ` Only for ${RoomDetaisData.forWhom}` : <Skeleton />}
                                        {RoomDetaisData ? RoomDetaisData.propertyAddress ? ` at ₹ ${RoomDetaisData ? RoomDetaisData.price : ''} Near ${RoomDetaisData.propertyAddress}` : "" : <Skeleton />}
                                    </Typography>
                                    <br />
                                    <Typography variant='subtitle1' color='textSecondary'>
                                        {RoomDetaisData ? RoomDetaisData.furnished ? RoomDetaisData.furnished : <Skeleton /> : <Skeleton />}
                                        {RoomDetaisData ? RoomDetaisData.forWhom == "Any" ? " | for Everyone" : ` | Only for ${RoomDetaisData.forWhom}` : <Skeleton />}  {RoomDetaisData ?
                                            RoomDetaisData.type !== 'Entire House' ? RoomDetaisData.available_rooms == "" ? `` : `| ${RoomDetaisData.available_rooms} ${roomType} available only. Hurry Up!` : ""
                                            : <Skeleton />}
                                        {RoomDetaisData ?
                                            RoomDetaisData.type !== 'Entire House' ? RoomDetaisData.available_rooms == "" ? `` : ` | ${RoomDetaisData.available_rooms} ${roomType} available only. Hurry Up!` : ""
                                            : <Skeleton />}
                                    </Typography>
                                    <br />

                                    {/* <Typography variant='body2' color='textSecondary'>{RoomDetaisData ? RoomDetaisData.propertyAddress ? `at ${RoomDetaisData.propertyAddress}` : "" : <Skeleton />}</Typography> */}

                                    {/* <Typography variant='body1' color='textSecondary' className={sty.title}>{RoomDetaisData ? RoomDetaisData.forWhom == "" ? "for Everyone" : `Only for ${RoomDetaisData.forWhom}` : <Skeleton />}  {RoomDetaisData ?
                                    RoomDetaisData.type !== 'Entire House' ? RoomDetaisData.available_rooms == "" ? `` : `| ${RoomDetaisData.available_rooms} ${roomType} available only. Hurry Up!` : ""
                                    : <Skeleton />}</Typography> */}
                                    {/*<Typography variant='body1' color='textSecondary' className={sty.title}>
                                     {RoomDetaisData ?
                                        RoomDetaisData.type !== 'Entire House' ? RoomDetaisData.available_rooms == "" ? `` : `| ${RoomDetaisData.available_rooms} ${roomType} available only. Hurry Up!` : ""
                                        : <Skeleton />}</Typography> */}

                                    <Typography variant='subtitle1' color='textSecondary'>Description</Typography>
                                    <Typography variant='subtitle2' style={{ textTransform: 'capitalize' }} onClick={() => setTruncate(!truncate)}>{RoomDetaisData ? RoomDetaisData.description ? truncate ? truncat(RoomDetaisData.description) : RoomDetaisData.description : <Skeleton /> : <Skeleton />}  </Typography>

                                    {/* <Typography variant='subtitle2' style={{ textTransform: 'capitalize' }}>{RoomDetaisData ? RoomDetaisData.description ? RoomDetaisData.description : <Skeleton /> : <Skeleton />}</Typography> */}


                                </Grid>
                                <Divider />
                                <Grid container>

                                    <Typography variant='h5' className={sty.title}>House Features</Typography>
                                    <Grid container alignItems="center" >
                                        {RoomDetaisData ? RoomDetaisData.HouseFeature ?
                                            RoomDetaisData.HouseFeature.map((data, index) => <div key={index} className={sty.box_grid}>
                                                <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/prize.svg`)})` }}></div>
                                                <Typography variant="caption">
                                                    {data}
                                                </Typography>
                                            </div>) : "" : ""}
                                    </Grid>

                                </Grid>

                            </Grid>
                            {!matches && <Grid item container ref={BookCardRef} md={4} justify='center' alignItems='baseline'>

                                <BookScheduleCard id={props.match.params.id} roomData={RoomDetaisData} />

                            </Grid>}


                            <Grid container style={{ flexDirection: 'column', }}>
                                <Grid container>
                                    <Divider style={{ width: '100%' }} />
                                    <Typography variant='h5' className={sty.title}>Near By</Typography>
                                    <Grid container alignItems="center" >
                                        {RoomDetaisData ? RoomDetaisData.Nearby ?
                                            Object.keys(RoomDetaisData.Nearby).map(key => <div key={key} className={sty.box_grid}>
                                                <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/nearby/${key.replace(/ /g, "-")}.svg`)})` }}></div>
                                                <Typography variant="caption">
                                                    {RoomDetaisData.Nearby[key]}{' '}{key}
                                                </Typography>
                                            </div>) : "" : ""}
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Divider style={{ width: '100%' }} />

                                    <Typography variant='h5' className={sty.title}>Amenities</Typography>
                                    <Grid container alignItems="center" >
                                        {RoomDetaisData ? RoomDetaisData.amenities ?
                                            RoomDetaisData.amenities.map((data, index) => <div key={index} className={sty.box_grid}>
                                                <div className={sty.box_class} style={{ backgroundImage: `url(${require(`../static/icons/Amenites/${data.replace(/ /g, "-")}.svg`)})` }}></div>
                                                <Typography variant="caption">
                                                    {data}
                                                </Typography>
                                            </div>) : "" : ""}
                                    </Grid>
                                </Grid>
                                <Divider style={{ width: '100%' }} />

                                <Typography variant='h5' className={sty.title}>Rent Details</Typography>
                                {roomType && <>
                                    <Divider />
                                    <Grid container>
                                        <Grid container item xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>
                                            <Grid container alignItems="center" className={sty.planRoot}>
                                                {RoomCard}

                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Divider />
                                </>
                                }



                                {rentDetails}
                                {othersCharge}
                                <Typography variant='caption' color='error' >Rent Excludes: Food, Utilities and Other Miscellaneous living expenses</Typography>
                                <Divider />

                                <Grid container >
                                    <Typography variant='h5' className={sty.title}>What all in covered in our Plan?</Typography>
                                    <Grid item xs={12} style={{ overflow: 'hidden', paddingBottom: 20 }}>
                                        {/* <Grid container alignItems="center" className={sty.planRoot}> */}

                                        {plan.map((p, i) => {
                                            return <Grid item key={p}>
                                                <Typography ><CheckIcon style={{ color: '#0f0' }} />{p}</Typography>
                                            </Grid>
                                        })}

                                        {/* </Grid> */}
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid container >
                                    <Typography variant='h5' className={sty.title}>Terms of stay</Typography>
                                </Grid>

                                <Grid container justify='space-between'>
                                    <Typography>The do's and dont's of staying in RoomLelo home</Typography>
                                    <p style={{ color: '#00f', cursor: 'pointer' }} onClick={scrollDialog}>Learn More</p>
                                    <ScrollDialog handleClose={scrollDialog} openD={openD}>
                                        {RoomDetaisData ? RoomDetaisData.rules ? RoomDetaisData.rules.map((p, i) => {
                                            return (
                                                <Typography key={i} variant='body2'>{i + 1}. {p}<br /><br /> </Typography>
                                            )
                                        }) : '' : ''}

                                    </ScrollDialog>
                                </Grid>
                                <Divider />
                                {/* <Grid container justify='center' alignItems='center' className={sty.reviews}>
                                <Typography variant='h5' className={sty.title}>Customer Reviews</Typography>
                                <Typography variant='body2' color='textSecondary' className={sty.title} style={{textAlign: 'center', textAlign: '-webkit-center'}}>This Property has been reviewed by 2,500 Tenants and has been booked 10 times this month</Typography>
                            </Grid> */}

                                {/* <Grid container justify='center' alignItems="center"  >
                                <Grid container item sm={6} alignItems="center" className={sty.ratingPadding} >
                                    {rating}
                                </Grid>
                                <Grid container item sm={6} alignItems="center" className={sty.ratingPadding} >
                                    {rating1}
                                </Grid>
                            </Grid> */}


                                <Grid container className={sty.reviews}>

                                    <Typography variant='h5' className={sty.title}>Your Neighborhood</Typography>
                                    {/* <Typography variant='subtitle1' color='textSecondary' className={sty.title}>This Property has been reviewed by 2,500 Tenants and has been booked 10 times this month</Typography> */}

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

                        {matches && <ResponsiveDialog open={dialog} handleClose={BookNowMobile}>
                            <BookScheduleCard id={props.match.params.id} roomData={RoomDetaisData} />
                        </ResponsiveDialog>}
                    </Grid>
                </>}

            <Grid container className={sty.bottomNav}>
                <ButtonGroup disableElevation variant="contained" size='large' fullWidth color="primary">
                    <Button onClick={BookNowMobile} color='secondary'>Schedule Visit</Button>
                    <Button onClick={BookNowMobile}>Book Now</Button>
                </ButtonGroup>
            </Grid>
            <div className={sty.footer}>
                {RoomDetaisData && <Footer />}
            </div>
        </>
    )
};
RoomsComponents.PropType = {

    // room:PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}
const mapState = (state) => ({
    room: state.room,
    user: state.user
});
const mapActionsToProps = {

};
export default connect(mapState, mapActionsToProps)((GoogleApiWrapper({ apiKey: (MAP_API_KEY) })(RoomsComponents)))
