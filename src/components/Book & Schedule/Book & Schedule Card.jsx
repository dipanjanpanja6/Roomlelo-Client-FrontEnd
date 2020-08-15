import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Divider, TextField, InputAdornment, Button, ButtonGroup, useMediaQuery, useTheme, CircularProgress } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { signInWithMobile, verifyMobileCode } from '../../redux/actions/userActions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'


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
const history= useHistory()
    const sty = style()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //  console.log(props);

    const [err, setError] = useState({});
    const [state, setState] = useState({});
    const [code, setCode] = useState("");
    const [date, setDate] = useState(new Date());
    const [submitType, setSubmitType] = useState(null);
    const [loading,setLoading]=useState(false)
useEffect(()=>{
if (props.book) {
    if (props.book.booked===true) {
        toast.success("Room Booked successful. Our executive will contact you soon. For more information's please check our about page.")
        history.push('/about')
        // setTimeout(window.location='/about', 30000);

    }
    if (props.book.schedule_booked===true) {
        toast.success("Visit scheduled successful. Our executive will contact you soon. For more information's please check our about page.")
        // setTimeout(window.location='/about', 30000);
      
        history.push('/about')
    }
    if (props.book.schedule_booked==="" || props.book.booked==="") {
       setLoading(true)
    }else{
       setLoading(false)

    }
}
},[props.book])
console.log(props);
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
            time: date,
            id: props.id

        }

        console.log({ code })
        props.verifyMobileCode(mobile, code, state.email, data, submitType)


    }



    const handleScheduleClick = (e) => {
        e.preventDefault()
        var phoneno = /^\d{10}$/;
        if (state.number.match(phoneno)) {
            props.signInWithMobile(state.number)
            console.log(state.number);

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
                                Verify Mobile {loading && <CircularProgress size={26} color='secondary'/>}
                            </Button>
                            <Button onClick={()=>history.go(0)} variant='contained' color='secondary'>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </>}
                {!props.user.sended && <>
                    <br />
                    <div style={{ display: 'flex', flexGrow: 1 }}></div>

                    <ButtonGroup disableElevation variant="contained" size='large' orientation={fullScreen ? "horizontal" : 'vertical'} fullWidth color="primary">
                        <Button mane='submit' onClick={bookClick} type='submit'>Book Now { submitType==="submit" && loading && <CircularProgress size={26} color='secondary'/>}</Button>
                        <Button mane='schedule' onClick={scheduleClick} type='submit' color='secondary'>Schedule your Visit { submitType==="schedule" && loading && <CircularProgress size={26} color='primary'/>}</Button>
                    </ButtonGroup></>}

            </form>
            <br/>
            <Typography variant='caption' style={{ textAlign: 'center' }}>Need Assistant Contact At: +91 76676 51878</Typography>
        </Paper>

    )
}

BookScheduleCard.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    signInWithMobile: PropTypes.func.isRequired,
    verifyMobileCode: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired
}
const mapState = (state) => ({
    room: state.room,
    user: state.user,
    book:state.book,
});
const mapActionsToProps = {
    signInWithMobile,
    verifyMobileCode
};

export default connect(mapState, mapActionsToProps)(BookScheduleCard)

