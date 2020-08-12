import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Divider, TextField, InputAdornment, Button, ButtonGroup, useMediaQuery, useTheme } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { signInWithMobile, verifyMobileCode } from '../../redux/actions/userActions'


const style = makeStyles((theme) => ({
    bookPaper: {
        flexDirection: 'column',
        display: 'flex',
        padding: 12,
        background: 'rgba(196, 196, 196, 0.3)',
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

    const sty = style()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //  console.log(props);
    const [err, setError] = useState({});
    const [state, setState] = useState({});
    const [code, setCode] = useState("");
    const [date, setDate] = useState(new Date());
    const [submitType, setSubmitType] = useState(null);

    const handleDateChange = (e) => {

        const d = new Date(e)
        // const hours = d.getHours()
        // const minutes = d.getMinutes()
        // const t = `${hours}:${minutes}`
        var time = d.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
        console.log(time);
        console.log(e);
        setDate(e)
    }

    const handleScheduleClick = (e) => {
        e.preventDefault() 
        var phoneno = /^\d{10}$/;
        if (state.number.match(phoneno)) {
            // props.signInWithMobile(state.number)
            // return true;
        } else {
            // alert("message");
            setError({ ...err, numberError: true, numberMessage: 'Invalid Mobile Number' })
            // return false;
        }
    }

    const handleChange = (event) => {
        setError('')
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleVerifyClick = (e) => {
        e.preventDefault()
        const mobile = props.user.number
        const data = {
            date: state.date,
            time: state.time,
            id: props.match.params.id
            
        }
        props.verifyMobileCode(mobile, code, data)
    }


    return (

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


            <form onSubmit={handleScheduleClick} >
                {/* <div style={{ boxSizing: 'border-box', display: 'flex' }}>
                <TextField className={sty.bookPadding} style={{ paddingRight: 6 }}
                    fullWidth
                    margin='dense'
                    required
                    type="datetime-local"
                    variant='outlined' onChange={(e) => setDate(e.target.value)}
                    placeholder="Choose your Prefered Date or Week-end" />

                <TimeInput
                    mode='12h'
                    required
                    className={sty.bookPadding} style={{ paddingLeft: 6 }}
                    onChange={(time) => handleChange(time)}
                    inputComponent={TextField}
                    margin='dense'
                    variant='outlined'
                    placeholder='Select your time of Visit' />
            </div> */}
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
                    value={state.email}
                    onChange={handleChange}
                    margin='dense'
                    required
                    variant='outlined'
                    type="email"
                    disabled={props.user.sended ? true : false}
                    placeholder="Email address" />
                {props.user.sended &&
                    <form onSubmit={handleVerifyClick}>
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

                            <Button type='submit' variant='contained' color='primary'>
                                Verify Mobile
                            </Button>
                            <Button variant='contained' color='secondary'>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </form>}
                {!props.user.sended && <>
                    <br />
                    <div style={{ display: 'flex', flexGrow: 1 }}></div>

                    <ButtonGroup disableElevation variant="contained" size='large' orientation={fullScreen ? "horizontal" : 'vertical'} fullWidth color="primary">
                        <Button mane='submit' onClick={()=>{setSubmitType('book')}} type='submit'>Book Now</Button>
                        <Button mane='schedule' onClick={()=>{setSubmitType('schedule')}}  type='submit' color='secondary'>Schedule your Visit</Button>
                    </ButtonGroup></>}

                {/* <Button type='submit'
                    // onClick={handleScheduleClick}
                    variant='contained' color='secondary'>
                    Schedule your Visit
                 </Button>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <Button variant='contained' color='primary'>
                    Book Now
               </Button> */}
            </form>
            <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: 99999999999</Typography>
        </Paper>

    )
}

BookScheduleCard.propTypes = {
    sty: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    signInWithMobile: PropTypes.func.isRequired,
    verifyMobileCode: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired
}
const mapState = (state) => ({
    room: state.room,
    user: state.user
});
const mapActionsToProps = {
    signInWithMobile,
    verifyMobileCode
};

export default connect(mapState, mapActionsToProps)(BookScheduleCard)

