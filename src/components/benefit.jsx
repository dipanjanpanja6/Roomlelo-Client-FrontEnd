import React from 'react';
import { Grid, Typography, makeStyles } from "@material-ui/core"

import clsx from 'clsx'


const styles = makeStyles((theme) => ({
  offer: {
    padding: '50px 20px 0',

    // height: 420,
    flexDirection: "column",
  },
  growth2: {
    // height: 300,
    // padding:'0 20px',
    flexDirection: 'column'
  },
  m: {
    // padding: '20px 40px 0',
    padding: '2%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 395
    }
  },
  benefit: {
    // flexDirection: 'row', 
    textAlign: 'center',
    padding: '0 12px 20px',
  },
}))

const Benefit = (props) => {

  const sty = styles()
  return (

    <Grid container justify="center" alignItems="center" className={sty.offer}
    >
      <Typography
        variant="h4" color='textPrimary' style={{
          paddingTop: 15, textAlign: 'center', fontWeight: "bold",
        }}
      >
        Benefits of Listing with Us
          </Typography>

      <Grid container alignItems="center" justify='center'>
        {/* <Grid container xs={12} justify='center' alignItems="center" style={{ overflow: 'hidden', paddingBottom: 20 }}>
          <Grid container alignItems="center" className={sty.planRoot}> */}


            <Grid item xs={6} sm={3} className={sty.m} >
              <Grid container item alignItems="center" justify='center' className={clsx(sty.growth2, sty.benefit)}>
                <img style={{ width: '100%' }} src={require('../static/benifit3.svg')} />
                <Typography variant='subtitle1' color='textPrimary' >Maintenance</Typography>
                <Typography variant='caption' color='textSecondary' >Good maintenance keeps your tenants happy and also preserve your assets.</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={3} className={sty.m} >
              <Grid container item alignItems="center" justify='center' className={clsx(sty.growth2, sty.benefit)}>
                <img style={{ width: '100%' }} src={require('../static/benifit2.svg')} />
                <Typography variant='subtitle1' color='textPrimary'>Maintenance</Typography>
                <Typography variant='caption' color='textSecondary'>Good maintenance keeps your tenants happy and also preserve your assets.</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={3}className={sty.m} >
              <Grid container item alignItems="center" justify='center' className={clsx(sty.growth2, sty.benefit)}>
                <img style={{ width: '100%' }} src={require('../static/benifit.svg')} />
                <Typography variant='subtitle1' color='textPrimary' style={{ paddingBottom: 12 }}>Rent on time</Typography>
                <Typography variant='caption' color='textSecondary'>No more monthly reminders, no more late payments</Typography>

              </Grid>
            </Grid>
            <Grid item xs={6} sm={3} className={sty.m} >
              <Grid container item alignItems="center" justify='center' className={clsx(sty.growth2, sty.benefit)}>
                <img style={{ width: '100%' }} src={require('../static/Active Support-rafiki 2.svg')} />
                <Typography variant='subtitle1' color='textPrimary' style={{ paddingBottom: 12 }}>Rent on time</Typography>
                <Typography variant='caption' color='textSecondary'>No more monthly reminders, no more late payments</Typography>

              </Grid>
            </Grid>


          {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
    </Grid>

  )
}
export default Benefit