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
        height: 300,
        // padding:'0 20px',
        flexDirection: 'column'
      },
    m: {
        padding: '20px 40px',
        [theme.breakpoints.down('xs')]: {
          padding: '20px 0px',
    
        }
      },
      benefit: {
        flexDirection: 'row'
      },
}))

const Benefit = (props) => {

    const sty = styles()
    return (

        <Grid container justify="center" alignItems="center" className={sty.offer}
        >
          <Typography
            variant="h4" style={{
              paddingTop: 15, paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Benefits of Listing with Us
          </Typography>

          <Grid container alignItems="center" justify='center'>
            <Grid item sm={6} className={sty.m} >
              <Grid container item alignItems="center" justify='center' style={{ padding: '0 12px', textAlign: 'center', color: '#eee', background: `url(https://source.unsplash.com/random/?rents)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className={clsx(sty.growth2, sty.benefit)}>

                <Typography variant='h3' style={{ paddingBottom: 12 }}>Rent on time</Typography>
                <Typography variant='h5'>No more monthly reminders, no more late payments</Typography>

              </Grid>
            </Grid>

            <Grid item sm={6} className={sty.m} >
              <Grid container item alignItems="center" justify='center' style={{ textAlign: 'center', padding: '0 12px', color: '#eee', background: `url(https://source.unsplash.com/random/?maintenance)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={clsx(sty.growth2, sty.benefit)}>

                <Typography variant='h3' style={{ paddingBottom: 12 }}>Maintenance</Typography>
                <Typography variant='h5' >Good maintenance keeps your tenants happy and also preserve your assets.</Typography>

              </Grid>
            </Grid>

          </Grid>
        </Grid>

    )
}
export default Benefit