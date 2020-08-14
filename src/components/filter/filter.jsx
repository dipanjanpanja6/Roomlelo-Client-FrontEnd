import React, { useState } from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { getRoomsWithPagination } from '../../redux/actions/roomActions'
import { makeStyles, Grid, TextField, InputBase, fade, MenuItem, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import { searchLocation, getFilterSearchRooms, getRoomWithLowPrice, getRoomWithHighPrice, getRoomWithForWhom, getFilterRooms } from '../../redux/actions/roomActions'
import { useLocation, useHistory } from "react-router-dom";
import GAutoComplete from "../search/G Auto Complete";


const styles = makeStyles((theme) => ({
  scroll: {
    '&::-webkit-scrollbar': {
      // width: 0,
      // backgroundColor: ' #F5F5F5'
    },
  },
  select: {
    width: 110,
    marginLeft: 12,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,

      width: '33%'
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

const Filter = (props) => {
  const sty = styles()
  let location = useLocation()
  let history = useHistory()
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [sort, setSort] = useState("")
  const [forWhom, setForWhom] = useState("")

  const handleChange = (event) => {
    if (sort !== "" || type !== "" || forWhom !== "") {
      setSearch(event.target.value)
      const filter = {
        type: type,
        sort: sort,
        for: forWhom
      }
      props.getFilterSearchRooms(filter, event.target.value)
    } else {
      setSearch(event.target.value)
      props.searchLocation(event.target.value)
    }

  }
  const handleFocus = () => {
    if (location.pathname !== '/rooms') {
      history.push('/rooms')
    }
  }

  const handleForWhomClick = (event) => {

    if (event.target.id === "boys") {
      setForWhom("Boys")

      if (search === "") {
        const filter = {
          type: type,
          sort: sort,
          for: "Boys"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: sort,
          for: "Boys"
        }
        props.getFilterSearchRooms(filter, search)

      }

    }
    if (event.target.id === "girls") {
      setForWhom("Girls")
      if (search === "") {
        const filter = {
          type: type,
          sort: sort,
          for: "Girls"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: sort,
          for: "Girls"
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "none") {
      if (search === "") {
        setForWhom("")
        const filter = {
          type: type,
          sort: sort,
          for: ""


        }
        props.getFilterRooms(filter)
      } else {
        setForWhom("")
        const filter = {
          type: type,
          sort: sort,
          for: ""


        }
        props.getFilterSearchRooms(filter, search)
      }

    }

    if (event.target.id === "any") {
      setForWhom("Any")
      if (search === "") {
        const filter = {
          type: type,
          sort: sort,
          for: "Any"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: sort,
          for: "Any"
        }
        props.getFilterSearchRooms(filter, search)
      }


    }
    if (event.target.id === "family") {
      setForWhom("Family")
      if (search === "") {
        const filter = {
          type: type,
          sort: sort,
          for: "Family"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: sort,
          for: "Family"
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
  }

  const handlePriceChange = (event) => {
    if (event.target.id === "low") {
      setSort("Price Low to High")
      if (search === "") {
        const filter = {
          type: type,
          sort: "low",
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: "low",
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "high") {
      setSort("Price High to Low")
      if (search === "") {
        const filter = {
          type: type,
          sort: "high",
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: "high",
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "none") {
      setSort('')
      if (search === "") {
        const filter = {
          type: type,
          sort: "",
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: "",
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }
    }
  }
  const handleTypeClick = (event) => {
    if (event.target.id === "Private_Rooms") {
      setType("Private Rooms")
      if (search === "") {
        const filter = {
          type: "Private Rooms",
          sort: sort,
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "Private Rooms",
          sort: sort,
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }


    }
    if (event.target.id === "Shared_Rooms") {
      setType("Shared Rooms")
      if (search === "") {
        const filter = {
          type: "Shared Rooms",
          sort: sort,
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "Shared Rooms",
          sort: sort,
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "Entire_House") {
      setType("Entire House")
      if (search === "") {
        const filter = {
          type: "Entire House",
          sort: sort,
          for: forWhom
        }
        props.getFilterRooms(filter)
      }
    } else {
      const filter = {
        type: "Entire House",
        sort: sort,
        for: forWhom
      }
      props.getFilterSearchRooms(filter, search)
    }
    if (event.target.id === "none") {
      setSort('')
      if (search === "") {
        const filter = {
          type: "",
          sort: sort,
          for: forWhom
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "",
          sort: sort,
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }
    }

  }
  const clear = () => {
    setForWhom('')
    setSearch("")
    setSort("")
    setType("")
  }
  return (
    <Grid container justify='space-around' alignItems='center'   >

      <div className={sty.search}>
        {/*  <div className={sty.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onInput={handleFocus}
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


      <IconButton onClick={clear} style={{padding:5}}>
         <HighlightOffIcon /> 
        <ClearAllIcon />
        </IconButton>*/}
        <div style={{ minWidth:300,width: '100%' }}>
          <GAutoComplete />
        </div>
      </div>
      <div style={{ flexGrow: 1 }}></div>

      <TextField select margin='dense' defaultValue={"None"}
        placeholder="For Whom" className={sty.select}

      >
        <MenuItem onClick={handleForWhomClick} id="none" value="None">For Whom</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="boys" value="Boys">Boys</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="girls" value="Girls">Girls</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="family" value="Family">Family</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="any" value="Any">Any</MenuItem>

      </TextField>

      <TextField select className={sty.select} margin='dense'
        defaultValue={"None"}
        placeholder="Type"
      >
        <MenuItem onClick={handleTypeClick} id="none" value="None">All Types</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Private_Rooms" value="Private Rooms">Private rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Shared_Rooms" value="Shared Rooms">Shared Rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Entire_House" value="Entire House">Entire house</MenuItem>
      </TextField>

      <TextField select className={sty.select} margin='dense'
        defaultValue={"None"}
        placeholder="Sort by"
      >
        <MenuItem onClick={handlePriceChange} id="none" value="None">Any Price</MenuItem>
        <MenuItem id="low" onClick={handlePriceChange} value="Price Low to High">Price Low to High</MenuItem>
        <MenuItem id="high" onClick={handlePriceChange} value="Price High to Low">Price High to Low</MenuItem>
      </TextField>

    </Grid>
  )
};
Filter.propType = {
  getRoomsWithPagination: PropType.func.isRequired,
  searchLocation: PropType.func.isRequired,
  getRoomWithType: PropType.func.isRequired,
  getRoomWithHighPrice: PropType.func.isRequired,
  getRoomWithLowPrice: PropType.func.isRequired,
  getRoomWithForWhom: PropType.func.isRequired,
  getFilterRooms: PropType.func.isRequired,
  getFilterSearchRooms: PropType.func.isRequired

};

const mapState = (state) => ({

});
const mapActionToProps = {
  getRoomsWithPagination,
  searchLocation,
  getFilterRooms,
  getFilterSearchRooms
};
export default connect(mapState, mapActionToProps)(Filter)
