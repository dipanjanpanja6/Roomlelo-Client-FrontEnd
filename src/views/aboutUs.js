import React, { useEffect } from "react";
import { Grid,  makeStyles,  Typography, Toolbar } from '@material-ui/core'
 
import PropType from 'prop-types' 
import Footer from "../components/footer";
import AppBarSpace from "../components/appBarSpace";

const style = makeStyles((theme) => ({ 
    book: {
        padding: 34,
        backgroundColor: 'rgba(196, 196, 196, 0.19)',
        [theme.breakpoints.down('xs')]:{
            display:'none'
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
const RoomsComponents = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0) 
       document.title='About us | RoomLelo'
      }, [])
    const sty = style() 

    return (
        <>
            <Toolbar />
            <Grid container style={{padding:20}}>
                <Grid container sm={4} className={sty.book}>

                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        <Typography variant="body1" className={sty.topic}>
                            About Us
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
                            Service & Maintenace
</Typography>
                        <Typography variant="body1" className={sty.topic}>
                            Rent Late Payment Charges
</Typography>
                    </Grid>
                </Grid>

                <Grid container item sm={8} style={{ flexDirection: 'column', padding: 40 }}>
                    <Grid  >
                        <Typography variant='h4' style={{paddingBottom:20}}>
                            <b> About Us</b>
                        </Typography>
                        <Typography>
                            Roomlelo manages the owner’s house and enables renting out to tenants. Hence, only repairs and maintenance within the purview of the house like electrical, plumbing, and carpentry issues can be availed through Roomlelo’s services in accordance with the terms. Roomlelo does not have a say in matters pertaining to the neighbourhood, society, and locality not managed by the platform.
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
                            
                            <Typography variant='subtitle2' className={sty.subTitle}><b> EARLY TERMINATION CHARGES  </b>
                            </Typography>

                              If tenants move out of a Roomlelo house before completing 6 months of stay, they will be required to pay an amount equivalent to one month's rent.
                              <Typography variant='subtitle2' className={sty.subTitle}><b> Why these charges? </b>
                            </Typography>
                               Our house owners prefer their properties to be rented out for a long duration (also the reason for 11 month agreements). Sometimes frequent move in and move out also hampers the condition of the house & overall experience of tenants and owners.
                               Living 
                               <Typography variant='subtitle2' className={sty.subTitle}><b>FOR A SECURE & PEACEFUL LIVING EXPERIENCE   </b>
                            </Typography>

                               Fellow Roomies and their guests or Area Managers may access your house at times (with prior intimation) to show it to prospective Roomies.Keeping valuables securely is suggested. Incase issues occur between tenants in a shared house, we encourage it to be resolved amicably amongst tenants without involving Roomlelo. We encourage you to be considerate of your co-tenants and respect their privacy.
                               <Typography variant='subtitle2' className={sty.subTitle}><b> SERVICE & MAINTENANCE  </b>
                            </Typography>

                                 In case of any repairs or maintenance related issues, please raise a service request from your dashboard. Service visit and material (if any) charges apply to all repair or maintenance related issues. If the house is “Roomlelo Assure”, no charges are levied on the tenants.
                                 <Typography variant='subtitle2' className={sty.subTitle}><b> RENT LATE PAYMENT CHARGES</b>
                        </Typography>
                         In case of late rent payment the tenant will be charged for rs.200/day as penalty after due date. Non-payment of rent post 15th of the month would result in a breach of tenancy terms and the tenant would be required to vacate the scheduled premises immediately. These charges are levied in order to encourage tenants to pay by due date. This is also to avoid financial inconvenience to owners and facilitate payment of rent to owner by Roomlelo, on time
                            </Typography>
                </Grid>
            </Grid>


        </Grid>
        <Footer />
        </>
    )
};
RoomsComponents.PropType = {
    sty: PropType.object.isRequired
}
export default (RoomsComponents)
