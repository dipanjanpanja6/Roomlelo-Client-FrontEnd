import React from 'react';
import { Grid, Typography, makeStyles } from "@material-ui/core" 



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
}))

const Testo = (props) => {

    const sty = styles()
    return (
        <Grid container justify="center" alignItems="center" className={sty.offer}
        >
          <Typography
            variant="h4" style={{
              paddingTop: 15, paddingBottom: 20, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant='body1' color='textSecondary' style={{
              paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Know why our Clients, believe and love us
          </Typography>

          <Grid container alignItems="center" justify='center'>
            <Grid item sm={5} style={{ padding: '20px 0px' }}>
              <Grid container item alignItems="center" justify='center' style={{ background: `url(https://source.unsplash.com/random/?house)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className={sty.growth2}>
                <Typography variant='h4' style={{ fontWeight:'bold',paddingBottom: 12,color:'#eee', textAlign: 'center' }}>“Know why our Customer love us”</Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
    )
}
export default Testo