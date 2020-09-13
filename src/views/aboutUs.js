import React, { useEffect } from "react";
import { Grid, makeStyles, Typography, Toolbar, Divider } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import { bookClear } from "../redux/actions/bookAction";
import { connect } from "react-redux";
import Alert from '@material-ui/lab/Alert';



const style = makeStyles((theme) => ({
    book: {
        border: `solid ${theme.palette.background.paper} 20px`,
        padding: 34,
        // backgroundColor: 'rgba(196, 196, 196, 0.19)',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    topic: {
        padding: 12,
        textAlign: 'center',

    },
    subTitle: {
        paddingTop: 20
    }

}))
const AboutUs = (props) => {
    useEffect(() => {

        window.scrollTo(0, 0)
        document.title = 'About us | RoomLelo'
        props.bookClear()

    }, [])


    const sty = style()

    return (
        <div style={{ display:'flex',flexDirection:'column',minHeight:'100vh'}}>
            <Toolbar />
            <Grid container style={{flexGrow:1}}>
                <Grid container item sm={4} className={sty.book}>
                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        <Typography color='textPrimary' variant="body1" className={sty.topic}>
                            About Us
                        </Typography>
                  
                    </Grid>
                </Grid>

                <Grid container item sm={8} style={{ flexDirection: 'column', padding: 25 }}>
                    <Grid  >
                        <div style={{ width: '100%' }}>

                            <Alert variant="filled" severity="error">
                                This site is on devolvement state. If you are facing any difficulty please whatsApp/Call on <a href="https://api.whatsapp.com/send?phone=917667651878&fbclid=IwAR0ASfOooEnNvOFx0opGXp8vit72QfSz_tXE-lnCwp7uVqO_mX5sGd0Ja-w" >+91 76676 51878</a> — check it out!
                    </Alert>
                            <br />
                            <Divider />
                        </div>
                        <Typography variant='h4' style={{ paddingBottom: 20 }}>
                            <b> About Us</b>
                        </Typography>
                        <Typography>
                            RoomLeLo is a rental aggregator start-up intending to take over the pains of a property owner and eliminate the worries of tenants. The idea is to provide comfortable and convenient living spaces along with offering value added services for exceptional experiences.
                            The vision of the company is to be the best and first option for individuals looking to occupy a rental property and enhance their living experience.
                        </Typography>
                    </Grid>
                </Grid>
           
            </Grid>
                {/* <div style={{flexGrow:1}}/> */}
            <Footer />
        </div>
    )
};
AboutUs.PropType = {
    sty: PropType.object.isRequired,
    book: PropType.object.isRequired,
    bookClear: PropType.func.isRequired
}
const mapState = (state) => ({

    book: state.book,
});
const mapActionsToProps = {
    bookClear
};
export default connect(mapState, mapActionsToProps)(AboutUs)
