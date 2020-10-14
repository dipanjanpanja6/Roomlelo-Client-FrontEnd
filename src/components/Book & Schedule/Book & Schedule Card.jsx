import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Divider, TextField, InputAdornment, Button, ButtonGroup, useMediaQuery, useTheme, CircularProgress } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { sendOTP, verifyMobileCode } from '../../redux/actions/userActions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { booking_help_no } from '../../config/config'


const style = makeStyles((theme) => ({
    bookPaper: {
        flexDirection: 'column',
        display: 'flex',
        padding: 12,
        // background: 'rgba(196, 196, 196, 0.3)',
        height: 'inherit'
    },
    bookPadding: {
        // '& :last-child':{
        //     marginBottom: 12
        // }
        minWidth: 300

    },
}))

function BookScheduleCard(props) {
    const history = useHistory()
    const sty = style()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [err, setError] = useState({});
    const [state, setState] = useState({});
    const [code, setCode] = useState("");
    const [date, setDate] = useState(new Date());
    const [submitType, setSubmitType] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (props.book) {
            if (props.book.booked === true) {
                toast.success("Room Booked successful. Our executive will contact you soon. For more information's please check our about page.")
                history.push('/tenantterms')
                // setTimeout(window.location='/about', 30000);

            }
            if (props.book.schedule_booked === true) {
                toast.success("Visit scheduled successful. Our executive will contact you soon. For more information's please check our about page.")
                // setTimeout(window.location='/about', 30000);

                history.push('/tenantterms')
            }
            if (props.book.schedule_booked === "" || props.book.booked === "") {
                setLoading(true)
            } else {
                setLoading(false)

            }
        }
    }, [props.book])

    const handleDateChange = (e) => {
        console.log(e);
        setDate(e)
    }

    const handleChange = (event) => {
        setError('')
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleVerifyClick = (e) => {
        console.log("handleVerifyClick");
        e.preventDefault()
        console.log(props.id);
        const mobile = state.number
        const data = {
            date: date,
            id: props.id,
            mobile: state.number,
            email: state.email,
            name: state.name
        }

        console.log({ code })
        props.verifyMobileCode(mobile, code, state.email, data, submitType)


    }



    const handleScheduleClick = (e) => {
        e.preventDefault()
        var phoneno = /^\d{10}$/;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (state.number.match(phoneno)) {
            console.log(date);
            if (re.test(state.email)) {
                props.sendOTP(state.number)

            } else {
                setError({ ...err, emailError: true, emailMessage: 'Invalid Email Address' })
            }
        } else {
            setError({ ...err, numberError: true, numberMessage: 'Invalid Mobile Number' })
        }
    }
    const scheduleClick = () => {
        setSubmitType('schedule')
        console.log("sch");
    }
    const bookClick = () => {
        setSubmitType('book')
        console.log("book");
    }

    return (

        <Paper elevation={5} className={sty.bookPaper}>
            {/* <Typography variant='body2'>
                {props.roomData ? props.roomData.type : "Rooms"} at {props.roomData ? props.roomData.propertyAddress : ""}
            </Typography> */}
            <Typography variant='body2'>
                Starting at <b>Rs. {props.roomData ? props.roomData.price : "Loading..."} /- </b>Per Month
        </Typography>
            {props.roomData ? props.roomData.available == 'true' ? <>
                <Typography variant='body1'>
                    <b>Schedule your Visit:</b>
                </Typography>


                <form onSubmit={handleScheduleClick} >

                    <Fragment>
                        <DateTimePicker
                            value={date}
                            onChange={handleDateChange}
                            disablePast
                            inputVariant='outlined'
                            // label="With Today Button"
                            disabled={props.user.sended ? true : false}
                            showTodayButton
                            animateYearScrolling
                            InputProps={{ margin: 'dense', required: true, className: sty.bookPadding }}
                        /></Fragment>

                    <TextField className={sty.bookPadding}
                        margin='dense'
                        autoFocus
                        required
                        variant='outlined'
                        type="text"
                        value={state.name}
                        onChange={handleChange}
                        disabled={props.user.sended ? true : false}
                        name='name'
                        placeholder="Your name" />
                    <TextField className={sty.bookPadding}
                        margin='dense'
                        required
                        error={err.numberError}
                        helperText={err.numberMessage}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    +91
                                </InputAdornment>
                            ),
                        }}
                        variant='outlined'
                        type="number"
                        value={state.number}
                        onChange={handleChange}
                        disabled={props.user.sended ? true : false}
                        name='number'
                        placeholder="Contact Number" />
                    <TextField className={sty.bookPadding}
                        name='email'
                        error={err.emailError}
                        helperText={err.emailMessage}
                        value={state.email}
                        onChange={handleChange}
                        margin='dense'
                        required
                        variant='outlined'
                        type="email"
                        disabled={props.user.sended ? true : false}
                        placeholder="Email address" />
                    {props.user.sended &&
                        <>
                            <TextField placeholder="Verification Code"
                                required
                                type="number" onChange={(e) => setCode(e.target.value)}
                                margin="dense" variant="outlined" value={code}
                                className={sty.bookPadding}

                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <Button>
                                                Resend
                                        </Button>
                                        </InputAdornment>
                                    ),
                                }} />

                            <br />
                            <div style={{ display: 'flex', flexGrow: 1 }}></div>
                            <ButtonGroup disableElevation variant="contained" size='large' orientation={fullScreen ? "horizontal" : 'vertical'} fullWidth color="primary">

                                <Button onClick={handleVerifyClick} variant='contained' color='primary'>
                                    Verify Mobile {loading && <CircularProgress size={26} color='secondary' />}
                                </Button>
                                <Button onClick={() => history.go(0)} variant='contained' color='secondary'>
                                    Cancel
                            </Button>
                            </ButtonGroup>
                        </>}
                    {!props.user.sended && <>
                        <br />
                        <div style={{ display: 'flex', flexGrow: 1 }}></div>

                        <ButtonGroup disableElevation variant="contained" size='large' orientation={fullScreen ? "horizontal" : 'vertical'} fullWidth color="primary">
                            <Button onClick={scheduleClick} type='submit' color='secondary' disabled={submitType === "schedule" && loading}>Schedule Visit {submitType === "schedule" && loading && <CircularProgress size={26} color='primary' />}</Button>
                            <Button onClick={bookClick} type='submit' disabled={submitType === "book" && loading}>Book Now {submitType === "book" && loading && <CircularProgress size={26} color='secondary' />}</Button>
                        </ButtonGroup></>}

                </form>
            </> : <Typography style={{
                height: 300, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }} color='error'>Unavailable right now. Contact RoomLelo for more available {props.roomData.type}</Typography> : <CircularProgress />}
            <br />
        <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: <a href={`tel:${booking_help_no}`}>{booking_help_no}</a></Typography>
        </Paper>

    )
}

BookScheduleCard.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    sendOTP: PropTypes.func.isRequired,
    verifyMobileCode: PropTypes.func.isRequired,
    roomData: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired
}
const mapState = (state) => ({

    user: state.user,
    book: state.book,
});
const mapActionsToProps = {
    sendOTP,
    verifyMobileCode
};

export default connect(mapState, mapActionsToProps)(BookScheduleCard)

