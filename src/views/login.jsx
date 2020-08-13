import React, { useEffect } from 'react';
import { RadioGroup, Grid, FormControl, FormControlLabel, FormLabel, TextField, Button, Typography, makeStyles, Select, Radio, Toolbar, Link, InputAdornment, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import { url } from '../config/config'
import { signInWithMobile, verifyMobileCode } from '../redux/actions/userActions'
import PropTypes from 'prop-types'

const styles = makeStyles(t => ({
    side1: {
        // flexDirection: 'column'
    },
    root: {
        height: `calc(100vh - 64px)`,
        [t.breakpoints.down('xs')]: {
            height: `calc(100vh - 56px)`,
        }
    },
    side2: {
        background: `url(${require('../static/signup.png')})`,
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
        padding: 12,
        [t.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}))

function Login(props) {
    const sty = styles()
    const history = useHistory()
    const [state, setState] = useState({ number: '', email: '' });
    const [next, setNext] = useState(false);
    const [mode, setMode] = useState(false);
    const [EmailExists, setEmailExists] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Login | Create Account | RoomLelo - Flats, house, rooms for rent without brokerage.'
    }, [])
    useEffect(() => {
        if (props.auth) {
            // setLoading(false)
            if (props.auth.login === true) {
                history.push('/dashboard')
            } else if (props.auth.error) {
                alert(props.auth.message)
                setState({})
                // toast.error(props.auth.message)
                console.log(props.auth.message);

            }
        }
    }, [history, props])

    const handelChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(state);
        // props.login(state)
        // setLoading(true)
        if (mode) {
            setEmailExists({ loading: true })
            // props.findEmail(state.email)
            fetch(`${url}/account/findEmail`, {
                method: 'POST',
                body: JSON.stringify({ email: state.email }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    response.json().then((data) => {
                        console.log(data)
                        if (data.success) {
                            setEmailExists({ loading: false, data: true })

                        } else {
                            setEmailExists({ loading: false, data: false })
                        }
                        setNext(true)
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            // props.findMobile(state.mobile)
            props.signInWithMobile(state.number)

        }
    }
    const [value, setValue] = React.useState('Tenant');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const cancel = () => {

        setNext(false)
        setState({ number: '', email: '' })
    }
    const withEmail = () => {
        setMode(!mode)
    }
    return (<>
        <Toolbar />
        <Grid container justify='center' className={sty.root}>
            <Grid container justify='center' alignContent='center' className={sty.side1} sm={6}>
                <Typography variant='h4'>Welcome to Roomlelo </Typography>

                <Grid container justify='center' alignItems='center' >
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="User type" style={{ flexDirection: 'unset' }} name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Tenant" disabled={next} control={<Radio />} label="Tenant" />
                            <FormControlLabel value="Landlord" disabled={next} control={<Radio />} label="Landlord" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid container justify='center' alignItems='center' >
                    <form onSubmit={submit} style={{ display: 'block', maxWidth: 300, paddingTop: 20 }}>
                        {!mode && <TextField placeholder='Phone number'
                            id='number'
                            margin='dense'
                            required
                            type="number"
                            value={state.number}
                            onChange={handelChange}
                            disabled={next}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        +91
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth />}

                        {mode && <TextField placeholder='Email Address'
                            id='email'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon color='disabled' />
                                    </InputAdornment>
                                ),
                            }}
                            margin='dense'
                            required
                            type="email"
                            value={state.email}
                            onChange={handelChange}
                            disabled={next}
                            fullWidth />}


                        {next &&
                            <>
                                {!mode &&
                                    <TextField placeholder="Verification Code"
                                        required
                                        fullWidth
                                        // type="number" onChange={(e) => setCode(e.target.value)}
                                        margin="dense"
                                        //  value={code}
                                        className={sty.bookPadding}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <Button>
                                                        Resend
                                        </Button>
                                                </InputAdornment>
                                            ),
                                        }} />}
                                {mode && < TextField label='Password'
                                    id='pass'
                                    required
                                    margin='dense'
                                    type='password'
                                    onChange={handelChange}
                                    fullWidth />}
                            </>}

                        <Grid container justify='space-between' alignItems='center'>
                            {!next && <><Link onClick={withEmail} style={{ cursor: 'pointer' }}>{`Continue with ${!mode ? "Email" : "Phone"}`}</Link>
                                <Button type='submit' variant='contained' color='primary' style={{ margin: '20px 0' }} disabled={EmailExists.loading}>Next {EmailExists.loading && <CircularProgress />}</Button></>}
                            {next && <>

                                <Button onClick={cancel} variant='contained' color='secondary' style={{ margin: '20px 0' }}>Cancel</Button>
                                <Button type='submit' variant='contained' color='primary' style={{ margin: '20px 0' }}>Continue</Button>
                            </>}
                        </Grid>
                    </form>
                </Grid>
                {/* <Grid style={{ display: 'flex' }}>

                    <Typography >
                        Please Note :
                </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        To Change Password please contact support Department
                </Typography>
                </Grid> */}


            </Grid>
            <Grid container sm={6} justify='center' alignItems='center' className={sty.side2} >
                {/* <Grid > */}
                <Typography variant='h4'>“Know why our Customer love us”</Typography>
                <Typography variant='subtitle1'>CEO, Roomlelo.in</Typography>
                {/* </Grid> */}
            </Grid>
        </Grid>
    </>);
}
Login.prototype = {
    user: PropTypes.object.isRequired,
    signInWithMobile: PropTypes.func.isRequired,
    verifyMobileCode: PropTypes.func.isRequired,
    
}
const mapToProp = {
    signInWithMobile,
    verifyMobileCode
}
const mapToState = (state) => ({
    user: state.user,
})
export default connect(mapToState, mapToProp)(Login); 
