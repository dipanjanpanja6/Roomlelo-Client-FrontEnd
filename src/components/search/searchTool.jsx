import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography, Paper, makeStyles, Select, MenuItem } from '@material-ui/core'
import GoogleMapsAutoComplete from './G Auto Complete'

const style = makeStyles(theme => ({
    padding: {
        // padding: 20,
        [theme.breakpoints.down('xs')]: {
            // padding: 0,

        }
    },
    title: {
        fontWeight: 'bold',
    },
    select: {
        marginTop: 8,
        marginBottom: 4,
        width: '90%'
    },
    paperRoot: {
        background: theme.palette.secondary.main,

    },
    paper: {
        // minHeight: 150,
        width: "100%",
        padding: '20px 0',
        // maxWidth:200,
        [theme.breakpoints.down('xs')]: {

            borderRadius: 0
        }
    }
}))
const SearchToolBar = props => {
    const sty = style()
 
    const handleTypeClick = (event) => {

    }

    return (

        <Grid
            container
            justify="center"
            alignItems="center"
            className={sty.padding}
        >
            <Paper className={sty.paper} elevation={0} classes={{ root: sty.paperRoot }}>
                <Grid style={{ minHeight: 140, width: "100%" }}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>Location </Typography>
                        <GoogleMapsAutoComplete />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>Property Type</Typography>
                        <Select variant='outlined' margin='dense' value={'None'} className={sty.select} MenuProps={{classes:{paper:sty.paperRoot}}} >
                            <MenuItem onClick={handleTypeClick} id="none" value="None">All Types</MenuItem>
                            <MenuItem onClick={handleTypeClick} id="Private_Rooms" value="Private Rooms">Private rooms</MenuItem>
                            <MenuItem onClick={handleTypeClick} id="Shared_Rooms" value="Shared Rooms">Shared Rooms</MenuItem>
                            <MenuItem onClick={handleTypeClick} id="Entire_House" value="Entire House">Entire house</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>Max Price</Typography>
                        <Select variant='outlined' margin='dense' className={sty.select} value={20} MenuProps={{classes:{paper:sty.paperRoot}}}>
                            <MenuItem value={0}>No Limit</MenuItem>
                            <MenuItem value={5}>Below 5k</MenuItem>
                            <MenuItem value={10}>5k to 10k</MenuItem>
                            <MenuItem value={20}>10k to 20k</MenuItem>
                            <MenuItem value={30}>above 20k</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} sm={3} container justify='center' alignItems='center'>
                        <Button variant='contained' size='large' color='primary' style={{ paddingLeft: 50, marginTop: 12, paddingRight: 50 }}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    )
}

SearchToolBar.propTypes = {

}

export default SearchToolBar
