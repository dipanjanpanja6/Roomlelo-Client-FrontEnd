/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import { RadioGroup, Grid, FormControl, FormControlLabel, FormLabel, TextField, Button, Typography, makeStyles, Select, Radio, Toolbar, Link, IconButton, SvgIcon, InputAdornment } from '@material-ui/core';
import { useState } from 'react';
import clsx from 'clsx'
import { connect } from 'react-redux';
import PropType from 'prop-types'
import { login } from '../redux/actions/student'
import { useHistory } from 'react-router-dom';
import Firebase from '../config/config'

import FacebookIcon from '@material-ui/icons/Facebook'
import { ReactComponent as Q } from '../static/Google.svg'
import AppBarSpace from '../components/appBarSpace';

const styles = makeStyles(t => ({
    side1: {
        // flexDirection: 'column'
    },
    root: {
        // minHeight:`calc(100vh - ${t.mixins.toolbar.minHeight}px)`
        minHeight: `calc(100vh - 64px)`
    },
    side2:{
        background: 'rgb(183 183 183)', flexDirection: 'column',
        [t.breakpoints.down('xs')]:{
            display:'none'
        }
    }
}))

function Login(props) {
    const sty = styles()
    const history = useHistory()
    const signUp = useRef(null);
    const [state, setState] = useState({});
    useEffect(() => {

        window.recaptchaVerifier = new Firebase.auth.RecaptchaVerifier(signUp.current, {
            'size': 'invisible',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                submit();
            }
        });
    }, [])

    // useEffect(() => {
    //     if (props.auth) {
    //         // setLoading(false)
    //         if (props.auth.login === true) {
    //             history.push('/dashboard')
    //         } else if (props.auth.error) {
    //             alert(props.auth.message)
    //             setState({})
    //             // toast.error(props.auth.message)
    //             console.log(props.auth.message);

    //         }
    //     }
    // }, [history, props])

    const handelChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(signUp);

        var appVerifier = window.recaptchaVerifier;

        Firebase.auth().signInWithPhoneNumber(state.phone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // this.otpSent = true;
                console.log(confirmationResult)

            }).catch(function (error) {
                console.log(error);
            });

    }
    const [value, setValue] = React.useState('Tenant');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (<>
        <Toolbar />
        <AppBarSpace />
        <Grid container justify='center' className={sty.root}>
            <Grid container justify='center' alignItems='center' className={sty.side1} sm={6}>
                <Typography variant='h4'>Welcome to Roomlelo </Typography>

                <Grid container justify='center' alignItems='center' >
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="User type" style={{ flexDirection: 'unset' }} name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
                            <FormControlLabel value="Landlord" control={<Radio />} label="Landlord" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid container justify='center' alignItems='center' >
                    <form onSubmit={submit} style={{ maxWidth: 300, }}>
                        <TextField label='Enter Your Full Name'
                            id='name'
                            required
                            type="text"
                            onChange={handelChange}
                            margin='dense'
                            fullWidth />
                        <TextField label='Enter Your Email '
                            margin='dense'
                            id='email'
                            required
                            type='email'
                            onChange={handelChange}
                            fullWidth />
                        <TextField label='Enter Your Phone Number'
                            id='phone'
                            required
                            margin='dense'
                            type='number'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        +91
                                    </InputAdornment>)
                            }}
                            onChange={handelChange}
                            fullWidth />
                        <Grid container justify='center' alignItems='center'>

                            <Grid style={{ textAlign: 'center' }}>
                                <p>or</p>
                                <p>login using</p>
                            </Grid>
                            <Grid container justify='center' alignItems='center'>
                                <IconButton>
                                    <SvgIcon style={{ height: 35, width: 35, color: '#000' }}>
                                        <Q />
                                    </SvgIcon>
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon style={{ height: 40, width: 40, color: '#000' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' alignItems='center'>
                            <Button ref={signUp} type='submit' variant='contained' color='primary' style={{ margin: '20px 0' }}>Next</Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid style={{ display: 'flex', }}>

                    <Typography >
                        Please Note :
                </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        To Change Password please contact support Department
                </Typography>
                </Grid>


            </Grid>
            <Grid container sm={6} justify='center' alignItems='center' className={sty.side2} style={{  }} >
                {/* <Grid > */}
                <Typography variant='h4'>“Know why our Customer love us”</Typography>
                <Typography variant='subtitle1'>CEO, Housing.com</Typography>
                {/* </Grid> */}
            </Grid>
        </Grid>
    </>);
}
Login.prototype = {
    auth: PropType.object.isRequired,
    login: PropType.func.isRequired
}
const mapToProp = {
    login
}
const mapToState = (state) => ({
    auth: state.admin.login
})
export default connect(mapToState, mapToProp)(Login); 
