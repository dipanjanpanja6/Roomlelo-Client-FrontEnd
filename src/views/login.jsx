import React, { useEffect } from 'react';
import { RadioGroup, Grid, FormControl, FormControlLabel, FormLabel, TextField, Button, Typography, makeStyles, Select, Radio, Toolbar, Link } from '@material-ui/core';
import { useState } from 'react'; 
import { connect } from 'react-redux';
import PropType from 'prop-types'
import { login } from '../redux/actions/student'
import { useHistory } from 'react-router-dom'; 


const styles = makeStyles(t => ({
    side1: {
        // flexDirection: 'column'
    },
    root: {
        height: `calc(100vh - 64px)`,
        [t.breakpoints.down('xs')]:{
        height: `calc(100vh - 56px)`,}
    },
    side2:{
        background: 'url(https://source.unsplash.com/random/?digital-marketing)', 
        flexDirection: 'column',
        color:'#eee',
        [t.breakpoints.down('xs')]:{
            display:'none'
        }
    }
}))

function Login(props) {
    const sty = styles()
    const history = useHistory()
    const [state, setState] = useState({});

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
        props.login(state)
        // setLoading(true)
    }
    const [value, setValue] = React.useState('Tenant');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (<>
        <Toolbar /> 
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
                        <TextField label='Phone number'
                            id='id'
                            margin='dense'
                            required
                            type="number"
                            onChange={handelChange}
                            fullWidth />
                        <TextField label='Password'
                            id='pass'
                            required
                            margin='dense'
                            type='password'
                            onChange={handelChange}
                            fullWidth />
                        <Grid container justify='space-between' alignItems='center'>
                            <Link>Forgot Password</Link>
                            <Button type='submit' variant='contained' color='primary' style={{ margin: '20px 0' }}>Login</Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid style={{ display: 'flex' }}>

                    <Typography >
                        Please Note :
                </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        To Change Password please contact support Department
                </Typography>
                </Grid>


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
