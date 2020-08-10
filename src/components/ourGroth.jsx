import React from 'react';
import { Grid, Typography, makeStyles } from "@material-ui/core"
import AnimatedNumber from "animated-number-react";



const styles = makeStyles((theme) => ({
    offer: {
        padding: '25px 20px 0',
        textAlign: 'center',
        // height: 420,
        background: theme.palette.divider,
        flexDirection: "column",
    },
    growth: {
        height: 210,
        flexDirection: 'column'
    },
    animatedNum: {
        color: "#314862",
        paddingBottom: 12,
        fontSize: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem',

        }
    },
    subTitle: {
        // color: "#2289FF",
        // fontFamily: 'Poppins'
    },
}))

const Growth = (props) => {

    const sty = styles()
    return (

        <Grid
            container
            justify="center"
            alignItems="center"
            className={sty.offer}
        >
            <Typography
                variant="h4" color='textPrimary'
                style={{
                    paddingTop: 15,
                    // paddingBottom: 44,
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif",
                }}
            >
                Our remarkable growth
          </Typography>

            <Grid container alignItems="center">
                <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
                    {/* {CountAnimations(1)} */}

                    <AnimatedNumber
                        className={sty.animatedNum}
                        value={1}

                        formatValue={(value) => `${Number(value).toFixed(0)}+`}
                    // duration={2000}
                    />
                    {/* <Typography variant='h3' style={{ paddingBottom: 12 }}>+1</Typography> */}
                    <Typography className={sty.subTitle} color='primary' variant='h6'>City</Typography>
                </Grid>
                <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
                    <AnimatedNumber
                        className={sty.animatedNum}
                        value={100}
                        formatValue={(value) => `${Number(value).toFixed(0)}+`}
                        duration={4000}
                    />
                    {/* <Typography variant='h3' style={{ paddingBottom: 12 }}>100+</Typography> */}
                    <Typography className={sty.subTitle} color='primary' variant='h6'>Property Owners</Typography>
                </Grid>
                <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
                    <AnimatedNumber
                        className={sty.animatedNum}
                        value={700}
                        formatValue={(value) => `${Number(value).toFixed(0)}+`}
                        duration={5000}
                    />
                    {/* <Typography variant='h3' style={{ paddingBottom: 12 }}>700+</Typography> */}
                    <Typography className={sty.subTitle} color='primary' variant='h6'>Customers</Typography>
                </Grid>
                <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
                    <AnimatedNumber
                        className={sty.animatedNum}
                        value={2200}
                        formatValue={(value) => `${Number(value).toFixed(0)}+`}
                        duration={6000}
                    />
                    {/* <Typography variant='h3' style={{ paddingBottom: 12 }}>2200+</Typography> */}
                    <Typography className={sty.subTitle} color='primary' variant='h6'>No. of Beds</Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}
export default Growth