import React, { useState } from 'react';
import { Grid, Typography, makeStyles, TextField, Button, useTheme, useMediaQuery, InputAdornment } from "@material-ui/core"

import clsx from 'clsx'
import { url } from '../config/config';
import { toast } from 'react-toastify';


const styles = makeStyles((theme) => ({
    root: {
        marginTop: 150,
        flexDirection: "column",
        [theme.breakpoints.down('xs')]: {

            marginTop: 1,
        }
    },
    heading: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 24
        }
    },
    image: {
        float: 'right',
        marginTop: '-120px',
        backgroundImage: `url(${require('../static/appDownload.svg')})`, height: 400, width: 550, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    container: {
        background: '#ffea00', height: 300, [theme.breakpoints.down('xs')]: {
            height: 'auto',
            padding: '30px 3.5%'
        }
    },
    input: {
        marginRight: 12, width: 'auto', [theme.breakpoints.down('xs')]: {
            width: '70%'
        }
    }
}))

const AppDownload = (props) => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('700'));
    const sty = styles()
    const [subscribe, setSubscribe] = useState({ mobile: '', name: '', email: '', otp: '', state: '', id: '' })
    const [status, setStatus] = useState(0)
    const sub = () => {
        if (subscribe.mobile == '' || !subscribe.mobile.match(/^\d{10}$/)) return toast.warn('Enter valid Phone Number.')
        fetch(`${url}/refer/subscribe`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(subscribe)
        }).then(res => res.json().then(data => {
            console.log(data);
            if (data.success) {
                setStatus(1)
            } else {
                toast.error('Something went wrong :(')
            }
        })).catch(error => {
            console.log(error);
        })
    }
    return (

        <Grid container justify="center" alignItems="center" className={sty.root}        >
            <Grid container alignItems="center" justify='center' className={sty.container}>
                <Grid item sm={5} xs={0}>
                    <div className={sty.image} />
                </Grid>
                <Grid item sm={6} xs={12} style={{ textAlign: 'left', margin: '0 auto' }}>

                    <Typography variant={'h4'} color='textPrimary' className={sty.heading} >Download RoomLelo App</Typography>
                    {/* <Typography color='textSecondary' >Keep your home happy and hygienic with good maintenance.</Typography> */}
                    <Typography variant='body1' style={{ padding: '12px 0' }} >Subscribe us for exciting offer, latest update & many more.</Typography>
                    <div style={{ display: 'inline-flex' }}>
                        {status == 0 ? <><TextField className={sty.input} size='small' variant='outlined' placeholder='Enter your mobile number'
                            value={subscribe.mobile}
                            type='number'
                            onChange={(v) => setSubscribe({ mobile: v.target.value })}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        +91
                                    </InputAdornment>
                                ),
                            }} />
                            <Button onClick={sub} variant='contained' color='primary'>{mobile ? "Let's Go" : 'Stay in touch'}</Button></> :
                            <Typography variant='h4'>subscribed</Typography>}
                    </div>
                    <br />
                    <br />
                    <a href='https://play.google.com/store/apps/details?id=in.roomlelo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img height='60px' alt='Get it on Google Play' src={require('../static/google-play-badge.png')} /></a>

                </Grid>
                {/* </Grid> */}
            </Grid>
        </Grid>

    )
}
export default AppDownload