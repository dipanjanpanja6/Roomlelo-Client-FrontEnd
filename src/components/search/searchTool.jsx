import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography, Paper, makeStyles, Select, MenuItem } from '@material-ui/core'
import GoogleMapsAutoComplete from './G Auto Complete'
import { connect } from 'react-redux'
import { useHistory, matchPath, useLocation } from "react-router-dom";

import { getFilteredSearch, getFiltered } from '../../redux/actions/roomActions'
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
    const history = useHistory()
    let location = useLocation()
    const [priceValue, setPriceValue] = useState("No Limit")
    const [type, setType] = useState("All Types")


    const handleTypeClick = (event) => {
        if (event.target.id === "none") {
            setType("All Types")

        }
        if (event.target.id === "Private_Rooms") {
            setType("Private Rooms")

        }
        if (event.target.id === "Shared_Rooms") {
            setType("Shared Rooms")

        }
        if (event.target.id === 'Entire_House') {
            setType("Entire House")

        }
    }
    const handlePiceClick = (event) => {
        if (event.target.id === "no_limit") {
            setPriceValue("No Limit")

        }
        if (event.target.id === "option_1") {
            setPriceValue("Below 5k")

        }
        if (event.target.id === "option_2") {
            setPriceValue("5k to 10k")

        }
        if (event.target.id === "option_3") {
            setPriceValue("10k to 20k")

        }
        if (event.target.id === "option_4") {
            setPriceValue("above 20k")

        }

    }

    const handleSearch = () => {
        console.log(props.room.searchText);
        if (props.room.searchText === "" || props.room.searchText === null) {
            //props.getFiltered(price, typeValue)
            console.log("ll");
            if (priceValue !== "No Limit" || type !== "All Types") {
                console.log("ll22");
                history.push(`/rooms?search=false&filter=true&price=${priceValue}&type=${type}`)
            } else {
                history.push('/rooms')

            }

        } else if (props.room.searchText !== "" || props.room.searchText !== null) {
            if (priceValue !== "No Limit" || type !== "All Types") {
                history.push(`/rooms?search=true&searchId=${props.room.searchText}&filter=true&price=${priceValue}&type=${type}`)
            } else {
                history.push(`/rooms?search=true&searchId=${props.room.searchText}&filter=false`)
            }
            //props.getFilteredSearch(props.room.searchText, price, typeValue)
        }
    }
    const match = matchPath(location.pathname, {
        path: "/rooms",
        exact: true,
        strict: false
    });
    return (

        <Grid
            container
            justify="center"
            alignItems="center"
            className={sty.padding}
        >
            <Paper className={sty.paper} style={{ padding: match && '0' }} elevation={0} classes={{ root: sty.paperRoot }}>
                <Grid style={{ minHeight: 100, width: "100%" }}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6} sm={3}>
                        <Typography variant={match?"caption":'h6'} className={sty.title}>Location </Typography>
                        <div style={{width:'90%'}}>
                        <GoogleMapsAutoComplete />
                        </div>
                    </Grid>
                    {/* <Grid container xs={12} sm={9} > */}
                        <Grid item xs={6} sm={3}>
                            <Typography variant='h6' className={sty.title}>Property Type</Typography>
                            <Select variant='outlined' margin='dense' value={type} className={sty.select} MenuProps={{ classes: { paper: sty.paperRoot } }} >
                                <MenuItem onClick={handleTypeClick} id="none" value="All Types">All Types</MenuItem>
                                <MenuItem onClick={handleTypeClick} id="Private_Rooms" value="Private Rooms">Private rooms</MenuItem>
                                <MenuItem onClick={handleTypeClick} id="Shared_Rooms" value="Shared Rooms">Shared Rooms</MenuItem>
                                <MenuItem onClick={handleTypeClick} id="Entire_House" value="Entire House">Entire house</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant='h6' className={sty.title}>For Whom</Typography>
                            <Select variant='outlined' margin='dense' className={sty.select} MenuProps={{ classes: { paper: sty.paperRoot } }} value={priceValue} >
                                <MenuItem onClick={handlePiceClick} id="no_limit" value="none">Any</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_1" value="Boys">Boys</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_2" value="Girls">Girls</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_3" value="Family">Family</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant='h6' className={sty.title}>Max Price</Typography>
                            <Select variant='outlined' margin='dense' className={sty.select} MenuProps={{ classes: { paper: sty.paperRoot } }} value={priceValue} >
                                <MenuItem onClick={handlePiceClick} id="no_limit" value="No Limit">No Limit</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_1" value="Below 5k">Below 5k</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_2" value="5k to 10k">5k to 10k</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_3" value="10k to 20k">10k to 20k</MenuItem>
                                <MenuItem onClick={handlePiceClick} id="option_4" value="above 20k">above 20k</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={6} sm={3} container justify='center' alignItems='center'>
                            <Button onClick={handleSearch} variant='contained' size='large' color='primary' style={{ paddingLeft: 50, marginTop: 12, paddingRight: 50 }}>
                                Search
                        </Button>
                        </Grid>
                    {/* </Grid> */}
                </Grid>
            </Paper>
        </Grid>

    )
}

SearchToolBar.propTypes = {
    getFilteredSearch: PropTypes.func.isRequired,
    getFiltered: PropTypes.func.isRequired
}
const mapState = (state) => ({
    room: state.room
})
const mapActionsToProps = {
    getFilteredSearch,
    getFiltered
}
export default connect(mapState, mapActionsToProps)(SearchToolBar)
