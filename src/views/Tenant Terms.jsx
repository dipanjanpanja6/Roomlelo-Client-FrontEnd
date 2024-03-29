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
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    topic: {
        padding: 12,
        textAlign: 'center'
    },
    subTitle: {
        paddingTop: 20
    }

}))
const TenantTerms = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Tenant Terms | RoomLelo'
        props.bookClear()
    }, [])

    const sty = style()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Toolbar />
            <Grid container style={{ flexGrow: 1 }}>
                <Grid container item sm={4} className={sty.book}>
                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        <Typography variant="body1" className={sty.topic}>
                            Tenant Terms
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Booking
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Early Termination Charges
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Why these Charges?
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            For a Secure & Peaceful Experience
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Service & Maintenance
                        </Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Rent Late Payment Charges
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
                            <b> Tenant Terms</b>
                        </Typography>
                        <Typography>
                            RoomLelo manages the owner’s house and enables renting out to tenants. Hence, only repairs and maintenance within the purview of the house like electrical, plumbing, and carpentry issues can be availed through Roomlelo’s services in accordance with the terms. Roomlelo does not have a say in matters pertaining to the neighbourhood, society, and locality not managed by the platform.
                        </Typography>
                        <Typography variant='h6' className={sty.subTitle} >
                            <b> Booking</b>
                        </Typography>
                        <Typography variant='subtitle2'><b>
                            TOKEN CHARGES
                            </b>
                        </Typography>
                        <Typography variant='body2'>
                            Security deposit and rent of one month’s rent to be paid at the time of booking. The token is not-refundable if the booking is cancelled.
                        </Typography>
                        <Typography variant='subtitle2' className={sty.subTitle}><b> EARLY TERMINATION CHARGES  </b>
                        </Typography>
                        <Typography variant='body2'>
                            If tenants move out of a RoomLelo house before completing 6 months of stay, they will be required to pay an amount equivalent to one month's rent.
                        </Typography>
                        <Typography variant='subtitle2' className={sty.subTitle}><b> Why these charges? </b>
                        </Typography>
                        <Typography variant='body2'>
                            Our house owners prefer their properties to be rented out for a long duration (also the reason for 11 month agreements). Sometimes frequent move in and move out also hampers the condition of the house & overall experience of tenants and owners.
                            Living
                        </Typography>
                        <Typography variant='subtitle2' className={sty.subTitle}><b>FOR A SECURE & PEACEFUL LIVING EXPERIENCE   </b>
                        </Typography>
                        <Typography variant='body2'>
                            Fellow Roomies and their guests or Area Managers may access your house at times (with prior intimation) to show it to prospective Roomies.Keeping valuables securely is suggested. Incase issues occur between tenants in a shared house, we encourage it to be resolved amicably amongst tenants without involving Roomlelo. We encourage you to be considerate of your co-tenants and respect their privacy.
                        </Typography>
                        <Typography variant='subtitle2' className={sty.subTitle}><b> SERVICE & MAINTENANCE  </b>
                        </Typography>
                        <Typography variant='body2'>
                            In case of any repairs or maintenance related issues, please raise a service request from your dashboard. Service visit and material (if any) charges apply to all repair or maintenance related issues. If the house is “Roomlelo Assure”, no charges are levied on the tenants.
                        </Typography>
                        <Typography variant='subtitle2' className={sty.subTitle}><b> RENT LATE PAYMENT CHARGES</b>
                        </Typography>
                        <Typography variant='body2'>
                            In case of late rent payment the tenant will be charged for rs.200/day as penalty after due date. Non-payment of rent post 15th of the month would result in a breach of tenancy terms and the tenant would be required to vacate the scheduled premises immediately. These charges are levied in order to encourage tenants to pay by due date. This is also to avoid financial inconvenience to owners and facilitate payment of rent to owner by Roomlelo, on time
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </div>
    )
};
TenantTerms.PropType = {
    sty: PropType.object.isRequired,
    book: PropType.object.isRequired,
    bookClear: PropType.func.isRequired
}
const mapState = (state) => ({ book: state.book });
const mapActionsToProps = { bookClear };
export default connect(mapState, mapActionsToProps)(TenantTerms)
