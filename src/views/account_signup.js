import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import withStyle from '@material-ui/core/styles/makeStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Paper from '@material-ui/core/Paper'

const style = makeStyles((theme) =>({
    root:{
        height:'100%',
        width:'100%'
    },
    signup_side_bar:{
        background:'linear-gradient(185.76deg, #FFFFFF -33.42%, #3CB7C6 94.97%)',
        height:'100%',
        width:'100%'
    }
}))
const Account_SignUp = (props) =>{

    const classes = style()
    
    return(
        <div style={{height: '100%',
        position: 'absolute',
        left: '0px',
        width: '100%',
        overflow: 'hidden'}}>
            <Grid className={classes.root} container item sm={12}>
                <Grid style={{height:'100%', width:'100%', padding:'6% 6%'}} item sm={5}>
                    <Paper className={classes.signup_side_bar}>
                        
                    </Paper>
                </Grid>
                <Grid item sm={7}>

                </Grid>
            </Grid>
        </div>
    )
}
export default Account_SignUp