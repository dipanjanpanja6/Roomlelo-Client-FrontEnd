import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography, Paper, makeStyles, Select, MenuItem, TextField, InputBase } from '@material-ui/core'
import GoogleMapsAutoComplete from './G Auto Complete'
import { connect } from 'react-redux'
import { useHistory, matchPath, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

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
    },
    search: {
        position: 'relative',
        display: 'flex',
        // borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.black, 0.10),
        // '&:hover': {
        //   backgroundColor: fade(theme.palette.common.black, 0.20),
        // },
        marginLeft: 0,
        width: '100%',
    
        [theme.breakpoints.up('ls')]: {
          // marginLeft: theme.spacing(1),
          width: 'auto',
        },
        [theme.breakpoints.down('ls')]: {
          width: '100%'
        }
      },
    
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      inputRoot: {
        color: "inherit",
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          // width: '30ch',
          '&:focus': {
            // width: '35ch',
          },
        },
      },
}))
const SearchToolBar = props => {
    const sty = style()
    const history = useHistory()
    let location = useLocation()
    const [priceValue, setPriceValue] = useState("No Limit")
    const [type, setType] = useState("All Types")
    const [forWhom, setForWhom] = useState("Any")
    const [sort, setSort] = useState("Recommended Price")
    const [sortData, setSortData] = useState("")
    const [forWhomData, setForWhomData] = useState("")
    const [typeData, setTypeData] = useState("")
    const [search, setSearch] = useState("")

    const handleFocus = () =>{

    }
    const handleChange = (event) =>{
        setSearch(event.target.value)
    }
    const handleTypeClick = (event) => {
        if (event.target.id === "none") {
            setType("All Types")
            setTypeData("")

        }
        if (event.target.id === "Private_Rooms") {
            setType("Private Rooms")
            setTypeData("Private Rooms")

        }
        if (event.target.id === "Shared_Rooms") {
            setType("Shared Rooms")
            setTypeData("Shared Rooms")

        }
        if (event.target.id === 'Entire_House') {
            setType("Entire House")
            setTypeData("Entire House")

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
    const handleForClick = (event) =>{
        
        if(event.target.id === "none"){
            setForWhom("Any")
            setForWhomData("")
        }else{
            setForWhom(event.target.id)
            setForWhomData(event.target.id)
        }
    }

    const handlePriceChange = (event) =>{
        if(event.target.id === "none"){
            setSortData("")
            setSort("Recommended Price")
        }
        if(event.target.id === "low"){
            setSort('Price Low to High')
            setSortData("low")
        }
        if(event.target.id === "high"){
            setSort("Price High to Low")
            setSortData("high")
        }
    }

    React.useEffect(() =>{
        localStorage.removeItem('search_data')
    })
    const handleSearch = () => {
        const data = {
            search:search !== "" ? search : "",
            type:typeData !== "" ? typeData : "",
            forWhom: forWhomData !== "" ? forWhomData : "",
            sort: sortData !== "" ? sortData : "" 
        }
        const j = JSON.stringify(data)
        localStorage.setItem('search_data', j)
        history.push('/rooms')
       
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
                        {/* <div style={{width:'90%'}}>
                        <GoogleMapsAutoComplete />
                        </div> */}
                        <div className={sty.search}>
          <div className={sty.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          autoFocus
          onChange={handleChange}
          placeholder="Search…"
          classes={{
            root: sty.inputRoot,
            input: sty.inputInput,
          }}
          value={search}
          inputProps={{ 'aria-label': 'search' }}
        />
      <div style={{ flexGrow: 1 }}></div>

        {/* <div style={{ minWidth: 300, width: '100%' }}>
          <GAutoComplete setPlaceIdData={setPlaceIdData} handleClear={handlePlaceClear} place={place}/>
        </div> */}
      </div>
                    </Grid>
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
                        <Select variant='outlined' margin='dense' className={sty.select} MenuProps={{ classes: { paper: sty.paperRoot } }} value={forWhom} >
                            <MenuItem onClick={handleForClick} id="none" value="Any">Any</MenuItem>
                            <MenuItem onClick={handleForClick} id="Boys" value="Boys">Boys</MenuItem>
                            <MenuItem onClick={handleForClick} id="Girls" value="Girls">Girls</MenuItem>
                            <MenuItem onClick={handleForClick} id="Family" value="Family">Family</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>Max Price</Typography>
                        {/* <Select variant='outlined' margin='dense' className={sty.select} MenuProps={{ classes: { paper: sty.paperRoot } }} value={priceValue} >
                            <MenuItem onClick={handlePiceClick} id="no_limit" value="No Limit">No Limit</MenuItem>
                            <MenuItem onClick={handlePiceClick} id="option_1" value="Below 5k">Below 5k</MenuItem>
                            <MenuItem onClick={handlePiceClick} id="option_2" value="5k to 10k">5k to 10k</MenuItem>
                            <MenuItem onClick={handlePiceClick} id="option_3" value="10k to 20k">10k to 20k</MenuItem>
                            <MenuItem onCli
                            ck={handlePiceClick} id="option_4" value="above 20k">above 20k</MenuItem>
                        </Select> */}
                         <TextField select className={sty.select} margin='dense' variant="outlined"
        defaultValue={"None"} value={sort}
        placeholder="Sort by"
      >
        <MenuItem onClick={handlePriceChange} id="none" value="Recommended Price">Recommended Price</MenuItem>
        <MenuItem id="low" onClick={handlePriceChange} value="Price Low to High">Price Low to High</MenuItem>
        <MenuItem id="high" onClick={handlePriceChange} value="Price High to Low">Price High to Low</MenuItem>
      </TextField>
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
