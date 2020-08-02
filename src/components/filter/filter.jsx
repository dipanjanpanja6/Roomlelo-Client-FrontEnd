import React, { useState } from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { getRoomsWithPagination } from '../../redux/actions/roomActions'
import { makeStyles, Grid, TextField, InputBase, fade, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { searchLocation } from '../../redux/actions/roomActions'
import { useLocation, useHistory } from "react-router-dom";


const styles = makeStyles((theme) => ({
  scroll: {
    '&::-webkit-scrollbar': {
      // width: 0,
      // backgroundColor: ' #F5F5F5'
    },
  },
  select: {
    width: 130,
    marginLeft:12,
    [theme.breakpoints.down('xs')]: {
      marginLeft:0,
       
      width: '33%'
    }
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.20),
    },
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
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
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}))

const Filter = (props) => {
  const sty = styles()
  let location = useLocation()
  let history = useHistory()
  const [search, setSearch] = useState("")
  const [state, setstate] = useState("")
  const [type, setType] = useState("")
  const [sort, setSort] = useState("")
  const [forWhom, setForWhom] = useState("")

  const handleChange = (event) => {
    setSearch(event.target.value)
    props.searchLocation(event.target.value)
     
  }
  const handleFocus =()=>{
    if(location.pathname==='/'){
      history.push('/rooms')
    }
  }

  const handleForWhomClick = (event) =>{

    setSort("")
    setType("")
    if(event.target.id === "boys"){
      setForWhom("Boys")
      props.getRoomWithForWhom("Boys")
    }
    if(event.target.id === "girls"){
      setForWhom("Girls")
      props.getRoomWithForWhom("Grils")
    }
    if(event.target.id === "any"){
      setForWhom("Any")
      props.getRoomWithForWhom("Any")
    }
  }

  const handlePriceChange = (event) =>{
    setForWhom("")
    setType("")
    if(event.target.id === "low"){
      setSort("Price Low to High")
      props.getRoomWithLowPrice()
    }
    if(event.target.id === "high"){
      setSort("Price High to Low")
      props.getRoomWithHighPrice()
    }
  }
  const handleTypeClick = (event) =>{
    setSort("")
    setForWhom("")
    if(event.target.id === "Private_Rooms"){
      setType("Private Rooms")
      props.getRoomWithType("Private Rooms")
    }
    if(event.target.id === "Shared_Rooms"){
      setType("Shared Rooms")
      props.getRoomWithType("Shared Rooms")
    }
    if(event.target.id === "Entire_House"){
      setType("Entire House")
      props.getRoomWithType("Entire House")
    }
  }

  return (
    <Grid container justify='space-around' alignItems='center' >

      <div className={sty.search}>
        <div className={sty.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
           onFocus={handleFocus}
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

      </div>

      <div style={{ flexGrow: 1 }}></div>

      <TextField select margin='dense'
        label="For Whom" className={sty.select}
        value={forWhom}
      >
        <MenuItem value="Boys">Boys</MenuItem>
        <MenuItem value="Girls">Girls</MenuItem>
        <MenuItem value="Girls">Family</MenuItem>
        <MenuItem value="Any">Any</MenuItem>

      </TextField>

      <TextField select className={sty.select} margin='dense'
        value={type}
        label="Type"
      >
        <MenuItem onClick={handleTypeClick} id="Private_Rooms" value="Private Rooms">Private rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Shared_Rooms" value="Shared Rooms">Shared Rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Entire_House" value="Entire House">Entire house</MenuItem>
      </TextField>

      <TextField select className={sty.select} margin='dense'
        value={sort}
        label="Sort by"
      >
        <MenuItem id="low" onClick={handlePriceChange} value="Price Low to High">Price Low to High</MenuItem>
        <MenuItem id="high" onClick={handlePriceChange} value="Price High to Low">Price High to Low</MenuItem>
      </TextField>
    </Grid>
  )
};
Filter.propType = {
  getRoomsWithPagination: PropType.func.isRequired,
  searchLocation: PropType.func.isRequired,
  getRoomWithType:PropType.func.isRequired,
  getRoomWithHighPrice:PropType.func.isRequired,
  getRoomWithLowPrice:PropType.func.isRequired,
  getRoomWithForWhom:PropType.func.isRequired

};

const mapState = (state) => ({

});
const mapActionToProps = {
  getRoomsWithPagination,
  searchLocation,
  getRoomWithType,
  getRoomWithLowPrice,
  getRoomWithHighPrice,
  getRoomWithForWhom
};
export default connect(mapState, mapActionToProps)(Filter)
