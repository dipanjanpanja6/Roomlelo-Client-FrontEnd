import React, { useEffect } from "react";
import { Grid, makeStyles, Typography, Toolbar, TextField, Divider, Paper, Button, Avatar, Card, InputAdornment, CircularProgress, Menu, MenuItem } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import Growth from "../components/ourGroth";
import Benefit from "../components/benefit";
import Testo from "../components/testo";
import { url } from "../config/config";
import { useState } from "react";
import { toast } from "react-toastify";

const style = makeStyles((theme) => ({
    book: {
        padding: 3,
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
        // background: 'rgba(196, 196, 196, 0.2)'
    },
    bookPadding: {
        padding: 0,
        // background: '#fff'
    },
    dashImg: {
        backgroundImage: `url(${require('../static/TenantDashboardUI.svg')})`,
        height: 419,
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        [theme.breakpoints.down('xs')]: {
            height: 218,
            width: 356
        }
    },
    plan: {
        height: 332,
        width: 221,
        margin: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover !important'
    },
    planTitle: {
        textAlign: 'center',
        color: '#eee'
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

}))
const RoomsComponents = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Join with Us | RoomLelo - Flats, house, rooms for rent without brokerage.'
    }, [])
    const sty = style()
    var six = Array.apply(null, { length: 1 }).map((e, i) => (
        <>
            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Track daily earnings.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Regularly monitor tenant requests.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Sent payment reminders.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Advanced notifications of lease completion.</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b>Scan the vacancy of properties.</b>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                style={{ margin: "24px 0" }}
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <Avatar sizes="5">A</Avatar>
                    <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
                        <b> Keep a check on payment records of tenants.</b>
                    </Typography>
                </Grid>
            </Grid>

        </>
    ));
    const plan = [
        "Step 01",
        "Step 02",
        "Step 03",
    ]
    const [state, setState] = useState({ name: "", phoneNumber: "", email: '' ,propertyType:"Others"})
    const [loading,setLoading] = useState(false)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (state.phoneNumber.match(/^\d{10}$/)) {
            fetch(`${url}/refer/ownerreq`, {
                method: 'POST',
                body: JSON.stringify({data:state}),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                setLoading(false)
                response.json().then((data) => {
                    data.success && toast.success(data.message)
                    data.error && toast.error(data.message)
                })
            }).catch(r=>toast.error('Something went wrong'))
        } else {
            setLoading(false)
            toast.error("Invalid Phone number")
        }
    }
    return (
        <>
            <Toolbar />
            <Grid>
                <Grid container alignItems='center' style={{ padding: 20 }}>
                    <Grid container sm={7} className={sty.book}>

                        <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                            {/* <video width="80%" height="300" controls>
                            <source
                                src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                                type="application/x-mpegURL"/>
                        </video> */}
                        <img height='400' src={require('../static/Agreement.svg')}/>
                            {/* <iframe title='video' width="90%" height="315" src="https://www.youtube-nocookie.com/embed/IuX6k-Xf_Qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </Grid>
                    </Grid>

                    <Grid container item sm={5} style={{ flexDirection: 'column' }}>
                        <Paper className={sty.bookPaper}>

                            <Typography variant='body1'>
                                <b>Partner with Roomlelo and Earn Money </b>
                            </Typography>
                            <Divider style={{ margin: '12px 0' }} />

                            <form onSubmit={submit}>
                                <TextField className={sty.bookPadding}
                                    fullWidth
                                    margin='dense'
                                    type="text"
                                    required
                                    name="name"
                                    value={state.name}
                                    onChange={handleChange}
                                    variant='outlined'
                                    placeholder="Enter Your First and Last Name" />


                                <TextField className={sty.bookPadding}
                                    margin='dense'
                                    variant='outlined'
                                    name="phoneNumber"
                                    value={state.phoneNumber}
                                    onChange={handleChange}
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                +91
                                            </InputAdornment>
                                        ),
                                    }}
                                    required
                                    placeholder="Contact Number" />
                                <TextField className={sty.bookPadding}
                                    margin='dense'
                                    variant='outlined'
                                    name="email"
                                    value={state.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder=" Email address" />
                                <Divider style={{ margin: '12px 0' }} />
                                <TextField className={sty.bookPadding}
                                    margin='dense'
                                    variant='outlined'
                                    name="propertyType"
                                    required
                                    value={state.propertyType}
                                    onChange={handleChange}
                                    select>
                                        <MenuItem value="Others">Others</MenuItem>
                                        <MenuItem value="Room">Room</MenuItem>
                                        <MenuItem value="Flat">Flat</MenuItem>
                                        <MenuItem value="House">House</MenuItem>
                                    </TextField>
                                <TextField className={sty.bookPadding}
                                    margin='dense'
                                    variant='outlined'
                                    name="details"
                                    multiline
                                    rowsMax={4}
                                    rows={2}
                                    placeholder='Brief descriptions ...'
                                    required
                                    value={state.details}
                                    onChange={handleChange}
                                   />
                                <Divider style={{ margin: '12px 0' }} />

                                <Button disabled={loading} type='submit' variant='contained' color='secondary'>
                                    Request a Call back for Assistance {loading && <CircularProgress size={26} />}
                            </Button>
                            </form>
                            {/* <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: 99999999999</Typography> */}
                        </Paper>

                    </Grid>
                </Grid>
                <Divider />
                <Growth />
                <Benefit />
                <Grid container justify="center" alignItems="center" className={sty.offer}>
                    <Typography
                        variant="h4"
                        style={{
                            paddingTop: 44,
                            paddingBottom: 44,
                            textAlign: 'center',
                            fontWeight: "bold",
                        }}
                    >
                        Roomlelo properties Dashboard
                        </Typography>

                    <Grid container alignItems="center">
                        <Grid item sm={5} style={{ paddingLeft: '10%' }}>
                            {six}
                        </Grid>
                        <Grid item justify="center" container sm={7}>
                            <div className={sty.dashImg}></div>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid container justify="center" alignItems="center" className={sty.offer}>
                    <Grid>
                        <Typography
                            variant="h4" style={{
                                paddingTop: 15, paddingBottom: 20, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
                            }}
                        > Steps to list with us</Typography>
                        <Typography
                            variant='body1' style={{
                                paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            How to list your Property us :-
                    </Typography>
                    </Grid>

                    <Grid container xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>
                        <Grid container alignItems="center" className={sty.planRoot}>

                            {plan.map((p, i) => {
                                return <Grid item >
                                    <Card key={i} style={{ background: `url(https://source.unsplash.com/random/?step)` }} className={sty.plan}>
                                        <Typography variant='h4' color='textSecondary' className={sty.planTitle}>
                                            {p}
                                        </Typography>
                                    </Card>
                                </Grid>
                            })}

                        </Grid>
                    </Grid>

                </Grid>
                <Testo />
            </Grid>

            <Footer />
        </>
    )
};
RoomsComponents.PropType = {
    sty: PropType.object.isRequired
}
export default (RoomsComponents)
